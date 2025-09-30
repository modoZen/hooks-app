import { Button } from "@/components/ui/button";
import { UserContext } from "@/useContext/context/UserContext";
import { useContext } from "react";

export const ProfilePage = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Perfil del usuario</h1>
      <hr />

      <pre className="my-4">{JSON.stringify(user, null, 2)}</pre>

      <Button variant={"destructive"}>Salir</Button>
    </div>
  );
};
