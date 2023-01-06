import { React, useEffect } from "react";

function Footer() {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
      },
      "google_translate_element"
    );
  };
  const translation = () => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  };

  return (
    <div name="footer" className="footer" onLoad={translation}>
      <div className="bottom down">
        <h3>aGROW copyrights</h3>
        <div id="google_translate_element" className="translate"></div>
      </div>
    </div>
  );
}

export default Footer;
