import ResetButton from '../ResetButton';
import Card from '../Card';

export default function Output({ tipAmount, total, onClick, disabled }) {
  return (
    <Card
      background="bg-verydarkcyan"
      borderRadius="rounded-2xl"
      height="h-full sm:h-[295px]"
      padding="sm:p-6 pt-6 pr-6 pl-6"
      marginTop="mt-6 sm:mt-0"
    >
      <div className="container">
        <div className="relative mt-6">
          <div className="container">
            <p className="font-monospace text-white text-sm">Tip Amount</p>
            <p className="font-monospace text-gray-300 text-xs">/ person</p>
          </div>
          <input
            disabled
            value={`$${tipAmount}`}
            className={`sm:disabled:max-w-[200px] font-monospace disabled:max-w-[180px] disabled:bg-transparent disabled:text-strongcyan disabled:text-[40px] text-right absolute inset-y-0 right-0`}
          />
        </div>
        <div className="relative mt-8">
          <div className="container">
            <p className="font-monospace text-white text-sm">Total</p>
            <p className="font-monospace text-gray-300 text-xs">/ person</p>
          </div>
          <input
            disabled
            value={`$${total}`}
            className={`sm:disabled:max-w-[200px] font-monospace disabled:max-w-[180px] disabled:bg-transparent disabled:text-strongcyan disabled:text-[40px] text-right absolute inset-y-0 right-0`}
          />
        </div>
        <ResetButton
          id="reset"
          text="RESET"
          onClick={onClick}
          disabled={disabled}
        />
      </div>
    </Card>
  );
}
