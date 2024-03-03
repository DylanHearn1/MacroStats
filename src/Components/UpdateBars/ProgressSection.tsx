import { Macros } from '../../App';
import MacroProgress from './IndividualMacroProgress';

interface ProgressProps {
  items: Array<Macros>;
}

const ProgressSection = ({ items }: ProgressProps) => {
  return (
    <div className="space-y-12">
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
        unit="grams"
      />

      <MacroProgress
        macro="fat_total_g"
        items={items}
        inputStart={70}
        macroDisplayName="Fats"
        unit="grams"
      />
      <MacroProgress
        macro="carbohydrates_total_g"
        items={items}
        inputStart={200}
        macroDisplayName="Carbs"
        unit="grams"
      />
      <MacroProgress
        macro="sugar_g"
        items={items}
        inputStart={70}
        macroDisplayName="Sugar"
        unit="grams"
      />
    </div>
  );
};

export default ProgressSection;
