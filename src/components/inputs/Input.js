const Input = ({ type, placeholder,value,required,disabled }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        disabled={disabled}
        className="
         border
         border-border-color 
         focus:placeholder:-translate-y-2 
         focus:placeholder:duration-300 
         w-full
         placeholder:text-xs 
         placeholder:focus:text-[10px] 
         py-2 
         px-2  
         mb-1 
         text-sm 
         font-normal 
         outline-1
         outline-gray-200 
         bg-gray-50 rounded"
      />
    </>
  );
};

export default Input;
