import { unspashApi } from "./store/unspashApi";
import React from "react";

function App() {
  const [count, setCount] = React.useState(12);
  const { data, isLoading } = unspashApi.useGetRandomPhotosQuery(count);

  return (
    <div className="App">
      <select value={count} onChange={(e) => setCount(e.target.value)}>
        <option value="12">12</option>
        <option value="10">10</option>
        <option value="5">5</option>
        <option value="20">20</option>
        <option value="1">1</option>
      </select>
      <button
        onClick={() => {
          console.log(data);
        }}
      >
        1
      </button>
      {isLoading ? (
        <div className="overflov"><div className="loader"></div></div>
      ) : (
        <div className="photos">
          {data?.map((photo) => (
            <div>
              <img src={photo.urls.regular} key={photo.id} alt="unspashPhoto" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
