// components/CookieConsentBanner.js
import React from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";

const CookieConsentBanner = () => {
  const handleDeclineClick = () => {
    // Remove the consent cookie if it has been set
    Cookies.remove("myWebClassOrgGdprCookieConsent");
    console.log("User declined cookies");
  };

  return (
    <CookieConsent
      location="bottom"
      buttonText="I accept"
      cookieName="myWebClassOrgGdprCookieConsent"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "16px" }}
      expires={150}
      onAccept={() => {
        console.log("User accepted cookies");
      }}
    >
      This website uses cookies to enhance the user experience and analyze
      performance and traffic on our website. We also share information about
      your use of our site with our analytics partners.
      <button
        style={{
          marginLeft: "1rem",
          background: "transparent",
          border: "none",
          color: "#fff",
          textDecoration: "underline",
          cursor: "pointer",
        }}
        onClick={handleDeclineClick}
      >
        I decline
      </button>
    </CookieConsent>
  );
};

export default CookieConsentBanner;
