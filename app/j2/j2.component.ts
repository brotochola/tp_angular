import { Component, OnInit } from '@angular/core';
import {conexionApi} from '../conexion.service';


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


  	// var $: any;
  	let cual=Math.floor(Math.random()*3);
  	$("#pc, #vos").removeClass("piedra").removeClass("papel").removeClass("tijera")
  	if(cual==0){
  		$("#pc").addClass("piedra")
  		this.piedraC=true;
  		  	if(c==0){
  		  			$("#vos").addClass("piedra")
		  		this.empate()
		  	}else if(c==1){
		  			$("#vos").addClass("papel")
		  		this.ganaste();

		  	}else if(c==2){
		  		$("#vos").addClass("tijera")
		  		this.perdiste()
		  	}
  	}  	  	else if(cual==1){
  		$("#pc").addClass("papel")
  		this.papelC=true;
  		  	if(c==0){
  		  			$("#vos").addClass("piedra")
		  		this.perdiste()
		  	}else if(c==1){
		  			$("#vos").addClass("papel")
		  		this.empate()
		  	}else if(c==2){
		  		$("#vos").addClass("tijera")
		  		this.ganaste();
		  	}
  	} else 	if(cual==2){
  	  	this.tijeraC=true;
  	  	$("#pc").addClass("tijera");
  		  	if(c==0){
  		  			$("#vos").addClass("piedra")
		  		this.ganaste();
		  	}else if(c==1){
		  			$("#vos").addClass("papel")
		  		this.perdiste()
		  	}else if(c==2){
		  		$("#vos").addClass("tijera")
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
			$("#pc, #vos").removeClass("piedra").removeClass("papel").removeClass("tijera")
	},1000)
}
ganaste(){
	// var $: any;
	console.log("ganaste")
	setTimeout(function(){
		alert("ganaste +150pts")
	},500)
		setTimeout(function(){
			$("#pc, #vos").removeClass("piedra").removeClass("papel").removeClass("tijera")

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
		$("#pc, #vos").removeClass("piedra").removeClass("papel").removeClass("tijera")
	
	},1000)
		let promesa = this.servicio.cargarPuntuacion(-150).then((e:any)=>{
  	  		localStorage["puntos"]=e.puntos
  	  		console.log(e)
  	 	});
}


}
