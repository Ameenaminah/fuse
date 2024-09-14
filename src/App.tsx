import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout, NotFound } from "./components";
import { AboutPage, HomePage, BootCampPage } from "./pages";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="bootcamps" element={<BootCampPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;
