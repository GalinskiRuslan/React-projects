import React from "react";
import "./App.css";
import { Slider } from "../Slider/Slider";
import { useFetch } from "../../Hooks/useFetch";

function App() {
  const { isLoading, error, data } = useFetch({
    url: "https://jsonplaceholder.typicode.com/photos",
  });
  console.log(isLoading, error, data);

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="container">
        <Slider
          items={[
            <img
              style={{ width: "100%" }}
              src="https://images.unsplash.com/photo-1574539602047-548bf9557352?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />,
            <img
              style={{ width: "100%" }}
              src="https://images.unsplash.com/photo-1611145434336-2324aa4079cd?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />,
            <img
              style={{ width: "100%" }}
              src="https://images.unsplash.com/photo-1605248259586-a64eb06b6970?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />,
            <img
              style={{ width: "100%" }}
              src="https://images.unsplash.com/photo-1622476591347-fc28c1a9d64a?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />,
            <img
              style={{ width: "100%" }}
              src="https://images.unsplash.com/photo-1566348152288-4795b2d37ebc?auto=format&fit=crop&q=80&w=1972&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />,
            <img
              style={{ width: "100%" }}
              src="https://plus.unsplash.com/premium_photo-1661337105814-ece9cf691363?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />,
            <img
              style={{ width: "100%" }}
              src="https://images.unsplash.com/photo-1631157892458-7cc24bc95e68?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />,
          ]}
        ></Slider>
      </div>
    </div>
  );
}

export default App;
