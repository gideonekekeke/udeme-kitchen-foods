import React, { useEffect } from "react";
import { actionType } from "./actionType";

const initialState = {
  FoodDataBase: [],
  cart: [],
  currentState: null,
};

export const FoodReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.ADD_TO_CART:
      const item = state.FoodDataBase.find((el) => el.id === payload.id);
      const inCart = state.cart.find((item) =>
        item.id === payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };

    case actionType.REMOVE_FOOD:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      };

    case actionType.ADJUST_FOOD_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload.id ? { ...item, qty: +payload.qty } : item
        ),
      };

    case actionType.ADD_ALL_FOOD:
      return {
        ...state,
        FoodDataBase: payload,
      };

    case actionType.VIEW_SINGLE_FOOD:
      return {
        ...state,
        currentState: payload,
      };

    default:
      return state;
  }
};
