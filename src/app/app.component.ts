import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-angular-matsy';
  price!: number;
  total: number = 0;
  listPrice: number[] = [];
  sommePayee : number = 0;
  monnaie : string [] = [];

  addPrice(){
    console.log("price ",this.price);
    this.listPrice.push(this.price);
    this.total += this.price;
    this.price = 0;
  }

  calculerMonnaieArendre(){
    let monnaieARendre = this.sommePayee - this.total;
     this.monnaie = [];

    while (monnaieARendre >= 10) {
      this.monnaie.push('10 Euros');
      monnaieARendre -= 10;
    }
    while (monnaieARendre >= 5) {
      this.monnaie.push('5 Euros');
      monnaieARendre -= 5;
    }
    while (monnaieARendre >= 1) {
      this.monnaie.push('1 Euro');
      monnaieARendre -= 1;
    }
  }

}
