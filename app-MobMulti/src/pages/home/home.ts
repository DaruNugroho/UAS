import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BeritaProvider } from '../../providers/berita/berita';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  beritaBaru;
  

  constructor(public navCtrl: NavController,
    private beritaProvider: BeritaProvider){
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Halaman berita');
  }
 
  ionViewDidEnter(){
    this.beritaProvider.getBerita().subscribe((data) => {
      console.log(data);
      this.beritaBaru = data['articles'];
    })
  }

}
