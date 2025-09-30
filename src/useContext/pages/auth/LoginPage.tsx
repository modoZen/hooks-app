import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserContext } from "@/useContext/context/UserContext";
import { useContext, useState, type FormEventHandler } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

export const LoginPage = () => {
  const { login } = useContext(UserContext);
  const [userId, setUserId] = useState("");

  const navigate = useNavigate();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const result = login(+userId);
    if (!result) {
      toast.error("User not found");
      return;
    }
    navigate("/profile");
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold">Iniciar Sesión</h1>
      <hr />

      <form onSubmit={handleSubmit} className="flex flex-col gap-2 my-10">
        <Input
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          type="number"
          placeholder="ID del usuario"
        />

        <Button type="submit">Login</Button>
      </form>

      <Link to="/about">
        <Button variant="ghost" className="">
          Volver a la página principal
        </Button>
      </Link>
    </div>
  );
};
