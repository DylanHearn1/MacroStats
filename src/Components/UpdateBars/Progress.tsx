import { Macros } from '../../App';
import ProgressBar from './ProgressBar';
import { useState } from 'react';

interface ProgressProps {
  items: Array<Macros>;
}

const ProgressUpdate = ({ items }: ProgressProps) => {
  function calculateTotal(amount: keyof Macros) {
    return Math.floor(items.reduce((acc, cur) => acc + Number(cur[amount]), 0));
  }

  const [calGoal, setCalGoal] = useState(2500);
  const [proGoal, setProGoal] = useState(150);
  const [fatGoal, setFatGoal] = useState(70);
  const [carGoal, setCarGoal] = useState(600);

  return (
    <div className="p-2">
      <p className="text-xl text-center font-bold">Current Progress</p>
      <div className="bg-slate-200 p-2 rounded-xl mb-5">
        <div className="flex justify-between my-2">
          <p className="font-bold text-xl">Calories</p>
          <input
            className="rounded-lg px-2 text-right"
            type="number"
            id="calorieInput"
            placeholder="Calorie goal"
            onChange={(e) => setCalGoal(e.target.valueAsNumber)}
            value={calGoal}
          />
        </div>
        <ProgressBar
          amount={calculateTotal('calories')}
          goal={calGoal}
          unit="Kcal"
        />
      </div>
      <div className="bg-slate-200 p-2 rounded-xl mb-5">
        <div className="flex justify-between my-2">
          <p className="font-bold text-xl">Protein</p>
          <input
            className="rounded-lg px-2"
            type="number"
            id="proteinInput"
            placeholder="Protein goal"
            onChange={(e) => setProGoal(e.target.valueAsNumber)}
            value={proGoal}
          />
        </div>
        <ProgressBar
          amount={calculateTotal('protein_g')}
          goal={proGoal}
          unit="Grams"
        />
      </div>
      <div className="bg-slate-200 p-2 rounded-xl mb-5">
        <div className="flex justify-between my-2">
          <p className="font-bold text-xl">Fats</p>
          <input
            className="rounded-lg px-2"
            type="number"
            id="fatInput"
            placeholder="Fat goal"
            onChange={(e) => setFatGoal(e.target.valueAsNumber)}
            value={fatGoal}
          />
        </div>
        <ProgressBar
          amount={calculateTotal('fat_total_g')}
          goal={fatGoal}
          unit="Grams"
        />
      </div>
      <div className="bg-slate-200 p-2 rounded-xl mb-5">
        <div className="flex justify-between my-2">
          <p className="font-bold text-xl">Carbs</p>
          <input
            className="rounded-lg px-2"
            type="number"
            id="carbInput"
            placeholder="Carb goal"
            onChange={(e) => setCarGoal(e.target.valueAsNumber)}
            value={carGoal}
          />
        </div>
        <ProgressBar
          amount={calculateTotal('carbohydrates_total_g')}
          goal={carGoal}
          unit="Grams"
        />
      </div>
    </div>
  );
};

export default ProgressUpdate;
