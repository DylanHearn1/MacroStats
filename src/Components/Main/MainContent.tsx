import { Data } from '../../App';

const MainSection: React.FC<Data> = ({ data, removeItem }) => {
  return (
    <div className="flex flex-col-reverse">
      {data.length &&
        data.map((item) => (
          <div
            key={item.id}
            className="md:grid md:grid-cols-7 p-3 bg-white rounded-xl md:rounded-xl my-2 text-center"
          >
            <p className="font-bold">
              {item.name[0].toUpperCase() +
                item.name.slice(1, item.name.length)}
            </p>
            <p className="opacity-70">
              <strong>{item.serving_size_g}g</strong>
            </p>
            <p className="opacity-70">
              <strong>{item.calories}</strong> Kcal
            </p>
            <p className="opacity-70">
              <strong>{item.protein_g}g</strong> Pro
            </p>
            <p className="opacity-70">
              <strong>{item.fat_total_g}g</strong> Fat
            </p>
            <p className="opacity-70">
              <strong>{item.carbohydrates_total_g}g</strong> Car
            </p>
            <div>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-500 text-white rounded-lg font-bold w-full"
              >
                X
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MainSection;
