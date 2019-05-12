import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class UserManagementService {

  constructor(private http: HttpClient) {}

  static URLGenerator(mainUrl, page , orderBy: {name , direction} , pageLength): string {
    return `${mainUrl}?$count=true&$filter=(IsActive eq true)${orderBy.name ? '&$orderby=' + orderBy.name : ''}${orderBy.direction === 'desc' ? ' desc' : ''}${page !== 1 ? '&$skip=' + pageLength * (page - 1) : ''}&$top=${pageLength}`;
  }

  async getUsers(mainUrl, page , orderBy , pageLength) {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');
    const apiEndPoint = UserManagementService.URLGenerator(mainUrl, page , orderBy , pageLength);
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Authorization', token);
    return await this.http.get(apiEndPoint, {headers}).toPromise();
  }
}
