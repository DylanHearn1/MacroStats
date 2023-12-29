import { Data } from '../../App';

const ProgressUpdate: React.FC<Data> = ({ data }) => {
  const calorieSum = data.reduce((acc, cur) => {
    return acc + cur.calories;
  }, 0);

  const proteinSum = data.reduce((acc, cur) => {
    return Math.floor(acc + cur.protein_g);
  }, 0);

  data.map((macro) => {
    return macro;
  });

  return (
    <div>
      <h1>Current Progress</h1>
      {calorieSum}
      {proteinSum}
    </div>
  );
};

export default ProgressUpdate;
