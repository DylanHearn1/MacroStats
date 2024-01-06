import { useState } from 'react';
import { Macros, SearchParams } from '../App';

interface Search {
  onSubmit: (params: SearchParams) => void;
  onSubmitCustom: (customItem: Macros) => void;
}

const AddItem = ({ onSubmit, onSubmitCustom }: Search) => {
  const [search, setSearch] = useState('');
  const [amount, setAmount] = useState('');
  const [weightValue, setWeightValue] = useState('grams');
  const [showCustomInput, setShowCustomInput] = useState(false);

  const [customItem, setCustomItem] = useState('');
  const [customWeight, setCustomWeight] = useState(0);
  const [customCalories, setCustomCalories] = useState(0);
  const [customProtein, setCustomProtein] = useState(0);
  const [customFats, setCustomFats] = useState(0);
  const [customCarbs, setCustomCarbs] = useState(0);

  const handleSubmit = () => {
    onSubmit({ weight: amount, unit: weightValue, item: search });
    setSearch('');
    setAmount('');
  };

  const handleCustomOpen = () => {
    showCustomInput ? setShowCustomInput(false) : setShowCustomInput(true);
  };

  const handleCustomSubmit = () => {
    customItem &&
      onSubmitCustom({
        name: customItem,
        serving_size_g: customWeight,
        calories: customCalories,
        protein_g: customProtein,
        fat_total_g: customFats,
        carbohydrates_total_g: customCarbs,
        id: '',
      });

    setShowCustomInput(false);
    setCustomItem('');
    setCustomCalories(0);
  };

  return (
    <>
      <div className="flex flex-col md:grid md:grid-cols-4 mb-5 gap-4 m-5">
        <input
          className="p-2 rounded-2xl mb-3 lg:mb-0 text-center col-span-4 bg-white-200 outline-none"
          type="text"
          id="foodInput"
          placeholder="Item"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <input
          className="p-2 rounded-2xl mb-3 lg:mb-0 text-center"
          type="number"
          placeholder="Amount"
          id="foodAmountInput"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          name=""
          className="p-2 rounded-2xl mb-3 lg:mb-0 text-center"
          onChange={(e) => setWeightValue(e.target.value)}
          id="unitInput"
        >
          <option value="grams">Grams</option>
          <option value="kilograms">Kilograms</option>
          <option value="lbs">Pounds</option>
        </select>
        <button
          onClick={handleSubmit}
          className="bg-sky-500 rounded-2xl text-white p-2 mb-5 lg:mb-0 col-span-1 hover:bg-sky-400"
        >
          Add Item
        </button>
        <button
          className="rounded-2xl p-2 mb-5 lg:mb-0 col-span-1 bg-green-400 text-white"
          onClick={handleCustomOpen}
        >
          Add custom item
        </button>
      </div>
      <div
        className={
          showCustomInput
            ? 'absolute z-10 bg-slate-800/50 flex justify-center items-center w-screen h-screen'
            : 'hidden'
        }
      >
        <div className="bg-white rounded-2xl p-5">
          <div className="flex justify-end">
            <button
              className="bg-red-400 text-white font-bold text-xl px-2 rounded-md "
              onClick={handleCustomOpen}
            >
              X
            </button>
          </div>
          <p className="text-xl font-bold text-center">Custom item</p>
          <div className="flex flex-col">
            <div className="flex justify-end">
              <label htmlFor="customItem" className="flex flex-end">
                Item
              </label>
            </div>
            <input
              type="text"
              id="customItem"
              className="border-2 rounded-lg mb-2 p-1"
              placeholder="Item"
              onChange={(e) => setCustomItem(e.target.value)}
              value={customItem}
            />
            <div className="flex justify-end">
              <label htmlFor="customWeight">Weight (g)</label>
            </div>
            <input
              type="number"
              id="customWeight"
              className="border-2 rounded-lg mb-2 p-1"
              placeholder="Grams"
              onChange={(e) => setCustomWeight(e.target.valueAsNumber)}
              value={customWeight}
            />
            <div className="flex justify-end"></div>
            <div className="flex justify-end">
              <label htmlFor="customCalories">Calories (Kcal)</label>
            </div>
            <input
              type="number"
              id="customCalories"
              className="border-2 rounded-lg mb-2 p-1"
              placeholder="Kcal"
              onChange={(e) => setCustomCalories(e.target.valueAsNumber)}
              value={customCalories}
            />
            <div className="flex justify-end">
              <label htmlFor="customProtein">Protein (g)</label>
            </div>
            <input
              type="number"
              id="customProtein"
              className="border-2 rounded-lg mb-2 p-1"
              placeholder="Protein"
              onChange={(e) => setCustomProtein(e.target.valueAsNumber)}
              value={customProtein}
            />
            <div className="flex justify-end">
              <label htmlFor="customFats">Fats (g)</label>
            </div>
            <input
              type="number"
              id="customFats"
              className="border-2 rounded-lg mb-2 p-1"
              placeholder="Fats"
              onChange={(e) => setCustomFats(e.target.valueAsNumber)}
              value={customFats}
            />
            <div className="flex justify-end">
              <label htmlFor="customCarbs">Carbs (g)</label>
            </div>
            <input
              type="number"
              id="customCarbs"
              className="border-2 rounded-lg mb-2 p-1"
              placeholder="Carbs"
              onChange={(e) => setCustomCarbs(e.target.valueAsNumber)}
              value={customCarbs}
            />
            <button
              className="bg-green-400 rounded-lg p-1 text-white"
              onClick={handleCustomSubmit}
            >
              Add item
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItem;
