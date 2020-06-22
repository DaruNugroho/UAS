import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EnvProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EnvProvider {

  ALAMAT_API = 'http://newsapi.org/v2/top-headlines?country=id&apiKey=f360b75d053b436eb36ebec0bde08c2a'
  constructor(public http: HttpClient) {
    
  }

}
