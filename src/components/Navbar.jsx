import logo from "../assets/Images/logo.png";
import face from "../assets/Images/face.png";
import insta from "../assets/Images/insta.png";
import ButtonComp from "./global/ButtonComp";

const Navbar = () => {
  const navitem = [
    { link: "Home", path: "Home" },
    { link: "Products", path: "Products" },
    { link: "Our Company", path: "Our Company" },
    { link: "Blog", path: "Blog" },
    { link: "Contact Us", path: "Contact Us" },
    { link: "FAQ", path: "FAQ" },
  ];

  return (
    <nav className="bg-slate-50">
      <div className="text-xl flex space-x-12 items-center px-6 py-6">
        <div className="flex space-x-12">
          <a href="/">
            <img src={logo} className="w-40" />
          </a>
          <ul className="flex space-x-12">
            {navitem.map(({ link, path }) => (
              <a key={link} href={path} className="block"> {link}</a>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-end space-x-4">
            <a href="/" className="flex space-x-4">
                <img src={face} className="w-6" />
                <img src={insta} className="w-6" />
            </a>
            <ButtonComp label="Get Quote" style="/" />
            <ButtonComp label="Login" style="button-primary"/>
            </div>
      </div>
    </nav>
  );
};
export default Navbar;
