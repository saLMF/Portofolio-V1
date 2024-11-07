import React, {useState, useEffect, useRef} from "react";
import {useForm, ValidationError} from "@formspree/react";
import AOS from "aos";
import "aos/dist/aos.css";
import {Star} from "lucide-react";

const ContactForm: React.FC = () => {
  const [selectedSocial, setSelectedSocial] = useState<string>("instagram");
  const [state, handleSubmit] = useForm("mrbzwqno");

  // Ref untuk input fields
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    AOS.init({duration: 1000});
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
      default:
        return "#";
    }
  };

  const generateStars = (count: number) => {
    return Array.from({length: count}, (_, i) => (
      <div
        key={i}
        className={`absolute rounded-full bg-white 
          ${Math.random() > 0.5 ? "animate-twinkle-1" : "animate-twinkle-2"}
          ${Math.random() > 0.5 ? "w-1 h-1" : "w-0.5 h-0.5"}`}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
        }}
      />
    ));
  };

  const generateFallingStars = (count: number) => {
    return Array.from({length: count}, (_, i) => (
      <div
        key={`falling-star-${i}`}
        className="absolute rounded-full bg-white opacity-80 w-0.5 h-2 animate-fall"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${-10 - Math.random() * 20}%`,
          transform: `rotate(${Math.random() * 45 - 22.5}deg)`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${2 + Math.random() * 3}s`,
        }}
      />
    ));
  };

  const handleFormReset = () => {
    if (emailRef.current) emailRef.current.value = "";
    if (subjectRef.current) subjectRef.current.value = "";
    if (messageRef.current) messageRef.current.value = "";
  };

  useEffect(() => {
    if (state.succeeded) {
      handleFormReset();
    }
  }, [state.succeeded]);

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0">
        {generateStars(100)}
        {generateFallingStars(10)}
        <div className="absolute inset-0 bg-black animate-pulse" />
      </div>

      <div className="container relative z-10 max-w-5xl p-8 mx-auto my-10">
        <div
          className="p-8 bg-black border border-black rounded-lg shadow-2xl backdrop-blur-sm"
          data-aos="fade-up"
        >
          <h1 className="mb-4 text-4xl font-bold text-purple-100">Contact</h1>

          {state.succeeded && (
            <div className="p-4 mb-4 text-green-400 border border-green-400 rounded-lg bg-green-900/50">
              Thanks for reaching out! I'll get back to you soon.
            </div>
          )}

          <hr className="my-6 border-purple-500/30" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-purple-100">
                Find me on
              </h2>
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => handleSocialClick("instagram")}
                  className="flex items-center px-4 py-2 text-white transition-all duration-300 border-2 border-indigo-400 rounded-lg bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-700 hover:via-pink-700 hover:to-purple-700"
                >
                  <Star className="w-5 h-5 mr-2" /> Instagram
                </button>
                <button
                  onClick={() => handleSocialClick("github")}
                  className="flex items-center px-4 py-2 text-white transition-all duration-300 bg-indigo-800 border-2 border-purple-500 rounded-lg hover:bg-indigo-700"
                >
                  <Star className="w-5 h-5 mr-2" /> GitHub
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <a
                href={getUrlForSocial()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={getImageForSocial()}
                  alt="Social Media Preview"
                  className="w-64 rounded-lg shadow-lg ring-2 ring-purple-500/50"
                />
              </a>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold text-purple-100">
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
                      className="block mb-2 font-semibold text-white"
                    >
                      Email
                    </label>
                    <input
                      ref={emailRef}
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 text-white transition-all duration-300 border-2 rounded-lg bg-gray-800/50 border-purple-500/50 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/50 placeholder-gray-300/50"
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
                      className="block mb-2 font-semibold text-white"
                    >
                      Subject
                    </label>
                    <input
                      ref={subjectRef}
                      id="subject"
                      type="text"
                      name="subject"
                      required
                      placeholder="Enter your subject"
                      className="w-full px-4 py-3 text-white transition-all duration-300 border-2 rounded-lg bg-gray-800/50 border-purple-500/50 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/50 placeholder-gray-300/50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 font-semibold text-white"
                    >
                      Message
                    </label>
                    <textarea
                      ref={messageRef}
                      id="message"
                      name="message"
                      required
                      placeholder="Enter your message"
                      className="w-full h-40 px-4 py-3 text-white transition-all duration-300 border-2 rounded-lg bg-gray-800/50 border-purple-500/50 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/50 placeholder-gray-300/50"
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
                  className="w-full py-3 text-white transition-all duration-300 bg-black rounded-lg hover:bg-gray-300 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
