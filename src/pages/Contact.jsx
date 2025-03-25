import ContactForm from '../components/Contact/ContactForm.jsx';
import ContactDetails from '../components/Contact/ContactDetails.jsx';
import { Element } from 'react-scroll';

const contactData = {
        "contactDetails": {
            "image": "/moner-portfolio/images/profile.png",
            "info": {
                "Address": "Cairo, Egypt",
                "MobileNumber": "+20 155 298 1952",
                "Email": "mmoner5050@gmail.com"
            },
            "social": {
                "linkedin": "https://www.linkedin.com/in/moner-tantawy-922b17265",
                "github": "https://github.com/moner50",
                "freelance-yard": "https://www.freelanceyard.com/en/freelancers/moner-tantawy"
            }
        },
        "formConfig": {
            "accessKey": "c945e4a2-ef0d-4449-859d-e0cfc1795753"
        }
};

const Contact = () => {

  const formConfig = {
    formAction: 'https://api.web3forms.com/submit',
    accessKey: contactData.formConfig.accessKey,
  };

  const contactDetails = {
    image: contactData.contactDetails.image,
    infoItems: [
      {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-indigo-500" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
        ),
        text: contactData.contactDetails.info.Address
      },
      {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-indigo-500" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
        ),
        text: contactData.contactDetails.info.MobileNumber
      },
      {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-indigo-500" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
        ),
        text: contactData.contactDetails.info.Email
      }
    ],
    socialLinks: [
      {
        url: contactData.contactDetails.social.linkedin,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 fill-current">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.26c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 12.26h-3v-5.6c0-3.36-4-3.11-4 0v5.6h-3v-11h3v1.76c1.39-2.58 7-2.77 7 2.55v6.69z"/>
            </svg>
        )
      },
        {
            url: contactData.contactDetails.social.github,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="feather feather-github w-10 h-10">
                    <path
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
            )
        },
        {
            url: contactData.contactDetails.social["freelance-yard"],
            icon: (
                <img src={'https://www.freelanceyard.com/images/favicon.png'} alt={""} className={'w-10 h-10 hover:opacity-75 transition'}/>
            )
        }
    ]
  };


    return (
        <Element name="contact">
            <section className="bg-gray-50 py-6 min-h-[100dvh] flex items-center">
                <div className="container px-6 py-10 mx-auto">
                    <div className="lg:flex lg:items-center lg:-mx-10">
                        <div className="lg:w-1/2 lg:mx-10">
                            <h1 className="font-bold text-gray-800 capitalize text-4xl mb-4 bg-gradient-to-r from-indigo-600 to-purple-400 bg-clip-text text-transparent">
                                Let’s talk
                            </h1>
                            <p className="mt-4 text-gray-500">
                                Ask me everything and I would love to hear from you..
                            </p>
                            <ContactForm {...formConfig} />
                        </div>

                        <ContactDetails details={contactDetails}/>
                    </div>
                </div>
            </section>
        </Element>
    );
};

export default Contact;
