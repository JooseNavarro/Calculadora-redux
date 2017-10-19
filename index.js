const Redux = require("redux");

// Reducer function, has two arguments.
const _reducer = (state = 0, action) => {
  switch (action.type) {
    case "suma":
      return ` ${action.payload} ${parseInt(process.argv[3]) +
        parseInt(process.argv[4])} `;
    case "resta":
      return ` ${action.payload} ${parseInt(process.argv[3]) -
        parseInt(process.argv[4])}`;
    case "multiplicacion":
      return ` ${action.payload} ${parseInt(process.argv[3]) *
        parseInt(process.argv[4])}`;
    case "division":
      return ` ${action.payload} ${parseInt(process.argv[3]) /
        parseInt(process.argv[4])}`;
    default:
      return state;
  }
};

//Create store
const store = Redux.createStore(_reducer);

//Subscribe
store.subscribe(() => console.log(` Subcribe: ${store.getState()} `));

// Object action
const action = {
  type: process.argv[2],
  payload: `Total : `
};

//insert our action into the function
store.dispatch(action);

//Returns the status of our application
console.log(store.getState());
