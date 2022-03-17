import Button from '../Button';
import Input from '../Input';

export default function TipPercentage({ onClick, onChange, pokus }) {
  return (
    <div className="container mt-8">
      <h1 className="text-grayishcyan font-monospace text-xs mb-1">
        Select Tip %
      </h1>
      <div className="grid grid-cols-3 gap-2">
        <Button text="5%" onClick={onClick} value="5" pokus={pokus} />
        <Button text="10%" onClick={onClick} value="10" pokus={pokus} />
        <Button text="15%" onClick={onClick} value="15" pokus={pokus} />
      </div>
      <div className="grid grid-cols-3 gap-2 mt-2">
        <Button text="25%" onClick={onClick} value="25" pokus={pokus} />
        <Button text="50%" onClick={onClick} value="50" pokus={pokus} />
        <Input
          id="custom_tip"
          noImg
          onChange={onChange}
          placeholder="Custom"
          center
        />
      </div>
    </div>
  );
}
