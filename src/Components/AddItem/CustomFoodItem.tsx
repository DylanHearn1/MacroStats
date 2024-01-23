import CustomInput from './CustomInput';
import { useFormik } from 'formik';
import { Macros } from '../../App';

interface CustomItemProps {
  onClick: () => void;
  isOpen: boolean;
  onSubmitSend: (Object: Macros) => void;
}

const validate = (values: { name: string }) => {
  const errors: { name?: string } = {};

  if (!values.name) {
    errors.name = 'Name required';
  }
  return errors;
};

const CustomFoodItem = ({ onSubmitSend, onClick, isOpen }: CustomItemProps) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      weight: 0,
      calories: 0,
      protein: 0,
      fats: 0,
      carbs: 0,
      sugar: 0,
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      onSubmitSend({
        name: values.name,
        serving_size_g: values.weight,
        calories: values.calories,
        protein_g: values.protein,
        fat_total_g: values.fats,
        carbohydrates_total_g: values.carbs,
        sugar_g: values.sugar,
        id: '',
      });
    },
  });

  return (
    <>
      {isOpen && (
        <div className="fixed bg-slate-500/50 top-0 left-0 w-full h-full flex items-center justify-center">
          <dialog open className="p-3 rounded-xl">
            <button
              onClick={onClick}
              className="bg-red-500 hover:bg-red-400 text-white px-3 py-1 rounded-lg font-bold"
            >
              &#10005;
            </button>
            <form onSubmit={formik.handleSubmit}>
              <CustomInput
                placeholder="name"
                change={formik.handleChange}
                value={formik.values.name}
                inputType="text"
              />
              {formik.errors.name && (
                <p className="text-red-500 font-bold">{formik.errors.name}</p>
              )}
              <CustomInput
                placeholder="weight"
                change={formik.handleChange}
                value={formik.values.weight}
                inputType="number"
              />
              <CustomInput
                placeholder="calories"
                change={formik.handleChange}
                value={formik.values.calories}
                inputType="number"
              />
              <CustomInput
                placeholder="protein"
                change={formik.handleChange}
                value={formik.values.protein}
                inputType="number"
              />
              <CustomInput
                placeholder="fats"
                change={formik.handleChange}
                value={formik.values.fats}
                inputType="number"
              />
              <CustomInput
                placeholder="carbs"
                change={formik.handleChange}
                value={formik.values.carbs}
                inputType="number"
              />
              <CustomInput
                placeholder="sugar"
                change={formik.handleChange}
                value={formik.values.sugar}
                inputType="number"
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-400 text-white px-2 py-1 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </dialog>
        </div>
      )}
    </>
  );
};

export default CustomFoodItem;
