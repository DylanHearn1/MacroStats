import './App.scss';
import { useEffect, useState } from 'react';
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

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const URL = `https://api.calorieninjas.com/v1/nutrition?query=${searchQuery}`;
  const options = {
    method: 'GET',
    headers: {
      'X-Api-Key': import.meta.env.VITE_MACRO_API_KEY,
    },
  };

  const randomKey = () => {
    return Math.random().toString(36).slice(2, 8);
  };

  useEffect(() => {
    async function getResults() {
      try {
        const responce = await fetch(URL, options);
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
    getResults();
  }, [searchQuery]);

  const removeItem = (id: string) => {
    const filteredData = items.filter((item) => item.id !== id);
    setItems(filteredData);
  };

  const takeQuery = (amount: string, value: string, search: string) => {
    setSearchQuery(`${amount} ${value} ${search}`);
  };

  return (
    <>
      <div className="md:h-screen bg-slate-200 p-8">
        <div className="flex justify-center my-5">
          <AddItem onSubmit={takeQuery} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 h-5/6">
          <section className="col-span-2 overflow-auto">
            {items.length > 0 && (
              <MainSection items={items} removeItem={removeItem} />
            )}
          </section>
          <section className="bg-white rounded-xl p-5">
            <ProgressUpdate data={items} removeItem={removeItem} />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
