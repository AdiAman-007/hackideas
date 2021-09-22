import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, pipe } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Subject } from 'rxjs';
const backendUrl = "http://localhost:3000/";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  user = new Subject()
  uservotes = new Subject()
  setUser(value: any) {
    this.user.next(value)
  }
  getUser() {
    return this.user.asObservable()
  }
  setVotes(value: any) {
    this.uservotes.next(value)
  }
  getVotes() {
    return this.uservotes.asObservable()
  }

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(backendUrl + "users");
  }

  getAppConfig(): Observable<any> {
    return this.http.get(backendUrl + "app-config");
  }

  getTags(): Observable<any> {
    return this.http.get(backendUrl + "tags");
  }

  getChallenges(): Observable<any> {
    return this.http.get(backendUrl + "challenges")
  }

  upvoteChallenge(payload: any): Observable<any> {
    return this.http.post(backendUrl + "upvote", payload)
  }

  addChallenge(payload: any): Observable<any> {
    return this.http.post(backendUrl + "addchallenge", payload)
  }
}
