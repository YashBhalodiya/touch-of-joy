import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); 
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await axios.post(
        "https://touch-of-joy-ne4u.onrender.com/api/contact",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong");
      }
    } catch (error) {
      setStatus("error");
      if (error.response && error.response.data && error.response.data.error) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage(
          "Failed to connect to the server. Please try again later."
        );
      }
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#f7dfd6]/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12"
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
              Contact Us
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-4 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-10 text-lg">
              Ready to experience luxury? Book an appointment or reach out with
              any questions. We're here to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-gray-900 text-xl mb-1">
                    Our Location
                  </h4>
                  <p className="text-gray-600">
                    123 Luxury Avenue, Suite 100
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                  <Phone />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-gray-900 text-xl mb-1">
                    Phone
                  </h4>
                  <p className="text-gray-600">
                    +1 (555) 123-4567
                    <br />
                    +1 (555) 987-6543
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                  <Mail />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-gray-900 text-xl mb-1">
                    Email
                  </h4>
                  <p className="text-gray-600">
                    hello@touchofjoy.com
                    <br />
                    bookings@touchofjoy.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                  <Clock />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-gray-900 text-xl mb-1">
                    Working Hours
                  </h4>
                  <p className="text-gray-600">
                    Mon - Fri: 9:00 AM - 8:00 PM
                    <br />
                    Sat - Sun: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-7/12"
          >
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-[#faf9f6] border-[#f7dfd6] focus-visible:ring-[#e29c8e] focus-visible:border-[#e29c8e] placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-[#faf9f6] border-[#f7dfd6] focus-visible:ring-[#e29c8e] focus-visible:border-[#e29c8e] placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-[#faf9f6] border-[#f7dfd6] focus-visible:ring-[#e29c8e] focus-visible:border-[#e29c8e] placeholder:text-gray-400 resize-none"
                  />
                </div>

                {status === "success" && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-md text-sm border border-green-200">
                    Thank you! Your message has been sent successfully. We will
                    get back to you soon.
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-md text-sm border border-red-200">
                    {errorMessage}
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
