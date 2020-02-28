import { NgModule } from '@angular/core';

import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatDividerModule,
  MatListModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRippleModule
} from '@angular/material';

const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatDividerModule,
  MatListModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRippleModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
