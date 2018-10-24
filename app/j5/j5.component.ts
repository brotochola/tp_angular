import { Component, OnInit } from '@angular/core';
import {conexionApi} from '../conexion.service';


@Component({
  selector: 'app-j5',
  templateUrl: './j5.component.html',
  styleUrls: ['./j5.component.css']
})
export class J5Component implements OnInit {
	public textoIngresado=""
	public palabra="LaboratorioCuatro"
//	public arrPal=[];
	public arrDesc=[]
	public baseImgs="http://www.pixeloide.com/utn/img/";
	public pifies=0;

  constructor(public servicio:conexionApi) { 


  }

  ngOnInit() {
  	for(let i=0;i<this.palabra.length;i++){
  		this.arrDesc.push("-")
  	}
  }


  dale(){

  	let encontro=0
  	for(let i=0;i<this.palabra.length;i++){
  		 	if(this.textoIngresado.toLowerCase()== this.palabra[i].toLowerCase()){
  		 		this.arrDesc[i]=this.palabra[i];
  		 		encontro=1;
  		 	}
  	}


  	if(encontro==0){
  		this.pifies++;
  		if(this.pifies>=7){
  			alert("perdiste! -500pts");
  			  let promesa = this.servicio.cargarPuntuacion(-500).then((e:any)=>{
                localStorage["puntos"]=e.puntos
                console.log(e)
             });
  		}
  		document.getElementById("aho").style.backgroundImage="url("+this.baseImgs+this.pifies+".jpg)"
  	}
  	this.textoIngresado=""

  	let str=""
  	for(var i=0;i<this.arrDesc.length;i++){
  		str+=this.arrDesc[i];
  	}
  	if(str.toLowerCase()==this.palabra.toLowerCase()){
  		alert("ganaste! +500pts")
  		  let promesa = this.servicio.cargarPuntuacion(500).then((e:any)=>{
                localStorage["puntos"]=e.puntos
                console.log(e)
             });
  	}

  }
}
