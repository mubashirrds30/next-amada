/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import lozad from "lozad";
const { REACT_APP_BASE_URL } = process.env;

function Footer({ footer }) {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [subMenuName, setSubMenuName] = useState("");
  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);

  const footerNav = footer.footerMenu;
  const social = footer.socialMediaLinks;

  const handleSubMenus = (event) => {
    setSubMenuName(event);
    setOpenSubMenu(!openSubMenu);
    if (openSubMenu === true && event !== subMenuName) {
      setOpenSubMenu(true);
    }
  };

  return (
    <div>
      <div className="bs-footer">
        <div className="container">
          <ul className="quicklink-item-wrap top">
            <li className="quicklink-item">
              <div className="mod-quicklink">
                <ul className="wrap">
                  {footerNav?.slice(0, 1).map((ele, ind) => (
                    <div key={ind}>
                      {ele.footerSubmenu.map((el, i) => {
                        return (
                          <>
                            <li className="item" key={i}>
                              <Link
                                href={
                                  el.url === "#" || el.url === ""
                                    ? "javascript:void(0)"
                                    : el.url
                                }
                              >
                                <a
                                  target={`${
                                    el.url && el.url.includes("http")
                                      ? "_blank"
                                      : "_self"
                                  }`}
                                  key={i}
                                  className="title"
                                >
                                  {el.subMenu}
                                </a>
                              </Link>
                            </li>
                          </>
                        );
                      })}
                    </div>
                  ))}
                </ul>
              </div>
            </li>
            {footerNav?.slice(1, 6).map((ele, i) => (
              <li
                className="quicklink-item"
                key={i}
                onClick={() => handleSubMenus(ele.menuName)}
              >
                <div className="mod-quicklink">
                  <h2
                    className={`title mb-accord-title ${
                      subMenuName == ele.menuName && openSubMenu ? "open" : ""
                    }`}
                  >
                    <a
                      href={
                        ele.url === "#" || ele.url === ""
                          ? "javascript:void(0)"
                          : ele.url
                      }
                    >
                      {ele.menuName}
                    </a>
                  </h2>
                  <ul
                    className={`wrap mb-accord-body ${
                      subMenuName == ele.menuName && openSubMenu
                        ? "footer-sub-menu-open"
                        : ""
                    }`}
                  >
                    {ele?.footerSubmenu?.map((ele, inn) => (
                      <li className="item" key={inn}>
                        <a
                          href={
                            ele.url === "#" || ele.url === ""
                              ? "javascript:void(0)"
                              : ele.url
                          }
                          className="link"
                        >
                          {ele.subMenu}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
          <ul className="quicklink-item-wrap bottom">
            {footerNav?.slice(6).map((ele, i) => (
              <li
                className="quicklink-item"
                key={i}
                onClick={() => handleSubMenus(ele.menuName)}
              >
                <div className="mod-quicklink">
                  <h2
                    className={`title mb-accord-title ${
                      subMenuName == ele.menuName && openSubMenu ? "open" : ""
                    }`}
                  >
                    <a href={ele.url}>{ele.menuName}</a>
                  </h2>
                  <ul
                    className={`wrap mb-accord-body ${
                      subMenuName == ele.menuName && openSubMenu
                        ? "footer-sub-menu-open"
                        : ""
                    }`}
                  >
                    {ele.footerSubmenu.map((ele, i) => (
                      <li className="item" key={i}>
                        <a href={ele.url} className="link">
                          {ele.subMenu}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
          <div className="copy-wright">
            <div className="mod-social-links">
              {footer?.socialMediaLinks?.map((ele, i) => {
                return (
                  <>
                    <a
                      key={i}
                      target="_blank"
                      href={ele.link}
                      className="icon icon-youtube"
                      rel="noreferrer"
                    >
                      <img
                        src={`${REACT_APP_BASE_URL}${ele.socialMediaLogo.url}`}
                        alt={ele.link}
                      />
                    </a>
                  </>
                );
              })}
            </div>
            {/* <p>Amada (India) Pvt. Ltd CIN Number :- U74140KA2000PTC078927</p> */}
            <p>
              &copy; Copyright, Amada Middle East FZCO, All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      <div className="bs-news-fly">
        <div className="nf-head">
          <h3 className="nf-title">flash news</h3>
        </div>
        <div className="nf-body">
          <ul className="list">
            <li className="item">
              <div className="nf-item">
                <a href="#" className="nf-link"></a>
                <span className="nf-shape"></span>
                <div className="nf-bullet">
                  <time className="date">
                    <span className="text-lg">20</span>jul 2021
                  </time>
                </div>
                <p className="nf-text">
                  AMS Single Pallet Automation Webinar - LATC
                </p>
              </div>
            </li>
            <li className="item">
              <div className="nf-item">
                <a href="#" className="nf-link"></a>
                <span className="nf-shape"></span>
                <div className="nf-bullet">
                  {/* <time className="date" datetime="2021-07-20">
                    <span className="text-lg">21</span>jul 2021
                  </time> */}
                </div>
                <p className="nf-text">
                  AMS Single Pallet Automation Webinar - CTC
                </p>
              </div>
            </li>
            <li className="item">
              <div className="nf-item">
                <a href="#" className="nf-link"></a>
                <span className="nf-shape"></span>
                <div className="nf-bullet">
                  {/* <time className="date" datetime="2021-07-20">
                    <span className="text-lg">22</span>jul 2021
                  </time> */}
                </div>
                <p className="nf-text">
                  AMS Single Pallet Automation Webinar - SSC
                </p>
              </div>
            </li>
          </ul>
        </div>
        <button className="nf-trigger js-news-fly-trigger" type="button">
          <span className="icon icon-file"></span>
        </button>
      </div>
    </div>
  );
}

export default Footer;
