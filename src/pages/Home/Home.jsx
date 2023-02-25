import React from "react";
import Discover from "../discover/Discover";
import Discoverplace from "../discoverplace/Discoverplace";
import Explore from "../explore/Explore";
import Footer from "../footer/Footer";
import Footerlast from "../footerlast/Footerlast";
import Navbartrulia from "../navbar/Navbartrulia";
import New from "../newlylisted/New";
import Newlylisted from "../newlylisted/Newlylisted";
import Searchneigh from "../searchneighbor/Searchneigh";
import Truliahelp from "../truliahelp/Truliahelp";

const Home = () => {
  return (
    <>
      <Explore />
      <Newlylisted />
      <Truliahelp />
      <Searchneigh />

      <Discoverplace />
      <New />
      <Footer />
    </>
  );
};

export default Home;
