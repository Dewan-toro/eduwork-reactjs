import React from "react";
import Counter from "./pembahasan/Counter";
import { Provider } from "react-redux";
import store from "../../app/store";

export default function Redux() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
