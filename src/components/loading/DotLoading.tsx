interface DotLoadingProps {
    isLoading?: boolean;
    color?: string;
  }
  
  const DotLoading = ({ isLoading = true, color = '#FF862F' }: DotLoadingProps) => {
    if (!isLoading) return null;
  
    return (
      <div className="flex items-center justify-center gap-1">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: color,
              animation: `bounce 1.4s infinite ease-in-out ${index * 0.16}s`
            }}
          />
        ))}
      </div>
    );
  };
  
  export default DotLoading;