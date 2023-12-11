import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header.tsx";
import Chart from "./components/Chart.tsx";
import List from "./components/List.tsx";
import ItemDetail from "./components/ItemDetail.tsx";
import Loader from "./components/Loader.tsx";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store.ts";
import { getItems } from "./store/slices/itemSlice.ts";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: RootState) => state.itemSlice.loading);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div className="App">
      {loading && <Loader />}
      <Header />
      <div id="content-container">
        <div id="left-content-container">
          <ItemDetail />
        </div>
        <div id="right-content-container">
          <Chart />
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
