import './App.css';
import { useState } from 'react';
import MainSection from './Components/Main/Main';
import { DataProps } from './Components/Main/Main';

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

  async function getResults() {
    try {
      const responce = await fetch(URL, options);
      const results = await responce.json();
      // results.items[0] otherwise user could enter multiple food for one search
      setData((prevData) => [...prevData, results.items[0]]);
    } catch (error) {
      console.log(error + 'error on the server');
    }
  }

  return (
    <>
      <div>
        <input
          className="bg-gray"
          type="text"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={getResults}>Search</button>
        <button onClick={() => console.log(data)}>check</button>
        <MainSection data={data} />
      </div>
    </>
  );
}

export default App;
