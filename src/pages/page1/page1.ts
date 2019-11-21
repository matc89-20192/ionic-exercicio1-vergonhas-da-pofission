import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  public username = "Mundo"
  public new_username = "";

  constructor(public navCtrl: NavController) {

  }

  greet() {
    if (this.new_username == "Eduardo") this.username = "Philipe";
    else if (this.new_username == "Manoel") this.username = "Magnata";
    else this.username = this.new_username ? this.new_username : this.username;
  }

}
