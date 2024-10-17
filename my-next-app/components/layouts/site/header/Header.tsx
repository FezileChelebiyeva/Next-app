"use client";
import React, { useState } from "react";
import styles from "./Header.module.scss";
import NavLink from "@/components/shared/navlink/Navlink";
import Image from "next/image";
import logo from "../../../../assets/images/logo/gilas_logo.png";
import arrow from "../../../../assets/images/site/navigate.png";
import menu from "../../../../assets/images/site/menu.svg";
import close from "../../../../assets/images/site/close.svg";
import Button from "@/components/shared/btn/PrimaryButton";
import Link from "next/link";
const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [menuBar, setMenuBar] = useState(false);

  return (
    <header id={styles.header} onMouseLeave={() => setDropdown(false)}>
      <div className={styles.header_}>
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
      </div>

      <div className={styles.mobile_header}>
          {menuBar ? (
            <div className={styles.header_content}>
              <div className={styles.contents}>
                <div className={styles.logo_icons}>
                  <Link href={"/"}>
                    <Image src={logo} alt="gilas" priority />
                  </Link>
                  <div
                    className={styles.menubar}
                    onClick={() => {
                      setMenuBar(!menuBar),
                      setDropdown(false)
                    }}
                  >
                    <Image src={close} alt="menu" />
                  </div>
                </div>

                <nav className={styles.mobile_navlinks}>
                  <ul className={styles.navlists}>
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
                          onClick={() => setDropdown(!dropdown)}
                        >
                          Xidmətlərimiz <Image src={arrow} alt="navigate" />
                        </span>
                      </div>
                      {dropdown && (
                        <ul
                          className={styles.services_links}
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
                  </ul>
                </nav>
              </div>
              <div className={styles.contact_btn}>
                <Link href={"/contact"}>
                  <Button>
                    <span>Bizimlə əlaqə</span>
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className={styles.logo_icons}>
              <Link href={"/"}>
                <Image src={logo} alt="gilas" priority />
              </Link>
              <div
                className={styles.menubar}
                onClick={() => setMenuBar(!menuBar)}
              >
                <Image src={menu} alt="menu" />
              </div>
            </div>
          )}
      </div>
    </header>
  );
};

export default Header;
