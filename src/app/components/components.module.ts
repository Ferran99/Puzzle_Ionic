import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { IonicModule } from '@ionic/angular';

import { SelectComponent } from './selectImg/selectImg.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';

@NgModule({
  declarations: [
    SelectComponent,
    FooterBarComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    SelectComponent,
    FooterBarComponent
  ],
  providers:[
    Camera,
    AndroidPermissions
  ],
})
export class ComponentsModule { }
