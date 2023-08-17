import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalRoutingModule } from './internal-routing.module';
import { InternalComponent } from './internal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [InternalComponent],
  imports: [CommonModule, InternalRoutingModule, SharedModule],
})
export class InternalModule {}
