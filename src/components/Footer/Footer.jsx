import Logo from "../../assets/trustique.jpg";
import Banner from "../../assets/website/footer-pattern.jpg";
import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
  backgroundColor: "#001f3f", // Deep navy blue
  backgroundBlendMode: "overlay",
};

const FooterLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-gray-200">
      <div className="container mx-auto px-4">
        <div
          data-aos="zoom-in"
          className="grid md:grid-cols-3 pb-44 pt-5 gap-10"
        >
          {/* company details */}
          <div className="py-8 px-4 bg-[#012950]/50 rounded-xl backdrop-blur-sm">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-4 flex items-center gap-3 text-cyan-300">
              <img
                src={Logo}
                alt=""
                className="max-w-[50px] rounded-full border-2 border-cyan-400"
              />
              <span>Trustique Assist</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              AI-driven systems for institutions and enterprises, ensuring
              smarter operations and greater peace of mind.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 col-span-2 md:pl-8">
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold mb-4 text-cyan-200">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3 text-gray-300">
                {FooterLinks.map((item) => (
                  <li className="cursor-pointer hover:text-cyan-400 hover:translate-x-2 transition-all duration-300">
                    <NavLink
                      to={item.link}
                      className="hover:text-cyan-400 text-xl hover:translate-x-2 transition-all duration-300"
                      key={item.title}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* social links */}
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold mb-4 text-cyan-200">
                Contact Us
              </h1>
              <div className="mt-6 space-y-4 text-sm text-gray-300">
                <div className="flex items-center gap-3 text-xl">
                  <FaLocationArrow className="text-cyan-400" />
                  <p>Noida, Uttar Pradesh</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt className="text-cyan-400" />
                  <p className="text-xl">+91 8112403000</p>
                </div>
                <div className="mt-6 flex gap-4">
                  <a
                    href="https://www.instagram.com/trustique_assist?igsh=MW53bGx1N2JjOG5uZA=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-3xl text-pink-400 hover:text-pink-500 transition-transform hover:scale-110" />
                  </a>
                  <a
                    href="https://www.instagram.com/trustique_assist?igsh=MW53bGx1N2JjOG5uZA=="
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                  <a
                    href="https://www.linkedin.com/company/trustique-assist-private-limited/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-3xl text-sky-400 hover:text-sky-500 transition-transform hover:scale-110" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
