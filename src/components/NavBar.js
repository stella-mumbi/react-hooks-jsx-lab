import React from "react";

function NavBar() {
  // update the JSX being returned!
  const links = ["home", "about", ];

  // Mapping the links to create <a> elements
  const linkA = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));

  // Returning the navigation bar with the mapped links
  return <nav>{linkA}</nav>;
}

export default NavBar;