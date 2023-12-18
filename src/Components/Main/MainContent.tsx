interface Data {
  data: Array<DataProps>;
  removeItem: (key: string) => void;
}

export interface DataProps {
  name: string;
  serving_size_g: number;
  calories: number;
  protein_g: number;
  fat_total_g: number;
  carbohydrates_total_g: number;
  id: string;
}

const MainSection: React.FC<Data> = ({ data, removeItem }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="flex">
          <p>Name: {item.name}</p>
          <p>Size: {item.serving_size_g}g</p>
          <p>Calories: {item.calories}</p>
          <p>Protein: {item.protein_g}</p>
          <p>Fats: {item.fat_total_g}g</p>
          <p>Carbs: {item.carbohydrates_total_g}g</p>
          <p>{item.id}</p>
          <button onClick={() => removeItem(item.id)} className="bg-green-400">
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default MainSection;
