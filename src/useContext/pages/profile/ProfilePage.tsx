import { Button } from "@/components/ui/button";
import { UserContext } from "@/useContext/context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router";

export const ProfilePage = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Perfil del usuario</h1>
      <hr />

      <pre className="my-4 w-[50%] overflow-x-scroll">
        {JSON.stringify(user, null, 2)}
      </pre>

      <Button onClick={handleLogout} variant={"destructive"}>
        Salir
      </Button>
    </div>
  );
};
