export const HeroImage = ({ src, alt = "Hero image", customClassName }) => (
    <div className={`relative w-full h-full ${customClassName}`}>
        <div className="w-full flex items-center justify-center">
            <img
                src={src}
                alt={alt}
                className="w-48 h-48 rounded-full object-fit lg:w-auto lg:h-auto lg:rounded-sm lg:absolute max-h-[88dvh] lg:bottom-0 lg:right-[50%] lg:translate-x-1/2"
            />
        </div>
    </div>
);