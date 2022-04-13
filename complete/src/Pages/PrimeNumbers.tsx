import { useState, useTransition } from "react";
import { CheckNumber } from "../components/CheckNumber";
import PrimeRange from "../components/PrimeRange";

const defaultValue = 250;
const PrimeNumbers = () => {
  const [maxPrime, setMaxPrime] = useState(defaultValue);
  const [pending, startTransition] = useTransition();
  const values = new Array(maxPrime).fill(null);
  return (
    <div className="row">
      <h2 className="text-center mt-5">Prime Numbers</h2>
      <PrimeRange
        defaultValue={defaultValue}
        onChange={(value) => startTransition(() => setMaxPrime(value))}
      />
      <div className="row row-cols-auto g-2">
        {values
          .filter((_, index) => index < 10_000)
          .map((_, index) => {
            return <CheckNumber key={index} value={maxPrime - index} isPending={pending} />;
          })}
      </div>
    </div>
  );
};

export default PrimeNumbers;
