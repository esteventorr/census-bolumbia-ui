import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './constants/routes';

const routes: Routes = [
  {
    path: ROUTES.LANDING,
    loadChildren: () =>
      import('./pages/landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: ROUTES.SIGNIN,
    loadChildren: () =>
      import('./pages/signin/signin.module').then((m) => m.SigninModule),
  },
  {
    path: ROUTES.FEEDBACK,
    loadChildren: () =>
      import('./pages/feedback/feedback.module').then((m) => m.FeedbackModule),
  },
  {
    path: ROUTES.CENSUS_FORM,
    loadChildren: () =>
      import('./pages/census-form/census-form.module').then(
        (m) => m.CensusFormModule
      ),
  },
  {
    path: ROUTES.NOT_FOUND,
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
