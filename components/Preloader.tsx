const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="h-24 w-24 animate-spin rounded-full border-8 border-white/30 border-t-white" />
    </div>
  );
};

export default Preloader;
