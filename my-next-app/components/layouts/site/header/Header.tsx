"use client";
import React, { useState } from "react";
import styles from "./Header.module.scss";
import NavLink from "@/components/shared/navlink/Navlink";
import Image from "next/image";
import logo from "../../../../assets/images/logo/gilas_logo.png";
import arrow from "../../../../assets/images/site/navigate.png";
import Button from "@/components/shared/btn/PrimaryButton";
import Link from "next/link";
const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <header id={styles.header}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.logo}>
            <Link href={"/"}>
              <Image src={logo} alt="gilas" priority />
            </Link>
          </div>
          <nav className={styles.navlinks}>
            <ul className={styles.lists}>
              <li>
                <NavLink
                  href="/about"
                  activeClassName={styles.active}
                  className={styles.navlink}
                >
                  Haqqımızda
                </NavLink>
              </li>
              <li>
                <div className={styles.navlink}>
                  <span
                    onMouseEnter={() => setDropdown(true)}
                    onClick={() => setDropdown(true)}
                    onMouseDown={() => setDropdown(false)}
                  >
                    Xidmətlərimiz <Image src={arrow} alt="navigate" />
                  </span>
                </div>
                {dropdown && (
                  <ul
                    className={styles.services_links}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    <li>
                      <Link href={"/services"}>
                        İdarəetmə sistemlərinin sertifikatlaşdırılması
                      </Link>
                    </li>
                    <li>
                      <Link href={"/apply"}>
                        Məhsulların sertifikatlaşdırılması
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <NavLink
                  href="/apply"
                  activeClassName={styles.active}
                  className={styles.navlink}
                >
                  Onlayn müraciət
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/legislation"
                  activeClassName={styles.active}
                  className={styles.navlink}
                >
                  Qanunvericilik
                </NavLink>
              </li>
              <li>
                <Link href={"/contact"}>
                  <Button className="contact_btn">
                    <span>Bizimlə əlaqə</span>
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
