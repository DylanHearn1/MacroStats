import './App.css';
import { useState } from 'react';

interface Nutrition {
  name: string;
  id: number;
  calories: number;
  protein_g: number;
  fat_total_g: number;
  carbohydrates_total_g: number;
}

function App() {
  const [data, setData] = useState<Nutrition[]>([]);
  const [search, setSearch] = useState('');

  const URL = `https://api.calorieninjas.com/v1/nutrition?query=${search}`;
  const options = {
    method: 'GET',
    headers: {
      'X-Api-Key': 'BLZ9TvB3MGi/KZx2CSu07w==VPHCTJCjHPa1K4UP',
    },
  };

  async function getResults() {
    try {
      const responce = await fetch(URL, options);
      const results = await responce.json();
      setData(results.items);
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
        {data.length > 0 && (
          <div>
            {data.map((item) => (
              // Using random number since data didnt come with id, user can delete items so index wasnt an option
              <div key={Math.random().toString(36).substring(2, 9)}>
                <p>{item.name}</p>
                <p>Calories: {item.calories}</p>
                <p>Protein: {item.protein_g}</p>
                <p>Fats: {item.fat_total_g}</p>
                <p>Carbs: {item.carbohydrates_total_g}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
