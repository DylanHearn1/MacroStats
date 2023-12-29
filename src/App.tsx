import './App.scss';
import { useState } from 'react';
import MainSection from './Components/Main/MainContent';
import ProgressUpdate from './Components/UpdateBars/Progress';
import AddItem from './Components/AddItem';
// import Nav from './Components/NavBar/Nav';

export interface Macros {
  name: string;
  serving_size_g: number;
  calories: number;
  protein_g: number;
  fat_total_g: number;
  carbohydrates_total_g: number;
  id: string;
}

export interface SearchParams {
  unit: string;
  weight: string;
  item: string;
}

function App() {
  const [data, setData] = useState<Macros[]>([]);

  async function retreiveSearch({ weight, unit, item }: SearchParams) {
    const URL = `https://api.calorieninjas.com/v1/nutrition?query=${weight} ${unit} ${item}`;
    const options = {
      method: 'GET',
      headers: {
        'X-Api-Key': import.meta.env.VITE_MACRO_API_KEY,
      },
    };

    try {
      const responce = await fetch(URL, options);
      const results = await responce.json();
      if (results.items.length > 0) {
        const newItem = {
          ...results.items[0],
          id: randomKey(),
        };
        setData((prevData) => [...prevData, newItem]);
      }
    } catch (error) {
      console.log(error + 'error on the server');
    }
  }

  const randomKey = () => {
    return Math.random().toString(36).slice(2, 8);
  };

  const removeItem = (id: string) => {
    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
  };

  return (
    <>
      <div className="md:h-screen bg-slate-200 sm:p-8 md:grid grid-cols-2 gap-7">
        <div className="flex flex-col overflow-auto px-2">
          <AddItem onSubmit={retreiveSearch} />
          <section className="col-span-2">
            {data.length > 0 && (
              <MainSection Items={data} removeItem={removeItem} />
            )}
          </section>
        </div>
        <section className="bg-white rounded-3xl">
          <ProgressUpdate data={data} />
        </section>
      </div>
    </>
  );
}

export default App;
