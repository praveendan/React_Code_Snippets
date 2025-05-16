/*
useReducer can help cut down on the code if many event handlers modify state in a similar way.
This is not entirely a state management thing
Next, useState and useReducer are both methods of storing and updating state inside of a given React component. 
useState is a "setter"-based form, where you directly pass in the entire new value 
(or optionally pass in a callback function that returns the entire new value). u
seReducer is an "event"-based form, where you "dispatch an action" (aka "trigger an event"), 
and the update logic has been written as a separate "reducer" function that takes the existing 
state + the action and determine the new state.

Both useState and useReducer store their data on a per-component-instance basis. 
From there, you can also pass values down to child components via React's two mechanisms for passing 
data: directly as props, or indirectly via context. This means that state in a parent component 
can be accessed in any child component inside that, it's just a question of how it's being passed down
*/

export const initialState = {
  selectedId: 0,
  message: "Hello",
};

export function messengerReducer(state, action) {
  switch (action.type) {
    case "changed_selection": {
      return {
        ...state,
        selectedId: action.contactId,
        message: "",
      };
    }
    case "edited_message": {
      return {
        ...state,
        message: action.message,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
