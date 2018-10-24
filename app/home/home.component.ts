import { Component, OnInit,Input,EventEmitter, Output   } from '@angular/core';

import {conexionApi} from '../conexion.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() loginEmitter: EventEmitter<null> = new EventEmitter();

  constructor(public servicio:conexionApi) { }

  public user;
  public pass;
    public passReg;
      public passReg2;
     public userReg;
     public estaLogueado;
     public nombre;
     public puntos;
     public id;


  ngOnInit() {
    console.log("init home")
    if(localStorage["token"]!=undefined && localStorage["token"]!="" && localStorage["token"]!=-1){
      this.estaLogueado=true;
         this.puntos= localStorage["puntos"]
       this.id= localStorage["id_user"]
        this.nombre=localStorage["nombre"]
          this.loginEmitter.emit(this.nombre);

    }else{
      this.estaLogueado=false;
    }
  }

  login(){
  	console.log("login")
  	console.log(this.user, this.pass)

  	  let promesa = this.servicio.login(this.user,this.pass).then((e:any)=>{
  	  	 	console.log(e)
    	if(e.token!=-1){
    		localStorage["token"]=e.token;
       this.puntos= localStorage["puntos"]=e.puntos;
       this.id= localStorage["id_user"]=e.id;
        this.nombre=localStorage["nombre"]=this.user;

    		this.loginEmitter.emit(this.user);
        this.estaLogueado=true;
    	}else{
        alert(e.mensaje)
      }
    });

  }


  logout(){
     this.estaLogueado=false;
     localStorage["token"]="";
       this.puntos= localStorage["puntos"]=-1;
        this.id=localStorage["id_user"]=-1;
          this.loginEmitter.emit("");
  }

  registro(){
  	if(this.passReg!=this.passReg2) {
  		alert("las contraseñas no coinciden");
  		return;
  	}

  	  let promesa = this.servicio.registro(this.userReg,this.passReg).then((e:any)=>{
  	  	console.log(e)
    	if(e.token!=-1){
    		localStorage["token"]=e.token;
        this.nombre=localStorage["nombre"]=this.userReg;
          this.id=localStorage["id_user"]=e.id;
            this.puntos= localStorage["puntos"]=0;

        this.estaLogueado=true;
    		this.loginEmitter.emit(this.userReg);
    	}else{
        alert(e.mensaje);
      }
    });
  }



}
