import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/form-1">Baisc Form</Link>
        </li>
        <li>
          <Link to="/form-2">Complex Form</Link>
        </li>
      </ul>
    </div>
  );
};
