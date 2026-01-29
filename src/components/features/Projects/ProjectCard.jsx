import React, { useRef } from "react";
import { ArrowUpRight, Layers, ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useMotionTemplate, useTransform } from "framer-motion";

const ROTATION_RANGE = 15;

const ProjectCard = ({ project, onClick, index }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [ROTATION_RANGE, -ROTATION_RANGE]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-ROTATION_RANGE, ROTATION_RANGE]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const clientX = e.clientX - rect.left;
        const clientY = e.clientY - rect.top;

        // Normalize to -0.5 to 0.5 range
        const xPct = clientX / width - 0.5;
        const yPct = clientY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // Gloss Effect: Moves opposite to mouse
    const glossX = useTransform(x, [-0.5, 0.5], ["100%", "0%"]);
    const glossY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);
    const glossBackground = useMotionTemplate`radial-gradient(circle at ${glossX} ${glossY}, rgba(255, 255, 255, 0.35) 0%, transparent 60%)`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="h-full perspective-1000"
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={onClick}
                style={{
                    transformStyle: "preserve-3d",
                    rotateX,
                    rotateY,
                }}
                className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer flex flex-col h-full transform-gpu"
            >
                {/* --- REAL GLOSS OVERLAY --- */}
                <motion.div
                    className="absolute inset-0 z-50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"
                    style={{ background: glossBackground }}
                />

                {/* Image Area */}
                <div className="relative h-56 md:h-60 overflow-hidden shrink-0" style={{ transform: "translateZ(20px)" }}>
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10 duration-500" />
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity z-20 translate-y-2 group-hover:translate-y-0 duration-300">
                        <ArrowUpRight size={16} className="text-slate-900" />
                    </div>
                </div>

                {/* Content Area */}
                <div className="p-5 flex flex-col flex-grow bg-white relative z-20" style={{ transform: "translateZ(30px)" }}>
                    <div className="mb-3">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-50 text-blue-600">
                                <Layers size={12} />
                            </span>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                {project.category.split("·")[0].trim()}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                            {project.title}
                        </h3>
                    </div>

                    <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                        {project.shortDescription}
                    </p>

                    {/* Tech Stack */}
                    <div className="mt-auto">
                        <div className="flex flex-wrap gap-1.5 mb-4">
                            {project.tech.map((t, i) => (
                                <span key={i} className="px-2 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded border border-slate-100 group-hover:border-blue-100 group-hover:bg-blue-50/30 transition-colors">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="pt-4 border-t border-slate-100">
                            <span className="text-sm font-bold text-blue-600 flex items-center gap-2 group-hover:gap-3 transition-all">
                                Read Case Study <ArrowRight size={16} />
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;
