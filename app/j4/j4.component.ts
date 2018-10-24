import { Component, OnInit } from '@angular/core';
import {conexionApi} from '../conexion.service';

@Component({
  selector: 'app-j4',
  templateUrl: './j4.component.html',
  styleUrls: ['./j4.component.css']
})
export class J4Component implements OnInit {

	public numIngresado:number;
	public intvl:any;
	public n:number=0;
	public numeroSecreto:number;
  constructor(public servicio:conexionApi) { 
  	this.intvl=setInterval(
      ()=>{
        this.clock(this.n)
      }),100);
  }

  clock(m:number){
  	m++;
  	this.n=m;
  	//console.log(this.n)
  	var num=	document.getElementById("num")
  	num.style.left="calc(0% + "+(Math.sin(this.n/89)*80)+"px)"
  	num.style.top="calc(-150px + "+(Math.sin(this.n/50)*53)+"px)"
  	num.style.transform="rotate("+this.n+"deg)"

 /* var 	tapa=	document.getElementById("tapa")
  	tapa.style.left="calc(40% + "+(Math.cos(this.n/890)*20)+"px)"
 	tapa.style.top="calc(15% + "+(-Math.sin(this.n/500)*23)+"px)"
  	//tapa.style.transform="rotate("+this.n/10+"deg)"*/

  }

  ngOnDestroy(){
    console.log("destroy j4")
  	clearInterval(this.intvl)

  }

fin(){
	if(this.numIngresado==this.numeroSecreto){
		alert("ganaste +250pts")
		   let promesa = this.servicio.cargarPuntuacion(250).then((e:any)=>{
                localStorage["puntos"]=e.puntos
                console.log(e)
             });
	}else{
		alert("perdiste -250pts");
		   let promesa = this.servicio.cargarPuntuacion(-250).then((e:any)=>{
                localStorage["puntos"]=e.puntos
                console.log(e)
             });

	}
	this.ngOnInit();
}
  ngOnInit() {
	this.numeroSecreto=Math.floor(Math.random()*999)
  }

}
