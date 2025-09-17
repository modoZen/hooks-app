import { useCallback, useState } from "react";
import { MyTitle } from "./ui/MyTitle";
import { MySubTitle } from "./ui/MySubTitle";

export const MemoHook = () => {
  const [title, setTitle] = useState("Hola");
  const [subTitle, setSubTitle] = useState("Mundo");

  const handleCallMyAPI = useCallback(() => {
    console.log("Llamar a mi API - ", subTitle);
  }, [subTitle]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">MemoApp</h1>

      <MyTitle title={title} />

      <MySubTitle callMyAPI={handleCallMyAPI} subtitle={subTitle} />

      <button
        onClick={() => setTitle("Hello")}
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
      >
        Cambiar título
      </button>

      <button
        onClick={() => setSubTitle("World")}
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
      >
        Cambian subtítulo
      </button>
    </div>
  );
};
