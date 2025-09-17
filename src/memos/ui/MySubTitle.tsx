import { memo } from "react";

interface Props {
  subtitle: string;
  callMyAPI: () => void;
}

export const MySubTitle = memo(({ subtitle, callMyAPI }: Props) => {
  console.log("MySubTitle re-render");

  return (
    <>
      <h2 className="text-2xl font-bold">{subtitle}</h2>

      <button onClick={callMyAPI} className="bg-indigo-500 rounded-md p-2">
        Llamar a función
      </button>
    </>
  );
});
