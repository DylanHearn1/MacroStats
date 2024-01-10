import './App.scss';
import { useState } from 'react';
import MainSection from './Components/Main/MainContent';
import ProgressUpdate from './Components/UpdateBars/Progress';
import AddItem from './Components/AddItem/AddItem';
// import Nav from './Components/NavBar/Nav';

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
        setItems((prevItems) => [...prevItems, newItem]);
      }
    } catch (error) {
      console.log(error + 'error on the server');
    }
  }

  const randomKey = () => {
    return Math.random().toString(36).slice(2, 8);
  };

  const addCustomItem = ({
    name,
    serving_size_g,
    calories,
    protein_g,
    fat_total_g,
    carbohydrates_total_g,
    sugar_g,
  }: Macros) => {
    const customItem = {
      name: name,
      serving_size_g: serving_size_g,
      calories: calories,
      protein_g: protein_g,
      fat_total_g: fat_total_g,
      carbohydrates_total_g: carbohydrates_total_g,
      sugar_g: sugar_g,
      id: randomKey(),
    };

    setItems((prevItems) => [...prevItems, customItem]);
  };

  const removeItem = (id: string) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  return (
    <>
      <div className="md:h-screen bg-slate-200 md:grid grid-cols-2">
        <div className="flex flex-col overflow-auto col-span-1">
          <AddItem onSubmit={retreiveSearch} onSubmitCustom={addCustomItem} />
          <section className="col-span-2">
            {items.length > 0 ? (
              <MainSection Items={items} removeItem={removeItem} />
            ) : (
              <div className="flex justify-center items-center h-40">
                <p className="text-2xl font-bold">Add an item to start</p>
              </div>
            )}
          </section>
        </div>
        <section className="bg-white rounded-3xl m-5 custom-box-shadow col-span-1">
          <ProgressUpdate items={items} />
        </section>
      </div>
    </>
  );
}

export default App;
