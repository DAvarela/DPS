import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule}from '@angular/platform-browser'
@Component({
selector: 'app-registro',
templateUrl: './registro.component.html',
styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
registro=[];
cliente:any;
nombre:string;
dui:string;
nmascota:string;
Tratamiento:string;
Medicamento:string;
costo:number;
visita:number;
contador:number;
constructor() { }
ngOnInit() {
this.costo=0;
this.nombre='';
this.dui='';
this.nmascota='';
this.Tratamiento='';
this.Medicamento='';
this.costo=0;
this.visita=0;
this.contador=0;
}
ingresar(){
 
this.cliente={"nombre":this.nombre,"dui":this.dui,"nmascota":this.nmascota,"Medicamento":this.Medicamento,"costo":this.costo}
this.registro.push(this.cliente);
this.contador++;
}
visitas(){
    



}

}