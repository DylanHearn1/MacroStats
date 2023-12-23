import { useState } from 'react';

interface Search {
  onSubmit: (item: string, weight: string, value: string) => void;
}

const AddItem: React.FC<Search> = ({ onSubmit }) => {
  const [search, setSearch] = useState('');
  const [amount, setAmount] = useState('');
  const [weightValue, setWeightValue] = useState('grams');

  const handleSubmit = () => {
    onSubmit(amount, weightValue, search);
  };

  return (
    <div className="flex flex-col md:flex-row mb-5">
      <input
        className="p-2 rounded-xl w-44 md:w-80 sm:mr-5 mb-3 lg:mb-0 text-center"
        type="text"
        placeholder="Item"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <input
        className="p-2 rounded-xl w-44 sm:mr-5 mb-3 lg:mb-0 text-center"
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        name=""
        className="p-2 rounded-xl w-44 sm:mr-5 mb-3 lg:mb-0 text-center"
        onChange={(e) => setWeightValue(e.target.value)}
      >
        <option value="grams">Grams</option>
        <option value="kilograms">Kilograms</option>
        <option value="lbs">Pounds</option>
      </select>
      <button
        onClick={handleSubmit}
        className="bg-sky-500 rounded-xl w-44 text-white p-2 sm:mr-3 mb-5 lg:mb-0"
      >
        Add Item
      </button>
    </div>
  );
};

export default AddItem;
