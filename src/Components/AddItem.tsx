import { useState } from 'react';
import { SearchParams } from '../App';

export interface Search {
  onSubmit: (params: SearchParams) => void;
}

const AddItem = ({ onSubmit }: Search) => {
  const [search, setSearch] = useState('');
  const [amount, setAmount] = useState('');
  const [weightValue, setWeightValue] = useState('grams');

  const handleSubmit = () => {
    onSubmit({ weight: amount, unit: weightValue, item: search });
    setSearch('');
    setAmount('');
  };

  return (
    <div className="flex flex-col md:grid md:grid-cols-4 mb-5 gap-4">
      <input
        className="p-2 rounded-2xl mb-3 lg:mb-0 text-center col-span-4 bg-white-200 outline-none"
        type="text"
        placeholder="Item"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <input
        className="p-2 rounded-2xl  mb-3 lg:mb-0 text-center"
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        name=""
        className="p-2 rounded-2xl mb-3 lg:mb-0 text-center"
        onChange={(e) => setWeightValue(e.target.value)}
      >
        <option value="grams">Grams</option>
        <option value="kilograms">Kilograms</option>
        <option value="lbs">Pounds</option>
      </select>
      <button
        onClick={handleSubmit}
        className="bg-sky-500 rounded-2xl text-white p-2 mb-5 lg:mb-0 col-span-2 hover:bg-sky-400"
      >
        Add Item
      </button>
    </div>
  );
};

export default AddItem;
