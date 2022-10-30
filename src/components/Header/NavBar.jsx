import { useState } from "react";
import { Link } from "react-router-dom";
import { hamburgerMenu } from "../../img";
import CartWidget from "./CartWidget";
import {
  Header,
  Logo,
  Span,
  HamburgerMenu,
  ShowHamburgerMenu,
} from "./stylesNav";

const NavBar = () => {
  const [menuHide, setMenuHide] = useState(false); 

  const handleClickMenu = () => {
    setMenuHide(!menuHide);
  };

  return (
    <Header>
      <Logo>
        <Link to="/"><img            
              src="https://i.postimg.cc/MTWYqDBP/nav.png"         
            /></Link>
        
        
      </Logo>

      <HamburgerMenu onClick={handleClickMenu}>
        <img src={hamburgerMenu} alt="menu" />
      </HamburgerMenu>

      <ShowHamburgerMenu menuHide={menuHide}>
        <Link to="/cart">
          <CartWidget />
        </Link>

        <ul className="flex justify-center items-center h-full md:h-16 md:w-100">
          <li className="flex flex-col gap-10 text-center w-full md:flex-row md:gap-3 md:relative md:right-14 font-bold text-my-rose font-Fredoka One text-xl">

          <Link
              to="/category/miniH"
              className="hover:bg-my-warning  hover:shadow-red-50	  hover:shadow-md md:rounded md:px-3 md:py-1"
              id="3"
              onClick={handleClickMenu}
            >
              Mini Perfumes Hombre
            </Link>
            <Link
              to="/category/miniM"
              className="hover:bg-my-warning  hover:shadow-red-50	  hover:shadow-md md:rounded md:px-3 md:py-1"
              id="4"
              onClick={handleClickMenu}
            >
              Mini Perfumes Mujer
            </Link>
            <Link
              to="/category/perfumes-hombres"
              className="hover:bg-my-warning  hover:shadow-red-50	  hover:shadow-md md:rounded md:px-3 md:py-1"
              id="1"
              onClick={handleClickMenu}
            >
              Perfumes de Hombres
            </Link>
            <Link
              to="/category/perfumes-mujer"
              className="hover:bg-my-warning  hover:shadow-cyan-50	  hover:shadow-md md:rounded md:px-3 md:py-1"
              id="2"
              onClick={handleClickMenu}
            >
              Perfumes de Mujer
            </Link>
            
          </li>
        </ul>
      </ShowHamburgerMenu>
    </Header>
  );
};

export default NavBar;
