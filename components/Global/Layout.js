import React, { useEffect, useState } from "react";
import FlashNewsPopup from "./FlashNewsPopup";
import Footer from "./Footer";
import Header from "./Header";
const { REACT_APP_BASE_URL } = process.env;

function Layout({ children, activeLink }) {
  const [header, setHeader] = useState([]);
  const [footer, setFooter] = useState([]);
  const [flashNews, setFlashNews] = useState([]);

  useEffect(() => {
    const global = `${REACT_APP_BASE_URL}/global`;

    const fetchData = async () => {
      try {
        const res = await fetch(global);
        const json = await res.json();
        // console.log(json, "full header");

        setHeader(json?.header);
        setFooter(json?.footer);
        // console.log(json.flashNewsSection.flashNewsList.length)
        setFlashNews(json?.flashNewsSection);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header header={header} activeLink={activeLink} />
      {children}
      <Footer footer={footer} headerMenu={header} activeLink={activeLink} flashNews={flashNews} />
      {flashNews?.flashNewsList?.length > 0 && <FlashNewsPopup flashNewsList={flashNews} />}
    </div>
  );
}

export default Layout;
