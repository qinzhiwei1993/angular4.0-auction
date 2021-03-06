import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'product/:productTitle', component: ProductDetailComponent}
];


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
  providers:[]
})

export class MyRouterModule{

}
