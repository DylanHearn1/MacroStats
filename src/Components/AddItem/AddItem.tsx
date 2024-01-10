import { useState } from 'react';
import { Macros, SearchParams } from '../../App';
import AddCustomItem from './AddCustomItem';

interface Search {
  onSubmit: (params: SearchParams) => void;
  onSubmitCustom: (customItem: Macros) => void;
}

const AddItem = ({ onSubmit, onSubmitCustom }: Search) => {
  const [search, setSearch] = useState('');
  const [amount, setAmount] = useState('');
  const [weightValue, setWeightValue] = useState('grams');
  const [showCustomInput, setShowCustomInput] = useState(false);

  const handleSubmit = () => {
    onSubmit({ weight: amount, unit: weightValue, item: search });
    setSearch('');
    setAmount('');
  };

  const handleCustomOpen = () => {
    showCustomInput ? setShowCustomInput(false) : setShowCustomInput(true);
  };

  const handleCustomSubmit = ({
    name,
    serving_size_g,
    calories,
    protein_g,
    fat_total_g,
    carbohydrates_total_g,
    sugar_g,
  }: Macros) => {
    onSubmitCustom({
      name: name,
      serving_size_g: serving_size_g,
      calories: calories,
      protein_g: protein_g,
      fat_total_g: fat_total_g,
      carbohydrates_total_g: carbohydrates_total_g,
      sugar_g: sugar_g,
      id: '',
    });
    setShowCustomInput(false);
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
      <AddCustomItem
        onClick={handleCustomOpen}
        isOpen={showCustomInput}
        onSubmit={(params) => handleCustomSubmit(params)}
      />
    </>
  );
};

export default AddItem;
