const ADD_ITEM = "ADD_ITEM";
const EDIT_ITEM = "EDIT_ITEM";
const DELETE_ITEM = "DELETE_ITEM";

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case EDIT_ITEM:
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    case DELETE_ITEM:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}

export const addItem = (item) => ({ type: ADD_ITEM, payload: item });
export const editItem = (item) => ({ type: EDIT_ITEM, payload: item });
export const deleteItem = (id) => ({ type: DELETE_ITEM, payload: id });

export const asyncAddItem = (item) => async (dispatch) => {
  const result = await getItem(item);
  dispatch(addItem(result));
};

const getItem = (item) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(item), 250);
  });
};
