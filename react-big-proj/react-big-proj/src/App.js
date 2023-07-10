import React, { useEffect } from "react";
import Modal from "./components/ui/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { feachPhotos } from "./store/reducers/actionCreators";
import RandomPhotos from "./components/RandomPhotos/RandomPhotos";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  /* const [modal, setModal] = React.useState(false); */
  const { photos } = useSelector((state) => state.unspashSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(feachPhotos());
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);

  return (
    <div className="App container">
      <button onClick={() => console.log(photos)}></button>

      <BrowserRouter>
        <Route path="/" exact></Route>
        <Route path="/random-photo" exact>
          <RandomPhotos></RandomPhotos>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
