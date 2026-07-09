import { Outlet } from "react-router-dom";

export const AdmiLayout = () => {
  return (
   <>
   <p>Perfil del Administrador </p>
      <Outlet />
</>
  );
};