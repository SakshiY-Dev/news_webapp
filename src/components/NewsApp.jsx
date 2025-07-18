import { useState, useEffect } from "react";
import Card from "./Card";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

const NewsApp = () => {
  const [search, setSearch] = useState("india");
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  const getData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=${NEWS_API_KEY}`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const jsonData = await response.json();
      
      if (jsonData.status === 'error') {
        throw new Error(jsonData.message || 'Failed to fetch news');
      }
      
      setNews(jsonData.articles || []);
    } catch (err) {
      setError(err.message || 'Failed to fetch news. Please try again.');
      setNews([]);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    getData();
  }, []);
  
  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  
  const userInput = (e) => {
    setSearch(e.target.value);
    getData();
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex gap-3 items-center">
              <img src="/logo.png" alt="logo" className="w-12 h-12 rounded-full shadow-md" />
              <h1 className="text-2xl sm:text-3xl font-bold">Daily Digest</h1>
            </div>
            
            <ul className="hidden md:flex gap-8">
              <a
                href="#"
                onClick={userInput}
                value="All News"
                className="text-lg font-medium hover:text-blue-200 hover:underline transition duration-200 cursor-pointer"
              >
                All News
              </a>
              <a
                href="#"
                onClick={userInput}
                value="Trending"
                className="text-lg font-medium hover:text-blue-200 hover:underline transition duration-200 cursor-pointer"
              >
                Trending
              </a>
            </ul>
            
            <div className="flex gap-2">
              <input
                className="border border-gray-300 rounded-lg py-2 px-4 bg-white text-gray-800 w-48 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                type="text"
                placeholder="Search News"
                value={search}
                onChange={handleInput}
              />
              <button
                onClick={getData}
                disabled={loading}
                className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {loading ? 'Searching...' : 'Search'}
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            Stay Updated with Latest News
          </h2>
          <p className="text-gray-600 text-lg">
            Discover breaking news and trending stories from around the world
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['sports', 'entertainment', 'politics', 'health', 'education', 'technology'].map((category) => (
            <button
              key={category}
              onClick={userInput}
              value={category}
              disabled={loading}
              className="bg-white text-blue-600 border-2 border-blue-600 py-2 px-6 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 font-medium capitalize disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
            >
              {category}
            </button>
          ))}
        </div>
        
        {error && <ErrorMessage message={error} onRetry={getData} />}
        
        {loading && <LoadingSpinner />}
        
        {!loading && !error && news && news.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📰</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No news found</h3>
            <p className="text-gray-500">Try searching for something else</p>
          </div>
        )}
        
        {!loading && !error && news && news.length > 0 && (
          <div className="pb-12">
            <Card data={news} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsApp;
