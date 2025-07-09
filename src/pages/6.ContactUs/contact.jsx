import React, { useState } from "react";
import { Icon } from "@iconify/react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message! We will get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: "mdi:phone",
      title: "Phone",
      details: ["+256 785939224", "+256 702190179", "+256 705153856"],
    },
    {
      icon: "mdi:email",
      title: "Email",
      details: ["ofoemma@gmail.com", "endconcepts@gmail.com"],
    },
    {
      icon: "mdi:map-marker",
      title: "Address",
      details: ["Kampala, Uganda"],
    },
  ];

  const officeLocations = [
    {
      city: "Kampala",
      address: "Kampala, Uganda",
      phone: "+256 785939224",
      email: "endconcepts@gmail.com",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Contact Form and Info Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[#001d6c] mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001d6c] focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001d6c] focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001d6c] focus:border-transparent"
                    placeholder="+256 785939224"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001d6c] focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001d6c] focus:border-transparent"
                  placeholder="What can we help you with?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001d6c] focus:border-transparent resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#001d6c] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#003a9c] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#001d6c] mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We're here to help you transform your business with cutting-edge
                technology solutions. Reach out to us and let's discuss how we
                can drive your digital transformation journey.
              </p>
            </div>
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#001d6c] rounded-lg flex items-center justify-center">
                    {info.title === "Phone" && (
                      <Icon icon="mdi:phone" className="text-white text-2xl" />
                    )}
                    {info.title === "Email" && (
                      <Icon icon="mdi:email" className="text-white text-2xl" />
                    )}
                    {info.title === "Address" && (
                      <Icon icon="mdi:map-marker" className="text-white text-2xl" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Office Locations */}
      <div className="bg-gray-50 py-16">
        <div className="max-w h-full mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001d6c] mb-8">
            Our Offices
          </h2>
          <div className="flex items-center w-full gap-8">
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-[#001d6c] mb-4">
                  {office.city}
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-600 flex items-center gap-2">
                    <Icon icon="mdi:map-marker" className="text-[#001d6c] text-lg" />
                    {office.address}
                  </p>
                  <p className="text-gray-600 flex items-center gap-2">
                    <Icon icon="mdi:phone" className="text-[#001d6c] text-lg" />
                    {office.phone}
                  </p>
                  <p className="text-gray-600 flex items-center gap-2">
                    <Icon icon="mdi:email" className="text-[#001d6c] text-lg" />
                    {office.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
