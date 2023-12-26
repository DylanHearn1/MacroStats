import { useState } from 'react';

import { ItemSearchParams } from '../App';

interface AddItemProps {
  onSubmit: (data: ItemSearchParams) => void;
}

const AddItem: React.FC<AddItemProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [unit, setUnit] = useState<ItemSearchParams['unit']>('grams');

  const handleSubmit = () => {
    onSubmit({amount: amount, unit: unit, name: name});
  };

  return (
    <div className="flex flex-col md:flex-row mb-5">
      <input
        className="p-2 rounded-xl w-44 md:w-80 sm:mr-5 mb-3 lg:mb-0 text-center"
        type="text"
        placeholder="Item"
        onChange={(e) => setName(e.target.value)}
        value={name}
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
        onChange={(e) => setUnit(e.target.value as ItemSearchParams['unit'])}
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
