import React from "react";
import "./Home.css";
import Blog from "../../components/blog/Blog";
import Comments from "../../components/comments/Comments";
import Footer from "../../components/footer/Footer";
import Dicat from "../../components/diets/Dicat";
import Calculation from "../../components/calculation/Calculation";



const Home = () => {
  return (
    <div>
        <Calculation />
        <Blog />
        <Dicat />
        <Comments />
        <Footer />
    </div>
  );
};

export default Home;
