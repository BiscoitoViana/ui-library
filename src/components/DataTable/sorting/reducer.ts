import { SortingReducerAction, SortingReducerState } from "./types";

function sortingReducer(
  state: SortingReducerState,
  action: SortingReducerAction
): SortingReducerState {
  switch(action.type){
    case "SORT":
      if(state.column === action.payload) {
        return { column: state.column, direction: "descending" }
      }

      return { column: action.payload, direction: "ascending" }
    case "RESET":
      return { column: null, direction: "ascending" }
  }
}

export { sortingReducer }