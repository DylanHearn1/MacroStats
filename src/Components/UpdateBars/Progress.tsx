import { Macros } from '../../App';
import ProgressBar from './ProgressBar';

interface ProgressProps {
  items: Array<Macros>;
}

const ProgressUpdate = ({ items }: ProgressProps) => {
  function calculateTotal(amount: keyof Macros) {
    return Math.floor(items.reduce((acc, cur) => acc + Number(cur[amount]), 0));
  }

  return (
    <div className="p-2">
      <h1>Current Progress</h1>
      <ProgressBar amount={calculateTotal('calories')} macroType="calories" />
      <ProgressBar amount={calculateTotal('protein_g')} macroType="protein" />
      <ProgressBar amount={calculateTotal('fat_total_g')} macroType="fats" />
      <ProgressBar
        amount={calculateTotal('carbohydrates_total_g')}
        macroType="carbs"
      />
    </div>
  );
};

export default ProgressUpdate;
