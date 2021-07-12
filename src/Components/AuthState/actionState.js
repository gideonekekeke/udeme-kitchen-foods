import { actionType } from "./actionType";

export const addTocart = (itemID) => {
  return {
    type: actionType.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromcart = (itemID) => {
  return {
    type: actionType.REMOVE_FOOD,
    payload: {
      id: itemID,
    },
  };
};

export const viewSingle = (itemID) => {
  return {
    type: actionType.VIEW_SINGLE_FOOD,
    payload: itemID,
  };
};

export const addFooditems = (itemID) => {
  return {
    type: actionType.ADD_ALL_FOOD,
    payload: itemID,
  };
};

export const adjustQty = (itemID, value) => {
  return {
    type: actionType.ADJUST_FOOD_QTY,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};
