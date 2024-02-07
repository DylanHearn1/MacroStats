import ProgressBar from './ProgressBar';
import { useState } from 'react';
import { Macros } from '../../App';
import pencilicon from './../../assets/pencil.png';

interface ProgressGoalInputProps {
  macroDisplayName: string;
  macro: keyof Macros;
  items: Array<Macros>;
  inputStart: number;
  unit: string;
}

const ProgressGoalInput = ({
  items,
  macro,
  inputStart,
  macroDisplayName,
  unit,
}: ProgressGoalInputProps) => {
  const [target, setTarget] = useState(inputStart);
  const [showInput, setShowInput] = useState(false);
  const [goal, setGoal] = useState(true);

  const goalButtonStyle = 'w-24 rounded-full bg-slate-300 overflow-hidden flex';

  const calculateTotal = (Macro: keyof Macros) => {
    return Math.floor(items.reduce((acc, cur) => acc + Number(cur[Macro]), 0));
  };

  return (
    <div className="bg-slate-200 py-4 px-2 rounded-xl mb-5">
      <div className="flex justify-between items-center">
        <div className="flex">
          <button onClick={() => setShowInput((prev) => !prev)}>
            <img src={pencilicon} alt="edit icon" width={'25px'} />
          </button>
          {showInput && (
            <>
              <input
                className="rounded-lg px-2 md:text-right w-20"
                type="number"
                id={macro}
                placeholder={`${macroDisplayName} (${unit})`}
                onChange={(e) => setTarget(e.target.valueAsNumber)}
                value={target}
              />
            </>
          )}
          {!showInput && (
            <>
              <p>{`${target} ${unit}`}</p>
            </>
          )}
        </div>
        <div className="items-center flex flex-col">
          <h1 className="text-xl font-bold">{macroDisplayName}</h1>
          <p>
            {(goal && target >= calculateTotal(macro)) ||
            (!goal && calculateTotal(macro) <= target)
              ? `${target - calculateTotal(macro)} ${unit} Left`
              : goal && calculateTotal(macro) >= target
              ? `Complete!`
              : !target ||
                (calculateTotal(macro) >= target &&
                  `${calculateTotal(macro) - target} ${unit} Over`)}
          </p>
        </div>
        <button onClick={() => (goal ? setGoal(false) : setGoal(true))}>
          <div
            className={
              goal
                ? `${goalButtonStyle} justify-end`
                : `${goalButtonStyle} justify-start`
            }
          >
            <div
              style={{ width: '60%' }}
              className={
                goal
                  ? 'bg-green-500 rounded-full text-white'
                  : 'bg-red-500 rounded-full text-white'
              }
            >
              {goal ? 'Goal' : 'Limit'}
            </div>
          </div>
        </button>
      </div>
      <ProgressBar
        amount={calculateTotal(macro)}
        goal={target}
        goalOrLimit={goal}
      />
    </div>
  );
};

export default ProgressGoalInput;
