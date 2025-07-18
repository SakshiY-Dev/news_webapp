const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="max-w-md mx-auto bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
      <div className="flex items-center mb-4">
        <div className="text-red-500 text-2xl mr-3">⚠️</div>
        <h3 className="text-red-800 font-semibold">Something went wrong</h3>
      </div>
      <p className="text-red-700 mb-4">{message}</p>
      <button
        onClick={onRetry}
        className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-200 font-medium"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorMessage;