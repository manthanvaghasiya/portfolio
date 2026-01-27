import React from "react";

const HeroImage = () => {
    return (
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-start order-1" data-aos="fade-right" data-aos-duration="800">
            <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-xl lg:-mr-6 -mt-8 lg:-mt-24">
                <img
                    src="/profile.jpg"
                    alt="Manthan"
                    className="w-full h-auto max-h-[350px] md:max-h-[500px] lg:max-h-[720px] object-contain drop-shadow-2xl transform scale-100 lg:scale-110 origin-bottom hover:scale-[1.05] lg:hover:scale-[1.2] transition-transform duration-700 ease-out animate-float"
                    style={{
                        maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                    }}
                />
            </div>
        </div>
    );
};

export default HeroImage;
