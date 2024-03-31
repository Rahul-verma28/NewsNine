import React from "react";
import News from "./components/News";

const Home = ({ category, setProgress }) => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-blue-800 py-20">
        <div className="container mx-auto text-white p-5">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-8">
            Welcome to <span className="text-yellow-600">NewsNine</span>
          </h1>
          <p className="text-lg lg:text-xl text-center mb-8">
            Stay informed. Stay inspired. Stay ahead with NewsNine - Your ultimate source for the latest news, stories, and insights.
          </p>
          <p className="text-center text-sm lg:text-base">
            <em>"Because knowledge is power, and we believe in empowering you with the most relevant information."</em>
          </p>
        </div>
      </div>
      <News category={category} setProgress={setProgress} />
    </>
  );
};

export default Home;
