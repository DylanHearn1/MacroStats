interface ProgressProps {
  macroType: string;
  amount: number;
}

const ProgressBar = ({ macroType, amount }: ProgressProps) => {
  return (
    <div className="w-full">
      <h1 className="font-bold">{macroType}</h1>
      <p>{amount}</p>
    </div>
  );
};

export default ProgressBar;
