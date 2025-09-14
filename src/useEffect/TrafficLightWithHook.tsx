import { useTrafficLigth, type TrafficLightColors } from "./useTrafficLigth";

export const TrafficLightWithHook = () => {
  const { countdown, light, colors } = useTrafficLigth();

  const pertentage = (countdown / 5) * 100;

  const getClassColor = (color: TrafficLightColors) =>
    light === color ? colors[light] : "bg-gray-500";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-white text-2xl">Sémaforo con useEffect</h1>
        <h2 className="text-white text-xl">Countdown: {countdown}</h2>

        <div className="w-64 bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${pertentage}%` }}
          ></div>
        </div>
        <div className={`w-32 h-32 ${getClassColor("red")} rounded-full`}></div>
        <div
          className={`w-32 h-32 ${getClassColor("yellow")} rounded-full`}
        ></div>
        <div
          className={`w-32 h-32 ${getClassColor("green")} rounded-full`}
        ></div>

        {/* Botón para cambiar el estado de la luz */}
        <div className="flex gap-2">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
            Rojo
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer">
            Amarillo
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer">
            Verde
          </button>
        </div>
      </div>
    </div>
  );
};
