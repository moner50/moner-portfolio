import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-10 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p>Phone: <a href="tel:+201552981952" className="text-blue-400">+20 155 298 1952</a></p>
        <p>Email: <a href="mailto:mmoner5050@gmail.com" className="text-blue-400">mmoner5050@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/moner-tantawy-922b17265" className="text-blue-400">Profile</a></p>
        <p>GitHub: <a href="https://github.com/moner50" className="text-blue-400">moner50</a></p>
        <p>FreelanceYard: <a href="https://www.freelanceyard.com/en/freelancers/moner-tantawy" className="text-blue-400">My Freelance Profile</a></p>
      </div>
    </section>
  );
}

export default Contact;
