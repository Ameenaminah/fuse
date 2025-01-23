import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout, NotFound } from "./components";
import { AboutPage, HomePage, BootCampPage, BlogPage, BlogDetailPage } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="bootcamps">
          <Route index element={<BootCampPage />} />
          {/* <Route path=":id" element={<BootCampDetailPage />} /> */}
        </Route>
        <Route path="blog">
          <Route index element={<BlogPage />} />
          <Route path=":id" element={<BlogDetailPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;
