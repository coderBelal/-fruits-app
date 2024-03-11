import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = ({ slideBar, setSlideBar }) => {
  return (
    <div
      className="absolute top-0 left-0 w-full 
   text-white z-20"
    >
      <div data-aos="fade-up" className="container">
        <div className="flex justify-between items-center">
          {/* logo section */}
          <h1 className="text-4xl font-bold uppercase">
            Orange <span className="font-normal text-2xl">Mint</span>
          </h1>
          {/* navlinks section */}
          <ul className="lg:flex hidden space-x-4 text-xl">
            <li>
              <a href="" className="lg:flex hidden space-x-4 text-xl">
                Home
              </a>
            </li>
            <li>
              <a href="">Where to fine</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
          {/* hamburger Menu */}
          <div onClick={() => setSlideBar(!slideBar)}>
            <RxHamburgerMenu className="text-3xl cursor-pointer" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
