export interface Data {
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
  const headings = ['Name', 'Weight', 'Calories', 'Protein', 'Fat', 'Carbs'];

  return (
    <div>
      <div className="grid grid-cols-7">
        {headings.map((item, index) => (
          <h1 key={index} className="underline font-bold text-xl">
            {item}
          </h1>
        ))}
      </div>
      {data.length &&
        data.map((item, index) => (
          <div
            key={index}
            className={
              index % 2 === 0
                ? 'grid grid-cols-7 py-2 bg-slate-300'
                : 'grid grid-cols-7 py-2'
            }
          >
            <p>
              {item.name[0].toUpperCase() +
                item.name.slice(1, item.name.length)}
            </p>
            <p>{item.serving_size_g}g</p>
            <p>{item.calories} Kcal</p>
            <p>{item.protein_g}g</p>
            <p>{item.fat_total_g}g</p>
            <p>{item.carbohydrates_total_g}g</p>
            <button
              onClick={() => removeItem(item.id)}
              className="bg-green-400"
            >
              Remove
            </button>
          </div>
        ))}
    </div>
  );
};

export default MainSection;
