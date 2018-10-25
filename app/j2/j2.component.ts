import { Component, OnInit } from '@angular/core';
import {conexionApi} from '../conexion.service';
import * as $ from 'jquery/dist/jquery.min.js';

@Component({
  selector: 'app-j2',
  templateUrl: './j2.component.html',
  styleUrls: ['./j2.component.css']
})
export class J2Component implements OnInit {

public piedra=false;
public papel=false;
public tijera=false;
public piedraC=false;
public papelC=false;
public tijeraC=false;

 constructor(public servicio:conexionApi) { }
	

  ngOnInit() {

  }

  elegir(c){


  	 var $=document.querySelectorAll;
  	let cual=Math.floor(Math.random()*3);
  	document.querySelector("#pc").classList.remove("piedra")
  	document.querySelector("#pc").classList.remove("papel")
  	document.querySelector("#pc").classList.remove("tijera")
 
  	 document.querySelector("#vos").classList.remove("piedra")
  	document.querySelector("#vos").classList.remove("papel")
  	document.querySelector("#vos").classList.remove("tijera")

  	if(cual==0){
  		document.querySelector("#pc").classList.add("piedra")
  		this.piedraC=true;
  		  	if(c==0){
  		 	 	document.querySelector("#vos").classList.add("piedra")
		  		this.empate()
		  	}else if(c==1){
		  			  	document.querySelector("#vos").classList.add("papel")
		  		this.ganaste();

		  	}else if(c==2){
		  		  	document.querySelector("#vos").classList.add("tijera")
		  		this.perdiste()
		  	}
  	}  	  	else if(cual==1){
  			document.querySelector("#pc").classList.add("papel")
  		this.papelC=true;
  		  	if(c==0){
  		  		 	document.querySelector("#vos").classList.add("piedra")
		  		this.perdiste()
		  	}else if(c==1){
		  			 	document.querySelector("#vos").classList.add("papel")
		  		this.empate()
		  	}else if(c==2){
		  		 	document.querySelector("#vos").classList.add("tijera")
		  		this.ganaste();
		  	}
  	} else 	if(cual==2){
  	  	this.tijeraC=true;
  	  	document.querySelector("#pc").classList.add("tijera")
  		  	if(c==0){
  		  			 	document.querySelector("#vos").classList.add("piedra")
		  		this.ganaste();
		  	}else if(c==1){
		  			 	document.querySelector("#vos").classList.add("papel")
		  		this.perdiste()
		  	}else if(c==2){
		  	 	document.querySelector("#vos").classList.add("tijera")
		  		this.empate()
		  	}
  	}

  }

empate(){
	// var $: any;
	console.log("empate")
	setTimeout(function(){
		alert("empate")
	},500)
	
	setTimeout(function(){
				document.querySelector("#pc").classList.remove("piedra")
  	document.querySelector("#pc").classList.remove("papel")
  	document.querySelector("#pc").classList.remove("tijera")
 
  	 document.querySelector("#vos").classList.remove("piedra")
  	document.querySelector("#vos").classList.remove("papel")
  	document.querySelector("#vos").classList.remove("tijera")
	},1000)
}
ganaste(){
	// var $: any;
	console.log("ganaste")
	setTimeout(function(){
		alert("ganaste +150pts")
	},500)
		setTimeout(function(){
				document.querySelector("#pc").classList.remove("piedra")
  	document.querySelector("#pc").classList.remove("papel")
  	document.querySelector("#pc").classList.remove("tijera")
 
  	 document.querySelector("#vos").classList.remove("piedra")
  	document.querySelector("#vos").classList.remove("papel")
  	document.querySelector("#vos").classList.remove("tijera")

	},1000)

		 let promesa = this.servicio.cargarPuntuacion(150).then((e:any)=>{
  	  		localStorage["puntos"]=e.puntos
  	  		console.log(e)
  	 	});

}
perdiste(){
	// var $: any;
	console.log("periste")
	setTimeout(function(){
		alert("perdiste: -150pts")
	},500)
	setTimeout(function(){
			document.querySelector("#pc").classList.remove("piedra")
  	document.querySelector("#pc").classList.remove("papel")
  	document.querySelector("#pc").classList.remove("tijera")
 
  	 document.querySelector("#vos").classList.remove("piedra")
  	document.querySelector("#vos").classList.remove("papel")
  	document.querySelector("#vos").classList.remove("tijera")
	
	},1000)
		let promesa = this.servicio.cargarPuntuacion(-150).then((e:any)=>{
  	  		localStorage["puntos"]=e.puntos
  	  		console.log(e)
  	 	});
}


}
