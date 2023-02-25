export const AppReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR_MODE":
      return {
        ...state,
        dark: !state.dark,
      };
    default:
      return state;
  }
};
