import {Link} from "react-scroll";

export const HeroContent = ({ heading, highlight, description, ctaText, customClassName }) => (
    <div className={`relative z-10 ${customClassName}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-6">
            {heading} <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
        {highlight}
      </span>
        </h2>

        <p className="text-md md:text-lg text-gray-600 mb-8 max-w-2xl">
            {description}
        </p>

        <Link  to="contact" duration={500} smooth={true}
            className="mb-8 -ml-2 md:mb-0 block md:inline cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-500 text-white text-center md:text-left px-4 py-3 md:px-8 md:py-4 rounded-full text-md md:text-lg font-semibold hover:shadow-lg transition-shadow animate-gradient">
            {ctaText} →
        </Link>
    </div>
);