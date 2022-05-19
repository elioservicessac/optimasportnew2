import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';
import { JsonService } from './../../json.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})

export class AccountPage implements AfterViewInit {
  username: string;

  constructor(
    public json:JsonService,
    public alertCtrl: AlertController,
    public router: Router,
  ) { }

  ngAfterViewInit() {
    // this.getUsername();
  }

  updatePicture() {
    console.log('Clicked to update picture');
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  async changeUsername() {
    const alert = await this.alertCtrl.create({
      header: 'Change Username',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            // this.userData.setUsername(data.username);
            // this.getUsername();
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'username',
          value: this.username,
          placeholder: 'username'
        }
      ]
    });
    await alert.present();
  }



  changePassword() {
    console.log('Clicked to change password');
  }

  logout() {
    // this.userData.logout();
    this.router.navigateByUrl('/login');
  }

  support() {
    this.router.navigateByUrl('/support');
  }
}