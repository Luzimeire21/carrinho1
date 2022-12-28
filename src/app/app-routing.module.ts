
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './carrinho/CarrinhoComponent';

const routes: Routes = [

  {
    _path: string,
    get path_2() {
      return this._path;
    },
    set path_2(value) {
      this._path = value;
    },
    get path_1() {
      return this.path;
    },
    set path_1(value) {
      this.path = value;
    },
set path(value: string | undefined) {
      this.path = value;
    },
 component: CarrinhoComponent, canActivate:  [],
    children: [

    ],
  },

  {
    path: 'carrinho',
    component: CarrinhoComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
