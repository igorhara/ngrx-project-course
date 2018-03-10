import {Component, OnInit} from "@angular/core";
import {DataStorageService} from "../../shared/data-storage.service";
import {Store} from "@ngrx/store";
import * as fromApp from "../../store/app.reducers";
import {Observable} from "rxjs/Observable";
import * as fromAuth from "../../auth/store/auth.reducers";
import * as AuthActions from "../../auth/store/auth.actions";
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
  constructor(private dataStorageService: DataStorageService,
              private store:Store<fromApp.AppState>) {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }
}
