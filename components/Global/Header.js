/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import lozad from "lozad";
import { SocialProfileJsonLd } from 'next-seo';
import { LogoJsonLd } from 'next-seo';
const { REACT_APP_BASE_URL } = process.env;

function Header({ header, activeLink }) {
  
  const [openMenus, setOpenMenus] = useState(false);
  const [menuName, setMenuName] = useState("");
  const [openNavbarMenus, setOpenNavbarMenus] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [subMenuName, setSubMenuName] = useState("");

  useEffect(() => {
    const { observe } = lozad();
    observe();
  }, []);

  const handleMenus = (value) => {
    if (window.innerWidth < 768) {
      setMenuName(value);
      setOpenMenus(!openMenus);
      if (openMenus === true && value !== menuName) {
        setOpenMenus(true);
      }
    }
  };

  const handleSubMenus = (event) => {
    if (window.innerWidth < 768) {
      setSubMenuName(event);
      setOpenSubMenu(!openSubMenu);
      if (openSubMenu === true && event !== subMenuName) {
        setOpenSubMenu(true);
      }
    }
  };

  const { logo, menu, socialMediaLinks } = header && header;


  
  function chunkArray(myArray, chunk_size) {
    // console.log(myArray, 'myarray')
    let index = 0
    let arrayLength = myArray !== undefined ? myArray.length : null;
    let tempArray = []
    // console.log(arrayLength, 'array length')
    
    for (index = 0; index < arrayLength; index += chunk_size) {
      let myChunk = myArray.slice(index, index + chunk_size)
      // Do something if you want with the group
      tempArray.push(myChunk)
    }

    return tempArray
    
  }
  // let result = chunkArray(header && header.menu, 4)
  


  return (
    <div className="bs-header typ-solid">
      {logo ? (
        <Link href="/">
          <a className="logo-wrap">
            <img
              src={`${REACT_APP_BASE_URL}${logo.url}`}
              alt="Company Logo"
              title="Amada Company Logo"
            />
          </a>
        </Link>
      ) : (
        <Link href="/">
          <a className="logo-wrap">
            <img
              src="/assets/images/logo.png"
              alt="Company Logo"
              title="Amada Company Logo"
            />
          </a>
        </Link>
      )}
      <div className={`bs-nav ${openNavbarMenus ? "active" : ""}`}>
        <button className="nav-btn btn-close js-nav-close">
          <span
            className="icon icon-close"
            onClick={() => setOpenNavbarMenus(false)}
          ></span>
        </button>

        <ul className="nav-list">
          {menu?.map((ele, index) => (
            <li
              className={`nav-item ${
                ele.subMenu.length > 0 ? "bs-sub-menu " : ""
              } 
              ${ele.subMenu[0]?.subMenuLink?.length > 0 ? "typ-mega-menu" : ""}
              ${activeLink === ele.menuName ? "active" : ""}`}
              key={index}
            >
              {ele.subMenu.length > 0 ? (
                <a
                  href={"javascript:void(0)"}
                  className={`nav-link mb-sub-menu-title ${
                    openMenus && menuName === ele.menuName ? "open" : ""
                  }`}
                  onClick={() => handleMenus(ele.menuName)}
                >
                  {ele.menuName}
                </a>
              ) : (
                <Link href={ele.URL}>
                  <a className={`nav-link`}>{ele.menuName}</a>
                </Link>
              )}

              
                {ele.subMenu && ele.subMenu[0]?.subMenuLink?.length === 0 && (
                  <div
                  className={`menu-wrap mb-sub-menu-body ${
                    openMenus && menuName === ele.menuName ? "sub-menu-open" : ""
                  }
                  `}
                >
                  <ul className="quicklink-item-wrap top">
                    <li className="quicklink-item">
                      <div className="mod-quicklink mb-accord-body">
                        <ul className="wrap">
                          {ele.subMenu.map((elm, ind) => (
                            <li className="item" key={ind}>
                              <a
                                href={elm.URL}
                                className={`title`}
                                target={`${
                                  elm.URL && elm.URL.includes("http")
                                    ? "_blank"
                                    : "_self"
                                }`}
                              >
                                {elm.subMenu}
                              </a>

                              {elm.subMenuLink && (
                                <ul className="wrap mb-accord-body">
                                  {elm.subMenuLink.map((el, i) => (
                                    <li className="item" key={i}>
                                      <a href={el.URL} className="link">
                                        {el.subMenuLink}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  </ul>
                  </div>
                )}
                {ele.subMenu && ele.subMenu[0]?.subMenuLink?.length > 0 && (
                 <div className={`menu-wrap mb-sub-menu-body ${openMenus && menuName === ele.menuName ? "sub-menu-open" : ""}`}>
                 {chunkArray(ele && ele.subMenu, 4).map((ql, i) => {
                   // console.log("ql",  ql)
                   return(
                     <ul className="quicklink-item-wrap top">
                       {ql.map((ell, inn)=>{
                         return(
                           <>
                           <li className="quicklink-item" key={inn}>
                           <div className="mod-quicklink" onClick={() => handleSubMenus(ell.subMenu)}>
                               <h2 className={`title mb-accord-title ${subMenuName == ell.subMenu && openSubMenu ? "open" : ""}`}>
                                   <a href={ell.URL}>{ell.subMenu}</a>
                               </h2>
                               <ul className="wrap mb-accord-body"
                               style={
                                 window.innerWidth < 768 ? (
                                   {
                                     display: subMenuName == ell.subMenu && openSubMenu ? "block" : "none",
                                   }
                                 ) : null
                               }>
                               {ell.subMenuLink.map((sub, i) => (
                                 <li className="item" key={i}>
                                     <a href={sub.URL} target={`${sub.URL && sub.URL.includes("http") ? '_blank' : '_self'}`} className="link">{sub.subMenuLink}</a>
                                 </li>
                               ))}
                               </ul>
                           </div>
                           </li>
                           </>
                         )
                       })}
                     </ul>
                 )}
                 )}
                 </div>
                )}
            </li>
          ))}
        </ul>
      </div>
      <div className="bs-side-nav">
        <ul className="nav-list">
          <li className="nav-item hidden-xs">
            <div className="mod-social-links">
              {socialMediaLinks?.map((ele, index) => (
                <a
                  key={index}
                  href={ele.link}
                  target={`${
                    ele.link && ele.link.includes("http") ? "_blank" : "_self"
                  }`}
                  className="icon icon-youtube"
                >
                  <img
                    src={`${process.env.REACT_APP_BASE_URL}${ele.socialMediaLogo.url}`}
                  />
                </a>
              ))}
            </div>
          </li>
          <li className="nav-item">
            <a
              href="https://www.amada.com/"
              target="_blank"
              className="nav-link"
              rel="noreferrer"
            >
              <span className="text">ae</span>
              <span className="icon icon-globe"></span>
            </a>
          </li>

          <li className="nav-item">
            <div
              className="menu-btn js-menu-open"
              onClick={() => setOpenNavbarMenus(true)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </li>
        </ul>
      </div>
      <SocialProfileJsonLd
        type="Organization"
        name="AMADA MIDDLE EAST FZCO"
        url="https://www.amada.ae/"
        sameAs={[
          `${header.socialMediaLinks && header.socialMediaLinks[0]?.link}`,
          `${header.socialMediaLinks && header.socialMediaLinks[1]?.link}`,
        ]}
        />
        <LogoJsonLd
        logo="https://www.amada.ae/assets/images/logo.png"
        url="https://www.amada.ae/"
      />
    </div>
  );
}

export default Header;
