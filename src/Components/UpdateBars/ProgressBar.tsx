interface ProgressProps {
  amount: number;
  goal: number;
}

const ProgressBar = ({ amount, goal }: ProgressProps) => {
  const percentage = Math.floor((amount / goal) * 100);
  const progressStyles = 'rounded-full px-2 py-1 text-center text-white';

  return (
    <div className="w-full my-1">
      <div className="bg-slate-300 rounded-full w-full overflow-hidden">
        <div
          className={
            percentage >= 100
              ? `bg-green-400 ${progressStyles}`
              : `bg-sky-400 ${progressStyles}`
          }
          style={{
            transition: 'ease 2s',
            maxWidth: '100%',
            width: percentage + '%',
          }}
        >
          {goal ? percentage + '%' : 0 + '%'}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
