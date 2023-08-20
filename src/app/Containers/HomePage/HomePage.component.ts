import { Component } from '@angular/core';
import membersInterface from 'src/app/Constants/HomePageInterface';

@Component({
  selector: 'home-component',
  templateUrl: './HomePage.component.html',
  styleUrls: ['./HomePage.component.css'],
})
export class HomeComponent {
  members: membersInterface[] = [
    {
      name: 'Fahri Izzuddin Zulkarnaen',
      npm: '19081010046',
    },
    {
      name: 'Ishak Febrianto',
      npm: '19081010072',
    },
    {
      name: 'Nabil Habibi',
      npm: '19081010184',
    },
    {
      name: 'Deva Dwi Satrio',
      npm: '19081010185',
    },
  ];

  isActive: boolean = true;

  Nama: string = 'Fahri Izzuddin Zulkarnaen';

  toggleIsActive() {
    this.isActive = !this.isActive;
  }

  onFormSubmit(formValue: any) {
    console.log(formValue);
  }
}
