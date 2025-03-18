import {Link} from 'react-scroll';

export const Header = ({ pageTitle, navLinks, contactCTAText, customClassName }) => (
    <header className={`container lg:h-[12dvh] mx-auto px-4 py-6 flex flex-col gap-y-6 lg:flex-row lg:gap-0 lg:justify-between items-center ${customClassName || ''}`}>
        <h1 className="text-2xl font-bold text-gray-800">{pageTitle}</h1>

        <nav className="flex items-center gap-6">
            {navLinks?.map((link) => (
                <Link
                    key={link.to}
                    to={link.to}
                    smooth={true}
                    duration={300}
                    className="text-sm lg:text-md text-gray-600 cursor-pointer hover:text-gray-900 transition-colors"
                >
                    {link.label}
                </Link>
            ))}

            <Link to="contact" smooth={true} duration={500}
                  className="text-sm lg:text-md font-semibold bg-gradient-to-r from-indigo-600 to-purple-500 animate-gradient cursor-pointer text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors">
                {contactCTAText}
            </Link>
        </nav>
    </header>
);