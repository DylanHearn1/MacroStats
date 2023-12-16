interface Data {
  data: Array<DataProps>;
}

export interface DataProps {
  name: string;
  serving_size_g: number;
  calories: number;
  protein_g: number;
  fat_total_g: number;
  carbohydrates_total_g: number;
}

const MainSection = (data: Data) => {
  return (
    <div>
      {data.data.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>Size: {item.serving_size_g}g</p>
          <p>Calories: {item.calories}</p>
          <p>Fats: {item.fat_total_g}g</p>
          <p>Carbs: {item.carbohydrates_total_g}g</p>
        </div>
      ))}
    </div>
  );
};

export default MainSection;
