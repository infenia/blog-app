"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import Header from "../ui/components/Header";
import Footer from "../ui/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark py-20 px-6 mt-20">
        <div className="max-w-5xl mx-auto space-y-10">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">
            Contact Us
          </h1>

          {/* Contact Details */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="flex items-center gap-3">
                <MapPin className="text-primary" /> Infenia Software Solutions,
                Kochi, Kerala
              </p>
              <p className="flex items-center gap-3">
                <Phone className="text-primary" /> +91 98765 43210
              </p>
              <p className="flex items-center gap-3">
                <Mail className="text-primary" /> contact@infenia.com
              </p>

              {/* ✅ Updated Social Media Section */}
              <div className="flex gap-5 mt-4">
                <a
                  href="https://www.facebook.com/InfeniaPrivateLimited"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="hover:text-primary transition" />
                </a>
                <a
                  href="https://www.instagram.com/infeniaindia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="hover:text-primary transition" />
                </a>
                <a
                  href="https://www.linkedin.com/company/infenia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="hover:text-primary transition" />
                </a>
                {/* X (Twitter new logo) */}
                <a href="https://twitter.com/InfeniaIndia" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 hover:text-primary transition"
                  >
                    <path d="M18.244 2h3.308l-7.227 8.26L22 22h-5.793l-4.538-6.256L6.4 22H3.09l7.73-8.843L2 2h5.92l4.097 5.617L18.244 2zm-.923 18.01h1.833L7.03 3.877H5.064L17.32 20.01z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@infenia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 hover:text-primary transition"
                  >
                    <path d="M19.615 3.184C20.403 3.39 21 4.066 21 4.896V19.1c0 .83-.597 1.507-1.385 1.712-1.61.417-6.616.417-6.616.417s-5.006 0-6.616-.417C5.597 20.607 5 19.93 5 19.1V4.896c0-.83.597-1.507 1.385-1.712C8 2.767 12 2.767 12 2.767s4 0 6.615.417zM10 8.5v7l6-3.5-6-3.5z" />
                  </svg>
                </a>
                {/* GitHub */}
                <a
                  href="https://github.com/infenia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 hover:text-primary transition"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.753-1.333-1.753-1.09-.744.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.81 1.304 3.495.997.108-.774.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.382 1.235-3.22-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.245 2.873.12 3.176.765.838 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.096.81 2.21 0 1.595-.015 2.875-.015 3.265 0 .315.21.69.825.57C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Feedback Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full p-3 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full p-3 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={4}
                    required
                    className="w-full p-3 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition"
                  >
                    Send Message
                  </button>
                </form>
              ) : (
                <p className="text-green-600 font-semibold">
                  Thank you! We’ll get back to you soon.
                </p>
              )}
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full h-80 mt-10 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.6065726635616!2d76.36728767036604!3d10.049287550238933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080bc2cd3b4b9b%3A0x3b6e8d084efd5aac!2sINFENIA!5e0!3m2!1sen!2sin!4v1761846706151!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
