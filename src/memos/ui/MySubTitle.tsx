import { memo } from "react";

interface Props {
  subtitle: string;
}

export const MySubTitle = memo(({ subtitle }: Props) => {
  console.log("MySubTitle re-render");

  return (
    <>
      <h2 className="text-2xl font-bold">{subtitle}</h2>

      <button className="bg-indigo-500 rounded-md p-2">Llamar a función</button>
    </>
  );
});
