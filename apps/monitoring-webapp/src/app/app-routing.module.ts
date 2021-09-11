import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AitHomeComponent } from './pages/ait-home/ait-home.component';
import { AitExampleComponent } from './pages/ait-example/ait-example.component';

export const routes: Routes = [
  {
    path: 'home',
    component: AitHomeComponent,
  },
  {
    path: 'example',
    component: AitExampleComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '**', component: NotFoundComponent },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
