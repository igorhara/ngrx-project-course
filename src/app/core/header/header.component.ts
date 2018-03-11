import {Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import * as fromApp from "../../store/app.reducers";
import {Observable} from "rxjs/Observable";
import * as fromAuth from "../../auth/store/auth.reducers";
import * as AuthActions from "../../auth/store/auth.actions";
import * as RecipeActions from "../../recipes/store/recipe.actions";
// import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  authState:Observable<fromAuth.State>;


  ngOnInit(): void {

    this.authState = this.store.select('auth');
  }
  constructor(private store:Store<fromApp.AppState>) {
  }

  onSaveData() {
    this.store.dispatch(new RecipeActions.StoreRecipes());
  }

  onFetchData() {
    this.store.dispatch(new RecipeActions.FetchRecipes());
    //this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }
}
