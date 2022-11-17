import React from "react";
import Banner from "../Banner/Banner";
import Cards from "../Info/Cards";
import Services from "../Services/Services";
import Terms from "../Terms/Terms";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <Cards></Cards>
      <Services></Services>
      <Terms></Terms>
    </div>
  );
};

export default Home;
