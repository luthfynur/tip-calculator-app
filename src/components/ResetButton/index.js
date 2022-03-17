export default function ResetButton({ id, onClick, text, disabled }) {
  return (
    <button
      disabled={disabled}
      id={id}
      className={`
      bg-strongcyan text-verydarkcyan    
      hover:bg-lightgrayishcyan 
      hover:text-verydarkcyan 
      focus:bg-strongcyan 
      focus:text-verydarkcyan
      disabled:bg-strongcyan disabled:bg-opacity-20
      font-monospace 
      py-2 
      px-4 
      rounded
      w-full
      sm:mt-20
      mt-8
      `}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
