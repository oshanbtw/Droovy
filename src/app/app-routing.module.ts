import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [

  {path: 'products', component: ProductComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'products/category/:CatID', component: ProductComponent},
  {path: 'product-add', component: AddProductComponent, canActivate:[LoginGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'app-product-details/:productId', component: ProductDetailsComponent},
  {path: 'app-about-us', component: AboutUsComponent},
  {path: 'app-sign-in', component: SignInComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
