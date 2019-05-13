import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: "root"
}) //  and (contains(tolower(Name),''))
export class UserManagementService {

  constructor(private http: HttpClient) {}

  static URLGenerator(mainUrl, page , orderBy: {name , direction} , pageLength , pageFilter): string {
    return `${mainUrl}?$count=true&$filter=((IsActive eq true)${pageFilter ? " and (contains(tolower(Name),'" + pageFilter + "'))" : ''})${orderBy.name ? '&$orderby=' + orderBy.name : ''}${orderBy.direction === 'desc' ? ' desc' : ''}${page !== 1 ? '&$skip=' + pageLength * (page - 1) : ''}&$top=${pageLength} `;
  }

  async getUsers(mainUrl, page , orderBy , pageLength , pageFilter) {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');

    const apiEndPoint = UserManagementService.URLGenerator(mainUrl, page , orderBy , pageLength , pageFilter);
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Authorization', token);
    return await this.http.get(apiEndPoint, {headers}).toPromise();
  }
}


