const ContactForm = ({ formAction, accessKey }) => {
    return (
        <form className="mt-12" action={formAction} method="POST">
            <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-600">Full Name</label>
                    <input
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        required
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>

                <input type="hidden" name="access_key" value={accessKey} />

                <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-600">Email address</label>
                    <input
                        type="email"
                        placeholder="your_email@example.com"
                        name="email"
                        required
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
            </div>

            <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-gray-600">Message</label>
                <textarea
                    name="message"
                    required
                    className="block max-h-[15rem] w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                />
            </div>

            <button
                type="submit"
                className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-md hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
            >
                Get in touch
            </button>
        </form>
    );
};

export default ContactForm;