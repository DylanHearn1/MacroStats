import ProgressBar from './ProgressBar';
import { useEffect, useState } from 'react';
import { Macros } from '../../App';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

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
    // <div className="bg-slate-100 py-2 px-2 rounded-xl mb-5 shadow-lg">
    //   <div className="flex justify-between">
    //     <div className="flex space-x-2 items-center">
    //       <BurgerMenu
    //         onclick={() => setShowInput((prev) => !prev)}
    //         open={showInput}
    //       />
    //       {showInput && (
    //         <>
    //           <p>Edit</p>
    //           <input
    //             className="rounded-lg px-2 md:text-right w-20"
    //             type="number"
    //             id={macro}
    //             placeholder={`${macroDisplayName} (${unit})`}
    //             onChange={(e) => setTarget(e.target.valueAsNumber)}
    //             value={target}
    //           />
    //         </>
    //       )}
    //     </div>
    //     <button onClick={changeSetGoal}>
    //       <div
    //         className={
    //           goal
    //             ? `${goalButtonStyle} justify-end`
    //             : `${goalButtonStyle} justify-start`
    //         }
    //       >
    //         <div
    //           style={{ width: '60%' }}
    //           className={
    //             goal
    //               ? 'bg-green-500 rounded-full text-white'
    //               : 'bg-red-500 rounded-full text-white'
    //           }
    //         >
    //           {goal ? 'Goal' : 'Limit'}
    //         </div>
    //       </div>
    //     </button>
    //   </div>
    //   <div className="items-center flex flex-col">
    //     <h1 className="text-xl font-bold">{macroDisplayName}</h1>
    //     <p>
    //       {(goal && target >= calculateTotal(macro)) ||
    //       (!goal && calculateTotal(macro) <= target)
    //         ? `${target - calculateTotal(macro)} ${unit} Left`
    //         : goal && calculateTotal(macro) >= target
    //         ? `Complete!`
    //         : !target ||
    //           (calculateTotal(macro) >= target &&
    //             `${calculateTotal(macro) - target} ${unit} Over`)}
    //     </p>
    //   </div>
    //   <button onClick={(prev) => setGoal(!prev)} />
    //   <ProgressBar
    //     amount={calculateTotal(macro)}
    //     goal={target}
    //     goalOrLimit={goal}
    //   />
    // </div>

    <>
      <div className="progress-shadow py-5 px-5 rounded-xl bg-white hover:scale-110 ease duration-300">
        <div className="flex justify-between mb-5">
          <div className="space-y-2">
            <h1>{macroDisplayName}</h1>
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
          </div>
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
    </>
  );
};

export default MacroProgress;
