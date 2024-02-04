import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './selectpage.component.html',
  styleUrls: ['./selectpage.component.css']
})
export class SelectpageComponent {

  constructor(private router: Router) {}

  buton1() {

    this.router.navigate(['/main']); 


  }
  
  buton2() {

  }
  buton3() {
    this.router.navigate(['/change']); 
  }
  buton4() {
    this.router.navigate(['/changeall']); 



  }
}