import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="boxed-view">
      <div className="boxed-view__box">
        <h1>Page Not Found</h1>
        <p>Hmmm, we're unable to find that page.</p>
        <Link className="button button--link" to="/">Head Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
