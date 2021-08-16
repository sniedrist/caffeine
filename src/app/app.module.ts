import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BeverageListComponent } from './beverage-list/beverage-list.component';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: BeverageListComponent },
    ]),
    MatInputModule,
    MatTableModule,
    MatSortModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    BeverageListComponent,

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
