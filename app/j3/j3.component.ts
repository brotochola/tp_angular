import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';
import {conexionApi} from '../conexion.service';


@Component({
  selector: 'app-j3',
  templateUrl: './j3.component.html',
  styleUrls: ['./j3.component.css']
})
export class J3Component implements OnInit {

	public resultado;
	public cuentas=["3+4","7+5","11+8","10+22", "7*8","9*9","6*6","20-10+5","1+2+3+4"]
	public cuenta;
	public resultadoGanador;
  public cont:number=10;
  public intvl:any;


 constructor(public servicio:conexionApi) { 
  // console.log(this.n)
  this.intvl=setInterval(()=>{this.contar(this.cont)},1000);
}
 
ngOnDestroy(){
  clearInterval(this.intvl);
}

 contar(n:number){
     
  n--;
  console.log(n)
  
      if(n<=0){   
        alert("perdiste -200pts");
       let promesa = this.servicio.cargarPuntuacion(150).then((e:any)=>{
                localStorage["puntos"]=e.puntos
                console.log(e)
             });
       this.ngOnInit();
       this.cont=10;

      }

      this.cont=n;
 }

  ngOnInit() {
   
 
  	  this.cuenta=this.cuentas[Math.floor(Math.random()*this.cuentas.length)]
 

  }

  fin(){
      this.resultadoGanador=eval(this.cuenta);
    console.log(this.resultado, this.resultadoGanador)
   	if(this.resultado==	this.resultadoGanador){
   		alert("ok +10pts")

        let promesa = this.servicio.cargarPuntuacion(10).then((e:any)=>{
          localStorage["puntos"]=e.puntos
          console.log(e)
       });


   	}else{
   		console.log("-10pts")
       alert("mal -10pts")

        let promesa = this.servicio.cargarPuntuacion(-10).then((e:any)=>{
          localStorage["puntos"]=e.puntos
          console.log(e)
       });


   	}
     this.cont=10;
   	this.ngOnInit();
  }

}
