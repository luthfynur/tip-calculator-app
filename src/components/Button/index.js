export default function Button({ id, onClick, text, value, pokus }) {
  return (
    <button
      id={id}
      className={`${
        parseInt(pokus) === parseInt(value)
          ? 'bg-strongcyan text-verydarkcyan '
          : 'bg-verydarkcyan text-verylightgrayishcyan '
      }
      hover:bg-lightgrayishcyan 
      hover:text-verydarkcyan 
      focus:bg-strongcyan 
      focus:text-verydarkcyan 
      font-monospace 
      py-2 
      px-4 
      rounded`}
      onClick={onClick}
      value={value}
    >
      {text}
    </button>
  );
}
