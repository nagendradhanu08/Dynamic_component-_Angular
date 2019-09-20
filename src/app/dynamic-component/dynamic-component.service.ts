import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
// ------------------------------------------------------------- //
import { UserInfo, City, Office, Customer } from './dynamic.model';

@Injectable()
export class DynamicComponentService {

  /** store base url */
  private baseUrl: string;
  constructor(
    private http: HttpClient,
  ) {
    this.baseUrl = 'http://localhost:3000';

  }
  /**
   * Gets details
   * @param name 
   * @returns details 
   */
  public getCityList(name: string): Observable<City[]> {
    let url: string = this.baseUrl + `/${name}`;
    return this.http.get<City[]>(url);
  }
  /**
   * Gets office list
   * @param name 
   * @returns office list 
   */
  public getOfficeList(name: string): Observable<Office[]> {
    let url: string = this.baseUrl + `/${name}`;
    return this.http.get<Office[]>(url);
  }

  /** This will save the record into database */
  public addCustomer(customer: Customer): Observable<Customer> {
    const url: string = this.baseUrl + '/customer';
    return this.http.post<Customer>(url, customer);
  }

  /**
   * Gets customer
   * @returns customer
   */
  public getCustomer(): Observable<Customer[]> {
    const url: string = this.baseUrl + '/customer';
    return this.http.get<Customer[]>(url);
  }

}
