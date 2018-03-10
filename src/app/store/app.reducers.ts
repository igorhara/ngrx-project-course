import * as ShoppingList from "../shopping-list/store/shopping-list.reducers";
import * as fromAuth from "../auth/store/auth.reducers";
import {ActionReducerMap} from "@ngrx/store";

export interface AppState{
  shoppingList:ShoppingList.State,
  auth: fromAuth.State
}


export const reducers: ActionReducerMap<AppState>={
  shoppingList:ShoppingList.shoppingListReducer,
  auth:fromAuth.authReducer
}
