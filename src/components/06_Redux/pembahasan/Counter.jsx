import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementWithCheckingActions,
  increment,
} from "../../../app/features/Counter/actions";
import { Button } from "react-bootstrap";

const Counter = () => {
  let { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        padding: "20px",
        margin: "20px",
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
      }}
    >
      <Button
        className="btn btn-primary"
        onClick={() => dispatch(decrementWithCheckingActions(1))}
        style={{ marginRight: "10px", fontSize: "30px" }}
      >
        -
      </Button>
      <span style={{ fontSize: "30px" }}>{count}</span>
      <Button
        className="btn btn-primary"
        onClick={() => dispatch(increment(1))}
        style={{ marginLeft: "10px", fontSize: "30px" }}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
