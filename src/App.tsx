import { useState } from 'react';
import MainSection from './Components/Main/MainContent';
import ProgressSection from './Components/UpdateBars/ProgressSection';
import AddItem from './Components/Header/AddItem';
import './App.scss';

export interface Macros {
  name: string;
  serving_size_g: number;
  calories: number;
  protein_g: number;
  fat_total_g: number;
  carbohydrates_total_g: number;
  sugar_g: number;
  id: string;
}

export interface SearchParams {
  unit: string;
  weight: string;
  item: string;
}

function App() {
  const [items, setItems] = useState<Macros[]>([]);

  async function retrieveSearch({ weight, unit, item }: SearchParams) {
    const URL = `https://api.calorieninjas.com/v1/nutrition?query=${weight} ${unit} ${item}`;
    const options = {
      method: 'GET',
      headers: {
        'X-Api-Key': import.meta.env.VITE_MACRO_API_KEY,
      },
    };

    try {
      const response = await fetch(URL, options);
      const results = await response.json();
      if (results.items.length > 0) {
        const newItem = {
          ...results.items[0],
          id: randomKey(),
        };
        setItems((prevItems) => [...prevItems, newItem]);
      }
    } catch (error) {
      console.log(error + 'error on the server');
    }
  }

  const randomKey = () => {
    return Math.random().toString(36).slice(2, 8);
  };

  const removeItem = (id: string) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  return (
    <>
      <header className="my-5 px-5">
        <AddItem onSubmit={retrieveSearch} />
      </header>
      <main className="flex flex-col lg:flex-row justify-between w-full gap-5 px-5">
        <section className="lg:w-4/6">
          {items.length > 0 ? (
            <MainSection Items={items} removeItem={removeItem} />
          ) : (
            <div className="flex justify-center items-center h-full">
              <p className="text-2xl font-bold">Add an item to start</p>
            </div>
          )}
        </section>
        <section className="lg:w-2/6">
          <ProgressSection items={items} />
        </section>
      </main>
    </>
  );
}

export default App;
