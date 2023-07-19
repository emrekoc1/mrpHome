import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MrpComponent } from './mrp/mrp.component';
import { SiparisComponent } from './siparis/siparis.component';
import { MakinaComponent } from './makina/makina.component';
import { ProjeGoruntuComponent } from './proje-goruntu/proje-goruntu.component';

const routes: Routes = [
  { path: 'mrp', component: MrpComponent },
  { path: 'siparis', component: SiparisComponent },
  { path: 'makina', component: MakinaComponent },
  { path: 'projeksiyon', component: ProjeGoruntuComponent },
  { path: '', redirectTo: '/mrp', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
