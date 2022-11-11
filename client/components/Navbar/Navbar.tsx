import { useState } from "react";
import classes from "./NavBar.module.scss";
import Link from "next/link";
import { BsInstagram, BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar_menu}>
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <section className={classes.phone_menu}>
              <BsFillTelephoneInboundFill />
              <a href="tel:+972 (050) 293-3304">חייגו עכשיו: 050-2933304</a>
            </section>
            <section className={classes.social_menu}>
              <BsInstagram
                onClick={() => window.open("https://github.com/ElronKarni")}
              />
              <FaFacebookF
                onClick={() => window.open("https://github.com/ElronKarni")}
              />
            </section>
          </motion.div>
        )}
      </div>

      <a href="tel:+972 (050) 293-3304" className={classes.phone}>
        <div>
          <BsFillTelephoneInboundFill />
        </div>
        חייגו עכשיו: 050-2933304
      </a>

      <Link href="/" className={classes.site_title}>
        Lior Malul
      </Link>
      <div className={classes.social}>
        <p>אפשר למצוא אותי גם-</p>
        <div>
          <BsInstagram
            onClick={() => window.open("https://github.com/ElronKarni")}
          />
        </div>
        <div>
          <FaFacebookF
            onClick={() => window.open("https://github.com/ElronKarni")}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
