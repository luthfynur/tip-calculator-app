export default function Input({
  onChange,
  inputTitle,
  img,
  id,
  error,
  noImg,
  marginTop = '',
  placeholder = '0',
  center,
}) {
  return (
    <div className={`container ${marginTop}`}>
      <div className="relative mb-1">
        <h1 className="text-grayishcyan font-monospace text-xs">
          {inputTitle}
        </h1>
        {id === 'people' && error ? (
          <h1 className="absolute text-red-400 inset-y-0 right-0 font-monospace text-xs text-right">
            Can't be zero
          </h1>
        ) : (
          ''
        )}
      </div>
      <div className="relative font-monospace text-verydarkcyan ">
        <span
          className={`${
            noImg ? 'invisible' : ''
          } absolute inset-y-0 left-0 flex items-center pl-2`}
        >
          <img src={img} alt="span" />
        </span>
        <input
          type="number"
          id={id}
          className={`p-1 w-full text-xl
        text-verydarkcyan bg-verylightgrayishcyan
          hover:border-solid hover:border ${
            error ? 'hover:border-red-400' : 'hover:border-strongcyan'
          }
          border-solid border ${error ? 'border-red-400' : 'border-transparent'}
          rounded ${center ? 'pl-0' : 'pl-10'} 
        focus:bg-verylightgrayishcyan 
        focus:text-verydarkcyan
          focus:border focus:outline-none ${
            error ? 'focus:border-red-400' : 'focus:border-strongcyan'
          }
          ${center ? 'text-center' : 'text-right'}`}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
