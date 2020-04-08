import { ADD_ITEM, REMOVE_ITEM, CHECKOUT } from "../actions/actionTypes";

const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const itemToBeAdded = action.payload;
      /*we changed the code to see if the item is already in the list, then just increase it*/
      let items = state.items;
      const itemToBeUpdated = items.find(
        (stateItem) =>
          stateItem.drink === itemToBeAdded.drink &&
          stateItem.option === itemToBeAdded.option
      );
      if (itemToBeUpdated) {
        itemToBeUpdated.quantity += itemToBeAdded.quantity;
      } else {
        // {...itemToBeAdded} to fix the doubling problem
        items = [...items, { ...itemToBeAdded }];
      }
      return {
        ...state,
        //here we add the itemToBeAdded to the initial items[] we have
        items: [...items],
      };

    case REMOVE_ITEM:
      const itemToBeRemoved = action.payload;
      return {
        ...state,
        items: state.items.filter((stateItem) => stateItem !== itemToBeRemoved), //here we filterd all items that don't match the on we want to be removed
        // so the final items[] will include every item but not the one we removd(filteredout)
      };

    case CHECKOUT:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export default reducer;
