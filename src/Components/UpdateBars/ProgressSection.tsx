import { Macros } from '../../App';
import MacroProgress from './IndividualMacroProgress';

interface ProgressProps {
  items: Array<Macros>;
}

const ProgressSection = ({ items }: ProgressProps) => {
  return (
    <div className="space-y-10 mb-5">
      <MacroProgress
        macro="calories"
        items={items}
        inputStart={2500}
        macroDisplayName="Calories"
        unit="Kcal"
      />

      <MacroProgress
        macro="protein_g"
        items={items}
        inputStart={150}
        macroDisplayName="Protein"
        unit="Grams"
      />

      <MacroProgress
        macro="fat_total_g"
        items={items}
        inputStart={70}
        macroDisplayName="Fats"
        unit="Grams"
      />
      <MacroProgress
        macro="carbohydrates_total_g"
        items={items}
        inputStart={200}
        macroDisplayName="Carbs"
        unit="Grams"
      />
      <MacroProgress
        macro="sugar_g"
        items={items}
        inputStart={70}
        macroDisplayName="Sugar"
        unit="Grams"
      />
    </div>
  );
};

export default ProgressSection;
