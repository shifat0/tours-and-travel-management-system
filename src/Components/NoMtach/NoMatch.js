import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div className="text-center m-5">
      <h1 className="text-danger">The Page is not Found</h1>
      <Link to="/">
        <h3>Return back to home</h3>
      </Link>
    </div>
  );
};

export default NoMatch;
