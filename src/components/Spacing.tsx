interface SpacingProps {
  size?: number;
}

const Spacing = ({ size = 6 }: SpacingProps) => {
  return <div className={`h-${size}`}></div>;
};

export default Spacing; 