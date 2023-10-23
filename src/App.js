import logo from "./logo.svg";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/pages/home";
import AboutUs from "./components/pages/about-us";
import ThemeCustom from "./components/theme";
import MovieDetail from "./components/pages/detail";
import News from "./components/pages/news";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<ThemeCustom />}>
      <Route index element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/about-us" element={<AboutUs />}></Route>
      <Route path="/news" element={<News />}></Route>
      <Route path="/detail/:id" element={<MovieDetail />}></Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
