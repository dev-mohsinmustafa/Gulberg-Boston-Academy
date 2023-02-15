import React from "react";
import { HashLink } from "react-router-hash-link";

const NavLinks = (props) => {
  return (
    <div>
      <li className="text-white list-none hover:text-[#F9995D] active:text-[#F9995D]  cursor-pointer xl:text-xl 2xl:text-2xl border-t-2 border-[#457B9D] py-2.5 text-center lg:text-left lg:border-none lg:py-0">
        <HashLink smooth to={props.data.hashLink}>
          {props.data.label}
        </HashLink>
      </li>
    </div>
  );
};

export default NavLinks;
