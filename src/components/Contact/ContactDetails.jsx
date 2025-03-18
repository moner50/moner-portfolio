const ContactDetails = ({ details }) => {
    return (
        <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
            <img
                className="hidden object-fit mx-auto rounded-full lg:block shrink-0 w-64 h-64"
                src={details.image}
                alt="Profile"
            />

            <div className="mt-10 space-y-8 md:mt-12">
                {/* Contact Info Items */}
                {details.infoItems.map((item, index) => (
                    <p key={index} className="flex items-start -mx-2">
                        {item.icon}
                        <span className="mx-2 text-gray-700 truncate w-72">{item.text}</span>
                    </p>
                ))}
            </div>

            {/* Social Links */}
            <div className="mt-6 w-80 md:mt-8">
                <h3 className="text-gray-600">Follow Me</h3>
                <div className="flex mt-4 -mx-1.5">
                    {details.socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            className="mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-indigo-500"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;