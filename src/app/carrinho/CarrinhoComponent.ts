import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {



  cartDetails = '';
  auth: any;

  ngOnInit(): void {
    this.CartDetails();
    this.loadCart();
  }

  getCartDetails: any = [];
  CartDetails() {
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
      console.log(this.getCartDetails);

    }
  }

  incQty(icon: any, qty: any) {
    for (let i = 0; i < this.getCartDetails.length; i++) {
      if (this.getCartDetails[i].icon === icon) {
        if (qty != 5)
          this.getCartDetails[i].qty = parseInt(qty) + 1;
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
    this.loadCart();
  }

  decQty(icon: any, qty: any) {
    for (let i = 0; i < this.getCartDetails.length; i++) {
      if (this.getCartDetails[i].icon === icon) {
        if (qty != 1)
          this.getCartDetails[i].qty = parseInt(qty) - 1;
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
    this.loadCart();
  }

  total: number = 0;
  loadCart() {

    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
      this.total = this.getCartDetails.reduce(function (acc: number, val: { price: number; qty: number; }) {
        return acc + (val.price * val.qty);

      }, 0);
    }

  }

  removeall() {
    localStorage.removeItem('localCart');
    this.getCartDetails = [];
    this.total = 0;
    this.cartNumber = 0;
    this.auth.cartSubject.next(this.cartNumber);

  }

  singledelete(getCartDetail: any) {
    console.log(getCartDetail);
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
      for (let i = 0; i < this.getCartDetails.length; i++) {
        if (this.getCartDetails[i].icon === getCartDetail) {
          this.getCartDetails.splice(i, 1);
          localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
          this.loadCart();
          this.cartNumberFunction();
        }
      }
    }
  }

  cartNumber: number = 0;
  cartNumberFunction() {
    var cartValue = JSON.parse(localStorage.getItem('localCart')!);
    this.cartNumber = cartValue.length;
    this.auth.cartSubject.next(this.cartNumber);
    console.log(this.cartNumber);

  }

}
