const LoadingScreen = () => {
  return (
    <div className="fixed flex items-center justify-center w-full h-full right-0 bottom-0 z-[99999] bg-green-400">
      <div className="flex flex-col items-center justify-center space-y-9">
        {/* TODO: animation for text */}
        <span className="text-white font-bold text-5xl">My Boilerplate ... </span>
      </div>
    </div>
  );
};

export default LoadingScreen;
