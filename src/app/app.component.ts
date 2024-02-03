import { Component } from '@angular/core';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bootstrap';
  name = '';
  UserList: any 
  userDetail : any;
  userSelected = false;
}