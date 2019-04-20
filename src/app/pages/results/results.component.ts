import { Component, OnInit } from '@angular/core';
import { NavController,  } from '@ionic/angular';
import {BaseDadesService} from '../../services/baseDadesService.service';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';


@Component({
    selector: 'baseDades',
    templateUrl: './results.component.html',
    styleUrls: ['results.component.scss']
})
export class ResultsComponent {
    db: SQLiteObject = null;
    tasques: any[] = [];

    data: any = {'titol': String, 'completada': Boolean};
    constructor(
        public navCtrl: NavController,
                private sqlite: SQLite,
               ) { }

    saveData() {
        this.data.titol = 'Ferran';
        this.data.completada = false;
        this.tasques.push(this.data);
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then((db: SQLiteObject) => {
            db.executeSql('INSERT INTO tasques VALUES(?,?)', [this.data.titol, this.data.completada])
                .then(res => {
                    console.log(res);

                })
                .catch(e => {
                    console.log(e);

                });
        }).catch(e => {
            console.log(e);

        });
    }




}

