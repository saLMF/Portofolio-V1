import React, {useState} from "react";

const ContactForm: React.FC = () => {
  const [selectedSocial, setSelectedSocial] = useState("instagram");

  const handleSocialClick = (social: string) => {
    setSelectedSocial(social);
  };

  // Fungsi untuk menentukan gambar yang akan ditampilkan berdasarkan sosial media yang dipilih
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

  // Fungsi untuk menentukan URL sosial media yang akan dibuka saat gambar diklik
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
        {/* <p className="mb-8 text-gray-400">Reach me out.</p> */}

        <hr className="my-6 border-gray-700" />

        {/* Layout Grid untuk Sosial Media dan Tampilan Handphone */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Bagian Sosial Media */}
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
              {/* <button
            onClick={() => handleSocialClick("linkedin")}
            className="flex items-center px-4 py-2 text-white bg-blue-700 border border-gray-600 rounded-lg hover:bg-blue-800"
          >
            <i className="mr-2 fab fa-linkedin"></i> LinkedIn
          </button> */}
              {/* <button
            onClick={() => handleSocialClick("twitter")}
            className="flex items-center px-4 py-2 text-white bg-black border border-gray-600 rounded-lg hover:bg-gray-800"
          >
            <i className="mr-2 fab fa-twitter"></i> Twitter
          </button> */}
            </div>
          </div>

          {/* Bagian Tampilan Handphone */}
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

          {/* Bagian Formulir Email */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-100">
              Or send me an email
            </h2>
            <form
              action="https://formsubmit.co/faisalmauludfajri1264@gmail.com"
              method="POST"
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
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 text-gray-200 bg-black border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 font-semibold text-gray-400"
                >
                  Subject
                </label>
                <input
                  required
                  type="text"
                  name="subject"
                  id="subject"
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
                  required
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  className="w-full h-40 px-4 py-3 text-gray-200 bg-black border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                ></textarea>
              </div>
              <button
                type="submit"
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
