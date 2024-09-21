import React, {useState} from "react";
import {useForm, ValidationError} from "@formspree/react";

const ContactForm: React.FC = () => {
  const [selectedSocial, setSelectedSocial] = useState("instagram");
  const [state, handleSubmit] = useForm("mrbzwqno");

  const handleSocialClick = (social: string) => {
    setSelectedSocial(social);
  };

  // Function to get the corresponding social media image
  const getImageForSocial = () => {
    switch (selectedSocial) {
      case "instagram":
        return "/IG.jpeg";
      case "github":
        return "/Git.jpeg";
      case "linkedin":
        return "/path-to-your-image/linkedin-image.png";
      case "twitter":
        return "/path-to-your-image/twitter-image.png";
      default:
        return "/path-to-your-image/default-image.png";
    }
  };

  // Function to get the URL for the selected social media
  const getUrlForSocial = () => {
    switch (selectedSocial) {
      case "instagram":
        return "https://www.instagram.com/isaeall/";
      case "github":
        return "https://github.com/AkaneAqua";
      case "linkedin":
        return "https://linkedin.com/in/your-profile";
      case "twitter":
        return "https://twitter.com/your-profile";
      default:
        return "#";
    }
  };

  return (
    <section
      id="contact"
      className="px-10 py-10 text-white bg-black"
    >
      <div className="container max-w-5xl p-8 mx-auto my-10 text-gray-300 bg-black rounded-lg shadow-lg">
        <h1 className="mb-4 text-4xl font-bold text-gray-100">Contact</h1>

        {/* Show notification if form submission succeeded */}
        {state.succeeded && (
          <div className="p-4 mb-4 text-green-600 bg-green-200 border border-green-600 rounded-lg">
            Thanks for reaching out! I'll get back to you soon.
          </div>
        )}

        <hr className="my-6 border-gray-700" />

        {/* Grid Layout for Social Media and Form */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Social Media Section */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-100">
              Find me on
            </h2>
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleSocialClick("instagram")}
                className="flex items-center px-4 py-2 text-white border border-gray-600 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
              >
                <i className="mr-2 fab fa-instagram"></i> Instagram
              </button>
              <button
                onClick={() => handleSocialClick("github")}
                className="flex items-center px-4 py-2 text-white bg-black border border-gray-600 rounded-lg hover:bg-gray-800"
              >
                <i className="mr-2 fab fa-github"></i> GitHub
              </button>
            </div>
          </div>

          {/* Social Media Image Preview */}
          <div className="flex items-center justify-center">
            <a
              href={getUrlForSocial()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={getImageForSocial()}
                alt="Phone Display"
                className="w-64 transition-opacity rounded-lg shadow-lg cursor-pointer hover:opacity-80"
              />
            </a>
          </div>

          {/* Email Form with Formspree Integration */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-100">
              Or send me an email
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 font-semibold text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 text-gray-200 bg-black border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 font-semibold text-gray-400"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    placeholder="Enter your subject"
                    className="w-full px-4 py-3 text-gray-200 bg-black border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 font-semibold text-gray-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Enter your message"
                    className="w-full h-40 px-4 py-3 text-gray-200 bg-black border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-3 text-white transition-colors duration-300 bg-gray-800 rounded-lg hover:bg-gray-900"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
