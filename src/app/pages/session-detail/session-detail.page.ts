import { Component } from '@angular/core';
import { NavParams, ModalController, MenuController, Platform, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.page.html',
  styleUrls: ['./session-detail.page.scss'],
})

export class SessionDetailPage {
  session: any;
  isFavorite = false;
  defaultHref = '';
  traidopormodalparams: any;
  linkid: any;
  linkcompleto: string;
  youtubeSrc: any;
  link1: any;
  link2: any;
  link3: any;



  constructor(
    public sanitizer: DomSanitizer,
    navParams: NavParams,
    public modalController: ModalController,
    private menu: MenuController,
    private route: ActivatedRoute
  )
  
   { 

    this.traidopormodalparams=navParams.get('dataparaelmodal');
    console.log('recibido por modalparams', this.traidopormodalparams);
    this.linkid=this.traidopormodalparams.snippet.resourceId.videoId;
    console.log('this.linkid:',this.linkid);
    this.youtubeSrc = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+this.linkid);        
   }

  ionViewWillEnter() {

}

dismiss() {
  // using the injected ModalController this page
  // can "dismiss" itself and optionally pass back data
  this.modalController.dismiss({
    'dismissed': true
  });
}


}
