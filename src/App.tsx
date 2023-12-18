import './App.css';
import { useState } from 'react';
import MainSection from './Components/Main/MainContent';
import { DataProps } from './Components/Main/MainContent';

function App() {
  const [data, setData] = useState<DataProps[]>([]);
  const [search, setSearch] = useState('');

  const URL = `https://api.calorieninjas.com/v1/nutrition?query=${search}`;
  const options = {
    method: 'GET',
    headers: {
      'X-Api-Key': import.meta.env.VITE_MACRO_API_KEY,
    },
  };

  const randomKey = () => {
    return Math.random().toString(36).substr(2, 8);
  };

  async function getResults() {
    setSearch('');
    try {
      const responce = await fetch(URL, options);
      const results = await responce.json();
      // create an id for item searched
      const newItem = {
        ...results.items[0],
        id: randomKey(),
      };
      // results.items[0] otherwise user could enter multiple food for one search
      setData((prevData) => [...prevData, newItem]);
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
      <div>
        <input
          className="bg-gray"
          type="text"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button onClick={getResults}>Search</button>
        <button onClick={() => console.log(data)}>check</button>
        <MainSection data={data} removeItem={removeItem} />
      </div>
    </>
  );
}

export default App;
