import React, {useState, useEffect} from "react";
import {useForm, ValidationError} from "@formspree/react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm: React.FC = () => {
  const [selectedSocial, setSelectedSocial] = useState("instagram");
  const [state, handleSubmit] = useForm("mrbzwqno");

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
    });
    AOS.refresh();
  }, []);

  const handleSocialClick = (social: string) => {
    setSelectedSocial(social);
  };

  const getImageForSocial = () => {
    switch (selectedSocial) {
      case "instagram":
        return "/images/IG.jpeg";
      case "github":
        return "/images/GitSS.jpeg";
      case "linkedin":
        return "/path-to-your-image/linkedin-image.png";
      case "twitter":
        return "/path-to-your-image/twitter-image.png";
      default:
        return "/path-to-your-image/default-image.png";
    }
  };

  const getUrlForSocial = () => {
    switch (selectedSocial) {
      case "instagram":
        return "https://www.instagram.com/isaeall/";
      case "github":
        return "https://github.com/saLMF";
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
      data-aos="fade-up"
    >
      <div
        className="container max-w-5xl p-8 mx-auto my-10 text-gray-300 bg-black rounded-lg shadow-lg"
        data-aos="fade-up"
      >
        <h1 className="mb-4 text-4xl font-bold text-gray-100">Contact</h1>

        {state.succeeded && (
          <div
            className="p-4 mb-4 text-green-600 bg-green-200 border border-green-600 rounded-lg"
            data-aos="fade-right"
          >
            Thanks for reaching out! I'll get back to you soon.
          </div>
        )}

        <hr className="my-6 border-gray-700" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div data-aos="fade-right">
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

          <div
            className="flex items-center justify-center"
            data-aos="zoom-in"
          >
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

          <div data-aos="fade-left">
            <h2 className="mb-4 text-2xl font-semibold text-gray-100">
              Or send me an email
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              data-aos="fade-up"
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
