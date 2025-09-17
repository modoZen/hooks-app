import { useCounter } from "@/assets/hooks/useCounter";
import { useMemo } from "react";

const heavyStuff = (iterationNumber = 100) => {
  console.time("Heavy stuff started");

  for (let index = 0; index < iterationNumber; index++) {
    console.log("Ahi vamos...");
  }

  console.timeEnd("Heavy stuff started");

  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoCounter = () => {
  const { counter, increment } = useCounter(40_000);

  const myHeavyStuff = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <div className="bg-gradiend flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Memo - useMemo - {myHeavyStuff}</h1>
      <hr />

      <h4>Counter:{counter}</h4>
      <h4>Counter:{counter}</h4>

      <button
        className="bg-blue-500 text-white rounded-md py-2 cursor-pointer"
        onClick={increment}
      >
        +1
      </button>
    </div>
  );
};
