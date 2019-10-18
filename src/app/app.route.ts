import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LogoutComponent } from './logout/logout.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { AuthguardService } from './authguard.service';


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
        canActivate:[AuthguardService]
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
      },
      {
        path: "product-detail/:id",
        component: ProductDetailsComponent
      },
      {
        path:"logout",
        component:LogoutComponent,
        canActivate:[AuthguardService]
      },
      {
        path:"checkOut",
        component:OrderhistoryComponent,
        canActivate:[AuthguardService]
      },
      {
        path:"profile",
        component:UserProfileComponent,
        canActivate:[AuthguardService]
      },
      {
        path:"addProduct",
        component:AddproductComponent,
        canActivate:[AuthguardService]
      },
      {
        path:"editProductC/:id",
        component:EditproductComponent,
        canActivate:[AuthguardService]
      }

]