import  { useState } from 'react';
import { CheckNumber } from '../components/CheckNumber';
import  PrimeRange  from '../components/PrimeNumber';

const defaultValue = 250;


const PrimeNumbers = () => {
  const [maxPrime, setMaxPrime] = useState(defaultValue);
  const values = new Array(maxPrime).fill(null);

  return (
    <div className="row">
      <h2 className="text-center mt-5">Prime Numbers</h2>
      <PrimeRange
        defaultValue={defaultValue}
        onChange={(value) => setMaxPrime(value)}
      />
      <div className="row row-cols-auto g-2">
        {values
          .filter((_, index) => index < 10_000)
          .map((_, index) => {
            return <CheckNumber key={index} value={maxPrime - index} />;
          })}
      </div>
    </div>
  );

}

export default PrimeNumbers


