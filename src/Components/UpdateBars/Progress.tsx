import { Item } from '../../App';

interface ProgressUpdateProps {
  items: Item[]
}

const ProgressUpdate = ({ items }: ProgressUpdateProps) => {
  const reduceItemsProperty = (property: string) => {
    return items.reduce((acc, cur) => acc + cur[property], 0)
  }

  return (
    <div>
      <h1>Current Progress</h1>
      <ul>
        <li>{reduceItemsProperty('calories')}</li>
        <li>{reduceItemsProperty('protein_g')}</li>
        <li>{reduceItemsProperty('carbohydrates_total_g')}</li>
      </ul>
    </div>
  );
};

export default ProgressUpdate;
