import { Macros } from '../../App';

export interface FoodItems {
  Items: Array<Macros>;
  removeItem: (id: string) => void;
}

const MainSection = ({ Items, removeItem }: FoodItems) => {
  return (
    <div className="flex flex-col-reverse">
      {Items.length &&
        Items.map((item) => (
          <div
            key={item.id}
            className="2xl:grid 2xl:grid-cols-8 mb-5 md:flex-col p-3 py-5 bg-white rounded-xl items-center text-center 2xl:divide-x-2 shadow-lg"
          >
            <p className="text-xl">
              {item.name[0].toUpperCase() +
                item.name.slice(1, item.name.length)}
            </p>
            <p className="opacity-60 my-1 2xl:my-0">
              {item.serving_size_g} Grams
            </p>
            <p className="opacity-60 my-1 2xl:my-0">{item.calories} Kcal</p>
            <p className="opacity-60 my-1 2xl:my-0">{item.protein_g}g Pro</p>
            <p className="opacity-60 my-1 2xl:my-0">{item.fat_total_g}g Fat</p>
            <p className="opacity-60 my-1 2xl:my-0">
              {item.carbohydrates_total_g}g Car
            </p>
            <p className="opacity-60 my-1 2xl:my-0">{item.sugar_g}g Sugar</p>
            <div>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-500 text-white rounded-lg px-3 py-1 hover:bg-red-400"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MainSection;
