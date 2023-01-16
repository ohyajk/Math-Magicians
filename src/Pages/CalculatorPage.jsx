import Calculator from '../components/calculator';

const CalculatorPage = () => (
  <div className="grid grid-cols-3 ">
    <h2 className="flex justify-center text-4xl py-10">Lets Do Some Math...</h2>
    <Calculator />
  </div>
);

export default CalculatorPage;
