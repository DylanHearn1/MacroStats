import { Macros } from '../../App';
import ProgressInput from './ProgressInput';

interface ProgressProps {
  items: Array<Macros>;
}

const ProgressUpdate = ({ items }: ProgressProps) => {
  return (
    <div className="px-4 flex flex-col justify-around h-full">
      <p className="text-2xl text-center my-4 font-bold">Current Progress</p>
      <ProgressInput
        macro="calories"
        items={items}
        inputStart={2500}
        macroDisplayName="Calories"
        unit="Kcal"
      />
      <ProgressInput
        macro="protein_g"
        items={items}
        inputStart={150}
        macroDisplayName="Protein"
        unit="grams"
      />
      <ProgressInput
        macro="fat_total_g"
        items={items}
        inputStart={70}
        macroDisplayName="Fat"
        unit="grams"
      />
      <ProgressInput
        macro="carbohydrates_total_g"
        items={items}
        inputStart={200}
        macroDisplayName="Carbs"
        unit="grams"
      />
      <ProgressInput
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
