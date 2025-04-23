import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { ThemeProvider } from "@material-tailwind/react";
import { useEffect } from "react";



const App = (): React.JSX.Element => {
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  const router = useRoutes(routes);
  return <>{router}</>;
}

export default App;
