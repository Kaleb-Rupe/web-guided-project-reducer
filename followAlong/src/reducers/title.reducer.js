import {
  SET_NEW_TEXT_TITLE,
  SET_TITLE,
  TOGGLE_EDITING,
} from "../actions/title.actions";

export const initialState = {
  title: "Hello earthings!",
  editing: false,
  newTitleText: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        title: action.payload,
        newTitleText: "",
        editing: false,
      };
    case TOGGLE_EDITING:
      return { ...state, editing: !state.editing };
    case SET_NEW_TEXT_TITLE:
      return { ...state, newTitleText: action.payload };
    default:
      return state;
  }
};

const initialState = {
  store: "groceries",
  gym: "back day",
  editing: false,
  newStore: "",
  newGym: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        store: action.payload,
        gym: action.payload,
        editing: false,
        newStore: "",
        newGym: "",
      };
    case "DELETE":
      return {
        initialState,
      };
    default:
      return state;
  }
};
