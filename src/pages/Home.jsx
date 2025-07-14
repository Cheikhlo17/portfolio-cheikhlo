import React, { useEffect, useState } from "react";
import "./Home.css";

const typingText = "Je développe des interfaces modernes, performantes et centrées utilisateur.";

const Home = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < typingText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + typingText[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
      <section className="home" id="home">
        <h1 className="home-title">Cheikh Lo</h1>
        <h3 className="home-subtitle">Front-End Developer</h3>
        <p className="home-typing">{displayedText}<span className="cursor">|</span></p>
      </section>
  );
};

export default Home;
