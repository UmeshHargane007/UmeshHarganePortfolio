import React from "react";

function NavLink({ href, title }) {
  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-slate-200 hover:text-white"
    >
      {title}
    </a>
  );
}

export default NavLink;
