import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


export const MAIN_ROUTES: Routes = [
      {
        path: "",
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: "home",
        component: HomePageComponent,
      },
      {
        path: "cart",
        component: UserCartComponent,
      },
      {
        path: "login",
        component: LoginSignupComponent
      },
      {
        path: "create",
        component: CreateUserComponent
      },
      {
        path : "prodList/:category",
        component: ProductListComponent
      }
]