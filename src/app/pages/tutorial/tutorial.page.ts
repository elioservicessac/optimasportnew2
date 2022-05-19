import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})


export class TutorialPage implements OnInit {
  mostrardedos:boolean=true;
  // slideOpts = {
  //   initialSlide: 1,
  //   speed: 400,
  //   slideShadows: true
  // };

  slideOpts = {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  
  constructor(
    private router: Router,
    private menu: MenuController,

  ) 
  {
  }

  ionViewWillEnter(){
    this.menu.enable(true);
  }


    async ngOnInit() {
  }

  desactivardedos(){
    this.mostrardedos=false;
  }

  activardedos(){
    this.mostrardedos=true;
  }

  ir(){
    this.router.navigateByUrl('/tablinks/schedule');

  }

  

}