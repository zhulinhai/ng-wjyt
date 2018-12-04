import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent, FooterComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    FooterComponent,
    PostListComponent,
  ],
  declarations: [
    FooterComponent,
    PostListComponent,
  ]
})
export class SharedModule { }
