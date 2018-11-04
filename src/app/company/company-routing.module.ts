import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponyComponent } from './compony.component';
import { IntroComponent } from './intro/intro.component';
import { MaintanceComponent } from './maintance/maintance.component';
import { DeviceComponent } from './device/device.component';

const routes: Routes = [
  {
    path: 'company',
    component: ComponyComponent,
    children: [
      { path: 'intro', component: IntroComponent },
      { path: 'maintance', component: MaintanceComponent },
      { path: 'device', component: DeviceComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: [
    IntroComponent,
    MaintanceComponent,
    DeviceComponent,
    ComponyComponent
  ]
})
export class CompanyRoutingModule { }
