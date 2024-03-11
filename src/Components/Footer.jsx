import { CiFacebook } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";

import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary pt-12 pb-8 text-white">
      <div data-aos="fade-up" data-aos-delay="300" className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company */}
          <div data-aos="fade-up" data-aos-delay="300" className="space-y-6">
            <h1 className="text-3xl font-bold">Orange Mint</h1>
            <p className="text-dark text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              molestias labore accusantium aliquam eligendi ut harum rerum natus
              inventore vitae?
            </p>
          </div>
          {/* navlink */}
          <div>
            <h1 className="text-3xl font-bold">Quick Links</h1>
            <div
              data-aos="fade-up"
              data-aos-delay="700"
              className="grid grid-cols-2 gap-3"
            >
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                  <li>
                    <a href="">Search Fruits</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                  <li>
                    <a href="">Search Fruits</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* social */}
          <div data-aos="fade-up" data-aos-delay="700" className="space-y-6">
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div>
              <p>0156885065</p>
              <p>Bogura,Bangladesh</p>
            </div>
            <div className="flex item-center gap-3  hover:scale-110 duration-300">
              <CiFacebook className="text-3xl hover:scale-110 duration-300 " />
              <RiTwitterXFill className="text-3xl  hover:scale-110 duration-300 " />
              <FaInstagram className="text-3xl  hover:scale-110 duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
