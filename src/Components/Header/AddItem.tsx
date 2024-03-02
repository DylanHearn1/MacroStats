import { useState } from 'react';
import { SearchParams } from '../../App';

interface Search {
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
    <>
      <div className="bg-slate-100 xl:w-1/2 flex flex-col md:flex-row m-auto rounded lg:rounded-full p-2 shadow-lg justify-between px-3 space-y-4 md:space-y-0">
        <input
          className="border-none relative bg-transparent outline-none"
          type="text"
          id="foodInput"
          placeholder="Item"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <input
          className="bg-transparent outline-none appearance-none"
          type="number"
          placeholder="Weight"
          id="foodAmountInput"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          name=""
          className="bg-transparent outline-none"
          onChange={(e) => setWeightValue(e.target.value)}
          id="unitInput"
        >
          <option value="grams">Grams</option>
          <option value="kilograms">Kilograms</option>
          <option value="lbs">Pounds</option>
        </select>
        <button
          onClick={handleSubmit}
          className="bg-sky-500 rounded-2xl text-white p-2 col-span-1 hover:bg-sky-600 my-2 md:my-0"
        >
          Add Item
        </button>
      </div>
    </>
  );
};

export default AddItem;
