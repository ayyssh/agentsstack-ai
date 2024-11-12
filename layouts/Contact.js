"use client"; 
import { useState } from "react";
import config from "@config/config.json";
import Banner from "./components/Banner";
import ImageFallback from "./components/ImageFallback";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(config.params.contact_form_action, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        access_key: "ede93194-c9b8-4bcf-b936-fb84fb914973",
      }),
    });

    if (response.ok) {
      setShowThankYou(true);
      setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
    } else {
      console.error("Failed to send message");
    }
  };

  return (
    <section className="section">
      <Banner title={title} />
      <div className="container">
        <div className="section row items-center justify-center">
          <div className="animate lg:col-5">
            <ImageFallback
              className="mx-auto lg:pr-10"
              src="/images/vectors/contact.png"
              width={497}
              height={397}
              alt=""
            />
          </div>
          <div className="animate lg:col-5">
            {showThankYou ? (
              <div className="thank-you-popup">
                <h2>Thank You!</h2>
                <p>Your message has been sent successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form rounded-xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
                <h2 className="h4 mb-6">Send A Message</h2>
                <p className="text-sm text-gray-500 mb-6">
                  Alternatively, reach out to us at <strong>{"contact@agentsstack.com"}</strong>
                </p>
                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                <div className="mb-6">
                  <label className="mb-2 block font-medium text-dark" htmlFor="name">Name</label>
                  <input
                    className="form-input w-full"
                    name="name"
                    placeholder="Full Name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6">
                  <label className="mb-2 block font-medium text-dark" htmlFor="email">Email</label>
                  <input
                    className="form-input w-full"
                    name="email"
                    placeholder="Email Address"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6">
                  <label className="mb-2 block font-medium text-dark" htmlFor="subject">Subject</label>
                  <input
                    className="form-input w-full"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6">
                  <label className="mb-2 block font-medium text-dark" htmlFor="message">Message</label>
                  <textarea
                    className="form-textarea w-full"
                    name="message"
                    rows="6"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <button className="btn btn-primary block w-full">Submit Now</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

