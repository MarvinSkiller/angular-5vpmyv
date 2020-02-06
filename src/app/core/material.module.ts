import { NgModule } from '@angular/core';

import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule
} from '@angular/material';

const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
