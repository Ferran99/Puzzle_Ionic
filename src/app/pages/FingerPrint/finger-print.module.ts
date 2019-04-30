import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule, RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import { ComponentsModule } from 'src/app/components/components.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {FourPiecesPage} from '../four-pieces/four-pieces.page';
import {FingerprintAIO} from '@ionic-native/fingerprint-aio/ngx';
import {FingerPrint} from './finger-print';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {BaseDadesService} from '../../services/baseDadesService.service';
import {SQLite} from '@ionic-native/sqlite/ngx';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx';
import {GeolocalitzacioComponent} from '../../components/geolocalitzacio/geolocalitzacio.component';
const routes: Routes = [
    {
        path: '',
        component: FingerPrint
    }
];


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DragDropModule,
        ComponentsModule,

        RouterModule.forChild(routes),
    ],
    providers: [
        StatusBar,
        SplashScreen,

        SQLite,
        Geolocation,
        AndroidPermissions,

        FingerprintAIO

    ],
    declarations: [
        FingerPrint
    ]
})

export class FingerPrintModule { }
