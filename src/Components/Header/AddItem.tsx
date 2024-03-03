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
    if (search) {
      onSubmit({ weight: amount, unit: weightValue, item: search });
      setSearch('');
      setAmount('');
    } else {
      alert('Please enter a valid food');
    }
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white flex rounded-full progress-shadow space-x-2 ">
        <input
          className="border-none py-3 outline-none focus:outline-none focus:ring focus:border-blue-600 rounded-full px-2"
          type="text"
          id="foodInput"
          placeholder="Item"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <input
          className="bg-transparent outline-none appearance-none py-3 focus:outline-none focus:ring focus:border-blue-600 rounded-full px-2"
          type="number"
          placeholder="Weight"
          id="foodAmountInput"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          name=""
          className="bg-transparent outline-none py-3 px-2"
          onChange={(e) => setWeightValue(e.target.value)}
          id="unitInput"
        >
          <option value="grams">Grams</option>
          <option value="kilograms">Kilograms</option>
          <option value="lbs">Pounds</option>
        </select>
        <button
          onClick={handleSubmit}
          className="bg-sky-500 rounded-full progress-shadow text-white p-2 hover:bg-sky-600 ease duration-300"
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default AddItem;
