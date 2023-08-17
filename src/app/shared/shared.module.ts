import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudService } from './services/crud.service';
import { NgZorroModule } from '../ng-zorro/ng-zorro.module';
import { UserDrawerComponent } from './components/drawers/user-drawer/user-drawer.component';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserDrawerComponent],
  imports: [CommonModule, NgZorroModule, FormsModule, ReactiveFormsModule],
  exports: [NgZorroModule],
  providers: [NzDrawerService, CrudService],
})
export class SharedModule {}
