import React from "react";
import Discover from "../discover/Discover";
import Discoverplace from "../discoverplace/Discoverplace";
import Explore from "../explore/Explore";
import Footer from "../footer/Footer";
import Footerlast from "../footerlast/Footerlast";
import Navbartrulia from "../navbar/Navbartrulia";
import New from "../newlylisted/New";
import Searchneigh from "../searchneighbor/Searchneigh";
import Truliahelp from "../truliahelp/Truliahelp";

const Home = () => {
  return (
    <>
      <Discover />
      <Explore />
    <New />
    <Truliahelp />
    <Searchneigh />
    <Discoverplace />
    <Footer />
    <Footerlast/>
    </>
  );
};

export default Home;