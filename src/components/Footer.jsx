import React from "react";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <div className="footer">
      <Link to="/Home" className="button" style={{ color: "Black" }}>
        Home
      </Link>

      <Link to="/Level1" className="button" style={{ color: "red" }}>
        Level 1
      </Link>

      <Link to="/Level2" className="button" style={{ color: "yellow" }}>
        Level 2
      </Link>

      <Link to="/Level3" className="button" style={{ color: "blue" }}>
        Level 3
      </Link>
    </div>
  );
};

export default footer;
