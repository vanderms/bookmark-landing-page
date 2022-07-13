

export const FeatureButton: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
  active: boolean;
}> = ({ onClick, children, active }) => {
  return (
    <div
      className={`relative h-[3.625rem] flex justify-center tracking-wide items-center first-of-type:border-t border-b border-[rgba(73,93,207,.20012)] 
      laptop:first-of-type:border-t-0  laptop:h-[3.0625rem] laptop:items-start ]`}
    >
      <button
        onClick={onClick}
        className={`font-sans text-dark  hover:text-red ${active ? "" : "opacity-75"}`}
      >
        {children}
      </button>
      {active && (
        <span className="absolute h-0 w-[8.9375rem] border-b-4 border-red bottom-0 laptop:w-full "></span>
      )}
    </div>
  );
};
