import ProgressBar from './ProgressBar';
import { useEffect, useState } from 'react';
import { Macros } from '../../App';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

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
  const [goal, setGoal] = useState(Boolean);

  const goalButtonStyle = 'w-24 rounded-full bg-slate-300 overflow-hidden flex';

  const calculateTotal = (Macro: keyof Macros) => {
    return Math.floor(items.reduce((acc, cur) => acc + Number(cur[Macro]), 0));
  };

  useEffect(() => {
    const key = localStorage.getItem(`${macroDisplayName}`);
    if (key === 'false') {
      setGoal(false);
    } else {
      setGoal(true);
    }
  }, []);

  const changeSetGoal = () => {
    setGoal((prev) => !prev);
    goal
      ? localStorage.setItem(`${macroDisplayName}`, 'false')
      : localStorage.setItem(`${macroDisplayName}`, 'true');
    console.log(goal);
  };

  return (
    <div className="bg-slate-200 py-4 px-2 rounded-xl mb-5">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <BurgerMenu
            onclick={() => setShowInput((prev) => !prev)}
            open={showInput}
          />
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
        {/* <button onClick={() => (goal ? setGoal(false) : setGoal(true))}> */}
        <button onClick={changeSetGoal}>
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
