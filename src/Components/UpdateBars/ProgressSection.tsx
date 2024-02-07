import { Macros } from '../../App';
import ProgressGoalInput from './ProgressGoalInput';

interface ProgressProps {
  items: Array<Macros>;
}

const ProgressUpdate = ({ items }: ProgressProps) => {
  return (
    <div className="px-4 flex flex-col justify-around h-full">
      <p className="text-2xl text-center my-4 font-bold">Current Progress</p>
      <ProgressGoalInput
        macro="calories"
        items={items}
        inputStart={2500}
        macroDisplayName="Calories"
        unit="Kcal"
      />
      <ProgressGoalInput
        macro="protein_g"
        items={items}
        inputStart={150}
        macroDisplayName="Protein"
        unit="grams"
      />
      <ProgressGoalInput
        macro="fat_total_g"
        items={items}
        inputStart={70}
        macroDisplayName="Fats"
        unit="grams"
      />
      <ProgressGoalInput
        macro="carbohydrates_total_g"
        items={items}
        inputStart={200}
        macroDisplayName="Carbs"
        unit="grams"
      />
      <ProgressGoalInput
        macro="sugar_g"
        items={items}
        inputStart={70}
        macroDisplayName="Sugar"
        unit="grams"
      />
    </div>
  );
};

export default ProgressUpdate;
