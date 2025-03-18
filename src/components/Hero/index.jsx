import { Header } from './Header.jsx';
import { HeroContent } from './HeroContent.jsx';
import { HeroImage } from './HeroImage.jsx';

export const Hero = ({
                         pageTitle,
                         navLinks,
                         contactCTAText,
                         heroHeading,
                         heroHighlight,
                         heroDescription,
                         heroCTAText,
                         imageSrc,
                         imageAlt,
                         customClassName
                     }) => {
    return (
        <section className={`min-h-[100dvh] relative bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden ${customClassName}`}>
            <Header
                pageTitle={pageTitle}
                navLinks={navLinks}
                contactCTAText={contactCTAText}
            />

            <div className="container mx-auto px-4 h-[calc(88dvh)] grid gap-6 grid-cols-1 lg:grid-cols-2 items-center">
                <HeroContent
                    customClassName={`header-content`}
                    heading={heroHeading}
                    highlight={heroHighlight}
                    description={heroDescription}
                    ctaText={heroCTAText}
                />

                <HeroImage
                    customClassName={`header-image`}
                    src={imageSrc}
                    alt={imageAlt}
                />
            </div>
        </section>
    );
};