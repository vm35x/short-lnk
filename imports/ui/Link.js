import React from "react";

import LinksList from "./LinksList";
import LinksListFilters from "./LinksListFilters";
import PrivateHeader from "./PrivateHeader";
import AddLink from "./AddLink";

const Link = () => {
  return (
    <div>
      <PrivateHeader title="Your Links" />
      <div className="page-content">
        <LinksListFilters />
        <AddLink />
        <LinksList />
      </div>
    </div>
  );
};

export default Link;
