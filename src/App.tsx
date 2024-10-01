import { RouterProvider } from "react-router-dom";
import { MainRoutes } from "./Routes/routes";

const App = () => {
  return <RouterProvider router={MainRoutes} />;
};

export default App;
