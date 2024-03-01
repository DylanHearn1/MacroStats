interface CustomInputProps {
  placeholder: string;
  change: (e: any) => void;
  value: string | number;
  inputType: string;
  required?: boolean;
}

const CustomInput = ({
  placeholder,
  change,
  value,
  inputType,
  required,
}: CustomInputProps) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-end">
          <label htmlFor={placeholder} className="flex flex-end">
            {placeholder}
          </label>
        </div>
        <input
          type={inputType}
          id={placeholder}
          className={
            required
              ? 'border-2 rounded-lg mb-2 p-1 border-red-400'
              : 'border-2 rounded-lg mb-2 p-1'
          }
          placeholder={placeholder}
          onChange={change}
          value={value}
        />
      </div>
    </>
  );
};

export default CustomInput;
