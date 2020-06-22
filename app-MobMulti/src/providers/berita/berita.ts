import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { EnvProvider } from '../env/env';
/*
  Generated class for the BeritaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BeritaProvider {

  constructor(public http: HttpClient,
    private env : EnvProvider) {
      console.log('Hello BeritaProvider Provider');
  }

  // untuk melakuka request berita
  getBerita(){
    return this.http.get(this.env.ALAMAT_API);
  }


}



