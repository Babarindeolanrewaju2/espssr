import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BackToTop = styled.div`
  position: fixed;
  cursor: pointer;
  bottom: 20px;
  right: 20px;
  font-size: 20px;
  width: 40px;
  height: 40px;
  line-height: 36px;
  border-radius: 50%;
  z-index: 99;
  text-align: center;
  display: none;
  -webkit-box-shadow: 2px 4px 8px rgb(33 40 50 / 15%);
  box-shadow: 2px 4px 8px rgb(33 40 50 / 15%);
  -webkit-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
  color: #fff;
  background-color: #309255;
`;

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const ScrollTop = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", ScrollTop);

    // remove when component is unmounted
    return () => {
      window.removeEventListener("scroll", ScrollTop);
    };
  }, []);

  return (
    <>
      {showButton && (
        <BackToTop style={{ display: "inline" }} onClick={scrollToTop}>
          <i className="fas fa-chevron-up"></i>
        </BackToTop>
      )}
    </>
  );
};

export default ScrollToTop;
