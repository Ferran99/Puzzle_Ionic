import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-finger-print',
    templateUrl: './figer-print.html',

})

export class FingerPrint implements OnInit {
    constructor(private faio: FingerprintAIO) { }

    ngOnInit(): void {
    }
fingerPrint() {
    this.faio.show({
        clientId: 'Fingerprint-Demo',
        clientSecret: 'password', // Only necessary for Android
        disableBackup: true,  // Only for Android(optional)
        localizedFallbackTitle: 'Use Pin', // Only for iOS
        localizedReason: 'Please authenticate' // Only for iOS
    })
        .then((result: any) => console.log(result))
        .catch((error: any) => console.log(error));
}



}
