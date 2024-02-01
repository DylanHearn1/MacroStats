import ProgressBar from './ProgressBar';
import { useState } from 'react';
import { Macros } from '../../App';

interface ProgressInputProps {
  macroDisplayName: string;
  macro: keyof Macros;
  items: Array<Macros>;
  inputStart: number;
  unit: string;
}

const ProgressInput = ({
  items,
  macro,
  inputStart,
  macroDisplayName,
  unit,
}: ProgressInputProps) => {
  const [target, setTarget] = useState(inputStart);

  const calculateTotal = (Macro: keyof Macros) => {
    return Math.floor(items.reduce((acc, cur) => acc + Number(cur[Macro]), 0));
  };

  return (
    <div className="bg-slate-200 py-4 px-2 rounded-xl mb-5">
      <div className="flex justify-between flex-wrap my-2">
        <p className="font-bold text-xl">{macroDisplayName}</p>
        <input
          className="rounded-lg px-2 md:text-right 1/6"
          type="number"
          id={macro}
          placeholder={`${macroDisplayName} (${unit})`}
          onChange={(e) => setTarget(e.target.valueAsNumber)}
          value={target}
        />
      </div>
      <ProgressBar amount={calculateTotal(macro)} goal={target} unit={unit} />
    </div>
  );
};

export default ProgressInput;
