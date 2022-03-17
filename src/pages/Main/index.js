import Logo from '../../components/Logo';
import Card from '../../components/Card';
import Input from '../../components/Input';
import DollarIcon from '../../assets/Images/icon-dollar.svg';
import PersonIcon from '../../assets/Images/icon-person.svg';
import { useState, useRef } from 'react';
import Output from '../../components/Output';
import TipPercentage from '../../components/TipPercentage';
import Footer from '../../components/Footer';

export default function Main() {
  const [bill, setBill] = useState(0.0);
  const [people, setPeople] = useState(0);
  const [tip, setTip] = useState(0.0);
  const [inputError, setInputError] = useState(false);
  const [pokus, setPokus] = useState(0.0);
  const [disableReset, setDisableReset] = useState(true);

  function handleChangeBill(e) {
    setDisableReset(false);
    setBill(e.target.value);
  }

  function handleChangePeople(e) {
    if (e.target.value === '0') {
      setDisableReset(false);
      setPeople(e.target.value);
      setInputError(true);
    } else {
      setDisableReset(false);
      setInputError(false);
      setPeople(e.target.value);
    }
  }

  function handleTip(e) {
    e.preventDefault();
    setDisableReset(false);
    setPokus(e.target.value);
    setTip(e.target.value / 100);
  }

  function tipAmount() {
    if (bill <= 0 || people <= 0 || tip <= 0) {
      return (0).toFixed(2);
    }
    return ((bill * tip) / people).toFixed(2);
  }

  function total() {
    if (bill <= 0 || people <= 0) {
      return (0).toFixed(2);
    }
    return (bill / people + parseFloat(tipAmount())).toFixed(2);
  }

  function reset() {
    setBill(0.0);
    setPeople(0);
    setTip(0.0);
    setInputError(false);
    setPokus(0.0);
    document.getElementById('bill').value = '';
    document.getElementById('people').value = '';
    document.getElementById('custom_tip').value = '';
    setDisableReset(true);
  }

  return (
    <div className="flex flex-col items-center h-screen sm:p-20 pt-12">
      <Logo />
      <Card
        background="bg-white"
        marginTop="mt-10"
        height="h-screen sm:h-[340px]"
        smMaxWidth="sm:w-[700px] sm:max-w-[1000px]"
        borderRadius="rounded-t-2xl"
      >
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 p-[22px] w-full">
          <Card
            background="bg-transparent"
            flexDirection="flex-col"
            padding="sm:pr-8 sm:pl-4"
            height="h-min"
          >
            <Input
              id="bill"
              inputTitle="Bill"
              onChange={handleChangeBill}
              img={DollarIcon}
            />
            <TipPercentage
              onClick={handleTip}
              onChange={handleTip}
              pokus={pokus}
            />
            <Input
              id="people"
              inputTitle="Number of People"
              onChange={handleChangePeople}
              marginTop="mt-8"
              img={PersonIcon}
              error={inputError}
            />
          </Card>
          <Output
            tipAmount={tipAmount()}
            total={total()}
            onClick={reset}
            disabled={disableReset}
          />
        </div>
      </Card>
      <Footer />
    </div>
  );
}
