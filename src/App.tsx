import './App.scss';
import { useState } from 'react';
import MainSection from './Components/Main/MainContent';
import ProgressUpdate from './Components/UpdateBars/Progress';
import AddItem from './Components/AddItem';
// import Nav from './Components/NavBar/Nav';

export interface Item {
  name: string;
  serving_size_g: number;
  calories: number;
  protein_g: number;
  fat_total_g: number;
  carbohydrates_total_g: number;
  id: string;
}

export interface ItemSearchParams {
  amount: string,
  unit: 'grams' | 'kilograms' | 'lbs',
  name: string
}

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const options = {
    method: 'GET',
    headers: {
      'X-Api-Key': import.meta.env.VITE_MACRO_API_KEY,
    },
  };

  const randomKey = () => {
    return Math.random().toString(36).slice(2, 8);
  };

  const removeItem = (id: string) => {
    const filteredData = items.filter((item) => item.id !== id);
    setItems(filteredData);
  };

  async function getResults({amount, unit, name}: ItemSearchParams) {
    const Url = `https://api.calorieninjas.com/v1/nutrition?query=${amount} ${unit} ${name}`

    try {
      const responce = await fetch(Url, options);
      const results = await responce.json();
      if (results.items.length > 0) {
        const newItem = {
          ...results.items[0],
          id: randomKey(),
        };
        setItems((prevData) => [...prevData, newItem]);
      }
    } catch (error) {
      console.log(error + 'error on the server');
    }
  }

  return (
    <>
      <div className="md:h-screen bg-slate-200 p-8">
        <div className="flex justify-center my-5">
          <AddItem onSubmit={getResults} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 h-5/6">
          <section className="col-span-2 overflow-auto">
            {items.length > 0 && (
              <MainSection items={items} removeItem={removeItem} />
            )}
          </section>
          <section className="bg-white rounded-xl p-5">
            <ProgressUpdate items={items} />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
