import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule, Platform} from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ComponentsModule } from 'src/app/components/components.module';
import {FingerprintAIO} from "@ionic-native/fingerprint-aio/ngx";
import { PinCheck } from '@ionic-native/pin-check/ngx';
import {PinDialog} from '@ionic-native/pin-dialog/ngx';
import { KeychainTouchId } from '@ionic-native/keychain-touch-id/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DragDropModule,
    ComponentsModule,



    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  providers : [
    FingerprintAIO,
    PinCheck,
    Platform,
    PinDialog,
    KeychainTouchId
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
