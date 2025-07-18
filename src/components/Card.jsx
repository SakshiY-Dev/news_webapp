const Card = ({ data }) => {
  const readMore = (url) => {
    window.open(url);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((curItem, index) => {
        if (curItem.urlToImage === null) {
          return null;
        } else {
          return (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  className="w-full object-cover object-center h-48 hover:scale-105 transition-transform duration-300"
                  src={curItem.urlToImage}
                  alt={curItem.title}
                  onError={(e) => {
                    e.target.src = 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=400';
                  }}
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {curItem.source?.name || 'News'}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                {curItem.publishedAt && (
                  <p className="text-gray-500 text-sm mb-2">
                    {formatDate(curItem.publishedAt)}
                  </p>
                )}
                
                <a
                  onClick={() => readMore(curItem.url)}
                  className="text-lg font-bold text-gray-800 hover:text-blue-600 cursor-pointer line-clamp-2 mb-3 block transition-colors duration-200"
                >
                  {curItem.title}
                </a>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {curItem.description || 'No description available for this article.'}
                </p>
                
                {curItem.author && (
                  <p className="text-gray-500 text-xs mb-4">
                    By {curItem.author}
                  </p>
                )}
                
                <button
                  onClick={() => readMore(curItem.url)}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition duration-300 font-medium shadow-md hover:shadow-lg"
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
