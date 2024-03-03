interface ProgressProps {
  amount: number;
  goal: number;
  goalOrLimit: boolean;
}

const ProgressBar = ({ amount, goal, goalOrLimit }: ProgressProps) => {
  const percentage = Math.floor((amount / goal) * 100);
  const progressStyles = 'rounded-full text-center text-white h-full w-full';

  return (
    <>
      <div className="flex justify-between items-center"></div>
      <div className="w-full">
        <div className="bg-slate-300 rounded-full w-full overflow-hidden h-2">
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
              ...(percentage > 100 && { width: '100%' }),
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
