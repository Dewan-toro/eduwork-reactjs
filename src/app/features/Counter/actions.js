import * as counter from "./constants";

export const increment = (value) => {
  return {
    type: counter.INC,
    value,
  };
};

export const decrement = (value) => {
  return {
    type: counter.DEC,
    value,
  };
};

export const decrementWithCheckingActions = (value) => {
  return (dispatch, getState) => {
    if (getState().counter.count > 0) {
      dispatch(decrement(value));
    }
  };
};
