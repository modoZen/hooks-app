import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
// import { MemoCounter } from "./memos/MemoCounter";
// import { InstagromApp } from "./useOptimistic/InstagromApp";
// import { InstagromApp } from "./useOptimistic/InstagromApp";
// import { ClientInformation } from "./use-suspense/ClientInformation";
// import { getUser } from "./use-suspense/api/get-user.action";

import "./index.css";
import { ProfessionalApp } from "./useContext/ProfessionalApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster />
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}
    {/* <Suspense
      fallback={
        <div className="bg-gradient flex flex-col">
          <h1 className="text-2xl">Cargando...</h1>
        </div>
      }
    >
      <ClientInformation getUser={getUser(1000)} />
    </Suspense> */}
    <ProfessionalApp />
  </StrictMode>
);
