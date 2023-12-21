import './App.scss';
import { useState } from 'react';
import MainSection from './Components/Main/MainContent';
import { DataProps } from './Components/Main/MainContent';
import DataComponent from './Components/DataVisual/Data';
import ProgressUpdate from './Components/Update/Progress';
// import Nav from './Components/NavBar/Nav';

function App() {
  const [data, setData] = useState<DataProps[]>([]);
  const [search, setSearch] = useState('');
  const [amount, setAmount] = useState('');
  const [weightValue, setWeightValue] = useState('gram');

  const URL = `https://api.calorieninjas.com/v1/nutrition?query=${amount} ${weightValue} ${search}`;
  const options = {
    method: 'GET',
    headers: {
      'X-Api-Key': import.meta.env.VITE_MACRO_API_KEY,
    },
  };

  const randomKey = () => {
    return Math.random().toString(36).slice(2, 8);
  };
  async function getResults() {
    setSearch('');
    setAmount('');
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
      console.log(data);
    } catch (error) {
      console.log(error + 'error on the server');
    }
  }
  const removeItem = (id: string) => {
    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
  };

  return (
    <>
      <div id="container" className="h-screen">
        <div className="grid md:grid-cols-3 gap-1 h-full">
          <section className="col-span-2 h-full bg-slate-200 px-3 overflow-auto">
            <div className="grid grid-cols-4 my-5">
              <input
                className="p-1 rounded-full mx-2"
                type="text"
                placeholder="Item"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
              <input
                className="p-1 rounded-full mx-2"
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <select
                name=""
                className="p-1 rounded-full mx-2"
                onChange={(e) => setWeightValue(e.target.value)}
              >
                <option value="gram">Grams (g)</option>
                <option value="kilogram">Kilograms (kgs)</option>
                <option value="lbs">Pounds (lbs)</option>
              </select>
              <button
                onClick={getResults}
                className="bg-green-400 rounded-full mx-2"
              >
                Search
              </button>
              <button onClick={() => console.log(data)}>test</button>
            </div>
            {data.length > 0 && (
              <div className="bg-slate-200">
                <MainSection data={data} removeItem={removeItem} />
              </div>
            )}
          </section>
          <section className="h-full grid grid-row-6 gap-1">
            <div className="bg-slate-200 row-span-1">
              <DataComponent />
            </div>
            <div className="bg-slate-200 row-span-5">
              <ProgressUpdate />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
