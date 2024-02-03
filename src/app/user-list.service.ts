import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private http:HttpClient) { }

  getList(user : string){
    return this.http.get<any>(`https://api.github.com/search/users?q=${user}`)


  }
  fetchDetails(login : string){
    return this.http.get<any>(`https://api.github.com/users/${login}`)


  }
}
