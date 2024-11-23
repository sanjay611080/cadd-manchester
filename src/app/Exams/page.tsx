const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600">
      <div className="bg-white p-10 rounded-xl shadow-2xl max-w-lg w-full text-center">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          🚧 This Page is Under Development 🚧
        </h1>
        
        {/* Message */}
        <p className="text-lg text-gray-700 mb-6">
          We're working hard to bring you an amazing experience. This page will be ready very soon!
        </p>

        {/* Progress bar */}
        <div className="relative pt-1 mb-6">
          <div className="flex mb-2 items-center justify-between">
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase">Development Progress</span>
          </div>
          <div className="flex mb-2">
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000"
                style={{ width: '50%' }}
              />
            </div>
          </div>
        </div>

        {/* Footer message */}
        <p className="text-sm text-gray-500 mt-4">
          Thank you for your patience. Stay tuned for updates!
        </p>
      </div>
    </div>
  );
};

export default Page;
