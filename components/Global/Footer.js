/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import lozad from "lozad";
const { REACT_APP_BASE_URL } = process.env;
import { SocialProfileJsonLd } from 'next-seo';


function Footer({ footer }) {
  // console.log(footer)
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

  /////////////////////////////////////////////////
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
  // Split in group of 5 items
  let result = chunkArray(footer && footer.footerMenu, 6)

  return (
    <div>
      <div className="bs-footer">
        <div className="container">
        { result.slice(0,1).map((items, index) => {
            // console.log(result, items, 'newitem')
            return  (
              <>
              <ul className="quicklink-item-wrap">
              {items.slice(0,1).map((item, index)=>{
                  
                  return(
                  
                      <li key={index} className="quicklink-item">
                        <div className="mod-quicklink" onClick={() => handleSubMenus(item.menuName)}>
                          
                          <ul
                            className={`wrap ${subMenuName == item.footerSubmenu[0].subMenu && open ? "footer-sub-menu-open" : ""}`}
                          >
                            {item.footerSubmenu && item.footerSubmenu.map((ele, index) => {
                                return (
                                  <>                                
                                      <li key={index} className="item">
                                        <a className="title" href= {ele.url === "#" || ele.url === "" || ele.url === "/" ? "javascript:void(0)" : ele.url} target={`${ele.url && ele.url.includes("http") ? '_blank' : '_self'}`}> {ele.subMenu}</a>
                                      </li>
                                  </>
                                );
                              })}
                          </ul>
                        </div>
                      </li>
                  )
                })}
                {items.slice(1).map((item, index)=>{
                  // console.log("item snehal==================", item)
                  return(
                      <li key={index} className="quicklink-item">
                        <div className="mod-quicklink" onClick={() => handleSubMenus(item.menuName)}>
                          <h2 className={`title mb-accord-title ${subMenuName === item.menuName && open ? "open" : ""}`}>
                            <a href= {item.url === "#" || item.url === "" ? "javascript:void(0)" : item.url} target={`${item.url && item.url.includes("http") ? '_blank' : '_self'}`}> {item.menuName}</a>
                          </h2>
                          <ul
                            className={`wrap mb-accord-body ${subMenuName == item.menuName && openSubMenu
                              ? "footer-sub-menu-open"
                              : ""}`}
                          >
                            {item.footerSubmenu && item.footerSubmenu.map((ele, index) => {
                                return (
                                  <>
                                      <li key={index} className="item">
                                          <a href={ele.url === "#" || ele.url === "" ? "javascript:void(0)" : ele.url}  target={`${ele.url && ele.url.includes("http") ? '_blank' : '_self'}`} className="link">{ele.subMenu}
                                          </a>
                                      </li>
                                  </>
                                );
                              })}
                          </ul>
                        </div>
                      </li>
                  )
                })}
              </ul>

              </>
            )
          })
        }
          { result.slice(1).map((items, index) => {
            // console.log(result, items, 'newitem')
            return  (
              <>
           
              <ul className="quicklink-item-wrap">
                {items.map((item, index)=>{
                  // console.log("item snehal==================", item)
                  return(
                      <li key={index} className="quicklink-item">
                        <div className="mod-quicklink" onClick={() => handleSubMenus(item.menuName)}>
                          <h2 className={`title mb-accord-title ${subMenuName === item.menuName && open ? "open" : ""}`}>
                            <a href= {item.url === "#" || item.url === "" ? "javascript:void(0)" : item.url} target={`${item.url && item.url.includes("http") ? '_blank' : '_self'}`}> {item.menuName}</a>
                          </h2>
                          <ul
                            className={`wrap mb-accord-body ${subMenuName == item.menuName && open ? "footer-sub-menu-open" : ""}`}
                          >
                            {item.footerSubmenu && item.footerSubmenu.map((ele, index) => {
                                return (
                                  <>
                                   
                                      <li key={index} className="item">
                                          <a href={ele.url === "#" || ele.url === "" ? "javascript:void(0)" : ele.url}  target={`${ele.url && ele.url.includes("http") ? '_blank' : '_self'}`} className="link">{ele.subMenu}</a>
                                      </li>
                                  </>
                                );
                              })}
                          </ul>
                        </div>
                      </li>
                  )
                })}
              </ul>

              </>
            )
          })
        }
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
      <SocialProfileJsonLd
      type="Organization"
      name="AMADA MIDDLE EAST FZCO"
      url="https://www.amada.ae/"
      sameAs={[
        `${footer.socialMediaLinks && footer.socialMediaLinks[0]?.url}`,
        `${footer.socialMediaLinks && footer.socialMediaLinks[1]?.url}`,
      ]}
      />
    </div>
  );
}

export default Footer;
