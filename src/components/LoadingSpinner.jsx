const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-200 border-solid rounded-full animate-spin"></div>
        <div className="w-16 h-16 border-4 border-blue-600 border-solid rounded-full animate-spin absolute top-0 left-0 border-t-transparent"></div>
      </div>
      <div className="ml-4">
        <p className="text-gray-600 font-medium">Loading latest news...</p>
        <p className="text-gray-500 text-sm">Please wait a moment</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;