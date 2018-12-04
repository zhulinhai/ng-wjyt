import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CaseComponent } from './case.component';
import { VideoComponent } from './video/video.component';
import { H5Component } from './h5/h5.component';
import { VirtualComponent } from './virtual/virtual.component';
import { CaseListComponent } from './components';
import { UiComponent } from './ui/ui.component';

const routes: Routes = [
  {
    path: 'case',
    component: CaseComponent,
    children: [
      {
        path: 'h5',
        component: H5Component
      },
      {
        path: 'video',
        component: VideoComponent
      },
      {
        path: 'virtual',
        component: VirtualComponent
      },
      {
        path: 'ui',
        component: UiComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule, CaseListComponent],
  declarations: [
    CaseComponent,
    VideoComponent,
    H5Component,
    VirtualComponent,
    UiComponent,
    CaseListComponent
  ]
})
export class CaseRoutingModule { }
