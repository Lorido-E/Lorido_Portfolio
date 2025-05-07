import { useState, useEffect } from "react";

const TypewriterEffect = () => {
  const texts = ["Web Developer", "Student", "Front-end Developer"];
  const [textsIndex, setTextIndex] = useState(0);
  const [subText, setSubText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textsIndex];
    let speed = isDeleting ? 50 : 100;

    const handleTyping = () => {
      if (isDeleting) {
        setSubText((prev) => prev.slice(0, -1));
      } else {
        setSubText((prev) => current.slice(0, prev.length + 1));
      }

      if (!isDeleting && subText === current) {
        setTimeout(() => setIsDeleting(true), 2000); // pause before deleting
      } else if (isDeleting && subText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timeout = setTimeout(handleTyping, speed);
    return () => clearTimeout(timeout);
  }, [subText, isDeleting, textsIndex]);

  return (
    <span className="typewriter">
      {subText}
      <span className="cursor">|</span>
    </span>
  );
};

export default TypewriterEffect;
