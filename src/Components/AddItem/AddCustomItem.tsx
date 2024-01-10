import CustomInput from './CustomInput';
import { useState } from 'react';
import { Macros } from '../../App';

interface CustomItemProps {
  onClick: () => void;
  isOpen: boolean;
  onSubmit: (Object: Macros) => void;
}

const AddCustomItem = ({ onClick, isOpen, onSubmit }: CustomItemProps) => {
  const [customItem, setCustomItem] = useState('');
  const [customWeight, setCustomWeight] = useState(0);
  const [customCalories, setCustomCalories] = useState(0);
  const [customProtein, setCustomProtein] = useState(0);
  const [customFats, setCustomFats] = useState(0);
  const [customCarbs, setCustomCarbs] = useState(0);
  const [customSug, setCustomSug] = useState(0);

  const handleCustomSubmit = () => {
    customItem &&
      onSubmit({
        name: customItem,
        serving_size_g: customWeight,
        calories: customCalories,
        protein_g: customProtein,
        fat_total_g: customFats,
        carbohydrates_total_g: customCarbs,
        sugar_g: customSug,
        id: '',
      });
    setCustomItem('');
    setCustomCalories(0);
  };

  return (
    <>
      <div
        className={
          isOpen
            ? 'absolute z-10 bg-slate-800/50 flex justify-center items-center w-screen h-screen'
            : 'hidden'
        }
      >
        <div className="bg-white rounded-2xl p-5">
          <div className="flex justify-end">
            <button
              className="bg-red-400 text-white font-bold text-xl px-2 rounded-md "
              onClick={onClick}
            >
              X
            </button>
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-bold text-center">Custom item</p>
            <CustomInput
              placeholder="Item"
              value={customItem}
              change={(newValue) => setCustomItem(newValue)}
              inputType="Text"
              required={true}
            />
            <CustomInput
              placeholder="Weight"
              value={customWeight}
              change={(newValue) => setCustomWeight(newValue)}
              inputType="Number"
            />
            <CustomInput
              placeholder="Calories"
              value={customCalories}
              change={(newValue) => setCustomCalories(newValue)}
              inputType="Number"
            />
            <CustomInput
              placeholder="Protein"
              value={customProtein}
              change={(newValue) => setCustomProtein(newValue)}
              inputType="Number"
            />
            <CustomInput
              placeholder="Fats"
              value={customFats}
              change={(newValue) => setCustomFats(newValue)}
              inputType="Number"
            />
            <CustomInput
              placeholder="Carbs"
              value={customCarbs}
              change={(newValue) => setCustomCarbs(newValue)}
              inputType="Number"
            />
            <CustomInput
              placeholder="Sugar"
              value={customSug}
              change={(newValue) => setCustomSug(newValue)}
              inputType="Number"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-green-400 px-4 py-1 rounded-lg my-2 text-white"
              onClick={() => handleCustomSubmit()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCustomItem;
