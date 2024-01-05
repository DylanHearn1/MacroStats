import { Macros } from '../../App';

export interface FoodItems {
  Items: Array<Macros>;
  removeItem: (id: string) => void;
}

const MainSection = ({ Items, removeItem }: FoodItems) => {
  return (
    <div className="flex flex-col-reverse m-5">
      {Items.length &&
        Items.map((item) => (
          <div
            key={item.id}
            className="md:grid md:grid-cols-7 p-3 py-5 bg-white rounded-xl md:rounded-xl my-2 items-center text-center"
          >
            <p className="font-bold text-xl">
              {item.name[0].toUpperCase() +
                item.name.slice(1, item.name.length)}
            </p>
            <p className="opacity-70">{item.serving_size_g}g</p>
            <p className="opacity-70">{item.calories} Kcal</p>
            <p className="opacity-70">{item.protein_g}g Pro</p>
            <p className="opacity-70">{item.fat_total_g}g Fat</p>
            <p className="opacity-70">{item.carbohydrates_total_g}g Car</p>
            <div>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-500 text-white rounded-lg font-bold px-3 py-1 hover:bg-red-400"
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
