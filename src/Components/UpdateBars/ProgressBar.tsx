interface ProgressProps {
  amount: number;
  goal: number;
  goalOrLimit: boolean;
}

const ProgressBar = ({ amount, goal, goalOrLimit }: ProgressProps) => {
  const percentage = Math.floor((amount / goal) * 100);
  const progressStyles = 'rounded-full px-2 py-1 text-center text-white';

  return (
    <>
      <div className="flex justify-between items-center gap-4"></div>
      <div className="w-full my-1">
        <div className="bg-slate-300 rounded-full w-full overflow-hidden">
          <div
            className={
              goalOrLimit && percentage >= 100
                ? `bg-green-400 ${progressStyles}`
                : !goalOrLimit && percentage >= 100
                ? `bg-red-400 ${progressStyles}`
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
    </>
  );
};

export default ProgressBar;
