import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layouts/layout.component';
import { authGuard } from './core/guards/auth.guard';



const routes: Routes = [
 //{ path: '', component: HomeComponent},
 // { path: '', component: VerticalComponent},
 { path: '', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), canActivate: [authGuard] },
  { path: '**', component: HomeComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
