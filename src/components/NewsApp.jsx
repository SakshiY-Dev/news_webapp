import { useState, useEffect } from "react";
import Card from "./Card";

const NewsApp = () => {
  const [search, setSearch] = useState("india");
  const [news, setNews] = useState(null);

  const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${NEWS_API_KEY}`
    );
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNews(jsonData.articles);
  };
  useEffect(() => {
    getData();
  }, []);
  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  const userInput = (e) => {
    setSearch(e.target.value);
    getData();
  };
  return (
    <div>
      <nav className="flex justify-around bg-blue-400 text-black py-4 px-4 ">
        <div className="flex gap-2 items-center">
          <img src="/logo.png" alt="logo" className="w-15 h-15" />
          <h1 className="text-3xl font-medium ">Daily Digest</h1>
        </div>
        <ul className="flex gap-10 mt-4">
          <a
            href="#"
            onClick={userInput}
            value="All News"
            className="text-lg font-medium hover:text-blue-700 hover:underline transition duration-200 cursor-pointer"
          >
            All News
          </a>
          <a
            href="#"
            onClick={userInput}
            value="Trending"
            className="text-lg font-medium hover:text-blue-700  hover:underline transition duration-200 cursor-pointer"
          >
            Trending
          </a>
        </ul>
        <div className="flex gap-1">
          <input
            className="border border-gray-400 rounded-lg py-2 px-4 bg-white w-50 h-10 mt-2"
            type="text"
            placeholder="Search News"
            value={search}
            onChange={handleInput}
          />
          <button
            onClick={getData}
            className="bg-blue-700 text-white text-center w-[120px] h-[40px] cursor-pointer rounded-lg  hover:bg-blue-900  mt-2"
          >
            Search
          </button>
        </div>
      </nav>
      <div className="flex justify-center mt-8 text-blue-900 font-medium text-3xl">
        <p>Stay updated with the latest news from around the world !</p>
      </div>
      <div className="flex justify-center gap-6 mt-7 mb-7">
        <button
          onClick={userInput}
          value="sports"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 w-[145px] h-[40px] text-center cursor-pointer"
        >
          Sports
        </button>

        <button
          onClick={userInput}
          value=" Entertainment"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 w-[145px] h-[40px] text-center cursor-pointer"
        >
          Entertainment
        </button>
        <button
          onClick={userInput}
          value=" Politics"
          className=" bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 w-[145px] h-[40px] text-center cursor-pointer"
        >
          Politics
        </button>
        <button
          onClick={userInput}
          value="  Health"
          className=" bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 w-[145px] h-[40px] text-center cursor-pointer"
        >
          Health
        </button>
        <button
          onClick={userInput}
          value=" Education"
          className=" bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 w-[145px] h-[40px] text-center cursor-pointer"
        >
          Education
        </button>
        <button
          onClick={userInput}
          value=" Technology"
          className=" bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 w-[145px] h-[40px] text-center cursor-pointer"
        >
          Technology
        </button>
      </div>
      <div>{news ? <Card data={news} /> : null}</div>
    </div>
  );
};

export default NewsApp;
