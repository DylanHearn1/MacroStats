import { useState } from 'react';

interface ProgressProps {
  amount: number;
  goal: number;
  unit: string;
}

const ProgressBar = ({ amount, goal, unit }: ProgressProps) => {
  const percentage = Math.floor((amount / goal) * 100);
  const progressStyles = 'rounded-full px-2 py-1 text-center text-white';
  const goalButtonStyle = 'text-white px-2 py-1 rounded-lg';

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
        <button
          className={
            isGoal
              ? `bg-green-400 ${goalButtonStyle}`
              : `bg-red-400 ${goalButtonStyle}`
          }
          onClick={() => (isGoal ? setIsGoal(false) : setIsGoal(true))}
        >
          {isGoal ? 'Goal set' : 'Limit set'}
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
