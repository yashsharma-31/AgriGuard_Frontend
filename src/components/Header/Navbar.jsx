import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import NavbarFixed from "./NavbarFixed";

function Navbar() {
  const [isScrollPast, setIsScrollPast] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 300) {
      setIsScrollPast(true);
      // console.log("Scrolled Past");
    } else {
      setIsScrollPast(false);
      // console.log("Not Past");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isScrollPast ? <NavbarFixed key="navbar-fixed" /> : <></>}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
