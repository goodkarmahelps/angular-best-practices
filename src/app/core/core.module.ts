import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { appRoutes } from '../routes';
import { UserRepositoryService } from './user-repository.service';
import { NavBarComponent } from './nav-bar.component';
import { AccountMenuComponent } from './account-menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [NavBarComponent, AccountMenuComponent, RouterModule ],
  declarations: [ NavBarComponent, AccountMenuComponent ],
  providers: [UserRepositoryService],
})
export class CoreModule { };
