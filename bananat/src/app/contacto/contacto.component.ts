import { Component, OnInit } from '@angular/core';
import {Contacto} from "./contacto"
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
    contacto:Contacto;
    submitted = false;
    data:any;
    url:string;
    constructor(private http: HttpClient) { 
        this.url="http://localhost:3000/api/";
        this.contacto=new Contacto("","","",new Date());
    }
    
  ngOnInit() {
      
  }
  onSubmit() {
      this.submitted = true;
    this.contacto.fecha= new Date();
    console.log(this.contacto);
      
    var promesa=this.http.post(this.url,this.contacto);
    promesa.subscribe(
            data => this.data = data
        );
  }
}
