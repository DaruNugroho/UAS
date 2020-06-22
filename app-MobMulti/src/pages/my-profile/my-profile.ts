import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { profile } from '../model/profil/profil-model';

/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {

  private profilku: profile;
  private nama : string;
  private jurusan : string;
  private quote : string;
  private semester: string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.profilku = new profile;
    this.profilku.nama = "Daru Nugroho";
    this.profilku.jurusan = "jurusan";
    this.profilku.quote = "warga indonesia yang suka dengan dunia komputer, musik, mesin.";
    this.profilku.semester = "IV(Empat)"
  }


}
