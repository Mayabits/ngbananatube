import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements {
    public location = '';
    constructor(private _router:Router){
        this.location=_router.url;
    }
}
