import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable()
export class GetDetailsService {

  constructor(private http: HttpClient) { }
  getDetails(){
    return this.http.get('https://api.github.com/users/hadley/orgs');
  }

}