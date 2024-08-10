import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 isOurWorkVisible:boolean=false;
 isServicesVisible:boolean=false;
 isCountriesVisible:boolean=false;
 isAboutVisible:boolean=false;
 toggleOurWork(isvisible:boolean){
  this.isOurWorkVisible=isvisible;
 }
 toggleServices(isvisible:boolean){
  this.isServicesVisible=isvisible;
 }
 toggleCountries(isvisible:boolean){
  this.isCountriesVisible=isvisible;
 }
 toggleAbout(isvisible:boolean){
  this.isAboutVisible=isvisible;
 }
}
