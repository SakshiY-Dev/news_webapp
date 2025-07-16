const Card = ({ data }) => {
  const readMore = (url) => {
    window.open(url);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((curItem, index) => {
        if (curItem.urlToImage === null) {
          return null;
        } else {
          return (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                className="w-full  object-cover object-center h-[300px]"
                src={curItem.urlToImage}
              />
              <div className="p-4">
                <a
                  onClick={() => readMore(curItem.url)}
                  className="text-lg font-semibold text-blue-600 hover:underline cursor-pointer"
                >
                  {curItem.title}
                </a>
                <p className="text-gray-600 mt-2">{curItem.description}</p>
                <button
                  onClick={() => readMore(curItem.url)}
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
                >
                  Read More
                </button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card;
