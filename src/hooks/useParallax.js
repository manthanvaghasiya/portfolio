import { useScroll, useTransform } from "framer-motion";

export const useParallax = (ref, distance = 50) => {
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    return useTransform(scrollYProgress, [0, 1], [0, distance]);
};
