import { Outlet } from "react-router-dom";
const LayaoutHome = () => {
  return (
    <div className="w-96 mx-auto mt-10">
      <Outlet />
    </div>
  );
};

export default LayaoutHome;
