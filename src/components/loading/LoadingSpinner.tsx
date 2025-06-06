interface LoadingSpinnerProps {
    isLoading: boolean;
  }
  
  const LoadingSpinner = ({ isLoading }: LoadingSpinnerProps) => {
    if (!isLoading) return null;
  
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin" />
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    );
  };
  
  export default LoadingSpinner;