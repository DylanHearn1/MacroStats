import ProgressBar from './ProgressBar';
import { useEffect, useState } from 'react';
import { Macros } from '../../App';
import editicon from './../../assets/edit.svg';
import deleteicon from './../../assets/delete.svg';

interface MacroProgressProps {
  macroDisplayName: string;
  macro: keyof Macros;
  items: Array<Macros>;
  inputStart: number;
  unit: string;
}

const MacroProgress = ({
  items,
  macro,
  inputStart,
  macroDisplayName,
  unit,
}: MacroProgressProps) => {
  const [target, setTarget] = useState(inputStart);
  const [showInput, setShowInput] = useState(false);
  const [goal, setGoal] = useState(true);

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
    <>
      <div className="progress-shadow py-5 px-5 rounded-xl bg-white hover:scale-110 ease duration-300">
        <div className="flex justify-between mb-5">
          <div className="space-y-2">
            <h1>{macroDisplayName}</h1>
            <div className="flex">
              {showInput ? (
                <>
                  <input
                    className="rounded-lg px-2 md:text-right w-20 bg-slate-100"
                    type="number"
                    id={macro}
                    placeholder={`${macroDisplayName} (${unit})`}
                    onChange={(e) => setTarget(e.target.valueAsNumber)}
                    value={target}
                  />
                  <button
                    onClick={() => setShowInput((prev) => !prev)}
                    className="px-2 py-1"
                  >
                    <img
                      src={deleteicon}
                      alt="close input"
                      width={'10px'}
                      className="opacity-60"
                    />
                  </button>
                </>
              ) : (
                <>
                  <p className="opacity-60">
                    {(goal && target >= calculateTotal(macro)) ||
                    (!goal && calculateTotal(macro) <= target)
                      ? `${target - calculateTotal(macro)} ${unit}`
                      : goal && calculateTotal(macro) >= target
                      ? `Complete!`
                      : !target ||
                        (calculateTotal(macro) >= target &&
                          `${calculateTotal(macro) - target} ${unit} over`)}
                  </p>
                  <button
                    onClick={() => setShowInput((prev) => !prev)}
                    className="px-2 py-1"
                  >
                    <img
                      src={editicon}
                      alt="edit"
                      width={'15px'}
                      className="opacity-60"
                    />
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-center items-end space-y-2">
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
        </div>
        <ProgressBar
          amount={calculateTotal(macro)}
          goal={target}
          goalOrLimit={goal}
        />
      </div>
    </>
  );
};

export default MacroProgress;
