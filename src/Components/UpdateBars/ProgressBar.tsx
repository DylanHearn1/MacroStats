import { useState } from 'react';

interface ProgressProps {
  amount: number;
  goal: number;
  unit: string;
}

const ProgressBar = ({ amount, goal, unit }: ProgressProps) => {
  const percentage = Math.floor((amount / goal) * 100);
  const progressStyles = 'rounded-full px-2 py-1 text-center text-white';
  const goalButtonStyle = 'w-24 rounded-full bg-slate-300 overflow-hidden flex';

  const [isGoal, setIsGoal] = useState(true);

  return (
    <>
      <div className="flex justify-end items-center gap-4">
        <div>
          <p>
            {(isGoal && goal >= amount) || (!isGoal && amount <= goal)
              ? `${goal - amount} ${unit} Left`
              : isGoal && amount >= goal
              ? `Complete!`
              : !isGoal && amount >= goal && `${amount - goal} ${unit} Over`}
          </p>
        </div>
        <button onClick={() => (isGoal ? setIsGoal(false) : setIsGoal(true))}>
          <div
            className={
              isGoal ? `${goalButtonStyle} justify-end` : `${goalButtonStyle}`
            }
          >
            <div
              style={{ width: '60%' }}
              className={
                isGoal
                  ? 'bg-green-500 rounded-full text-white'
                  : 'bg-red-500 rounded-full text-white'
              }
            >
              {isGoal ? 'Goal' : 'Limit'}
            </div>
          </div>
        </button>
      </div>
      <div className="w-full my-1">
        <div className="bg-slate-300 rounded-full w-full overflow-hidden">
          <div
            className={
              isGoal && percentage >= 100
                ? `bg-green-400 ${progressStyles}`
                : !isGoal && percentage >= 100
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
