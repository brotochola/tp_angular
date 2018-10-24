import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class conexionApi {

  //url:string = "http://darodarioli.tech/API/loginWEB/helados"
  // urlLocal:string = "http://localhost:8080/Resto/API/log/"

  url:string = "http://pixeloide.com/utn/server/usuarios/";

  constructor(private http: HttpClient) { }

  public login(user:string, pass:string){

    return this.http.get(this.url + "login?user=" +user+"&pass="+pass).toPromise();
 }

public registro(user:string, pass:string)
{
  //console.log(this.url + "cargar" + parametros);
  return this.http.get(this.url + "registro?user=" + user+"&pass="+pass).toPromise();
}


 public cargarPuntuacion(puntos:number) {
  return this.http.get(this. url + "cargarPuntuacion?token="+localStorage["token"]+"&puntos="+puntos).toPromise();
}

   public traerRanking() {
  return this.http.get(this. url + "traerRanking").toPromise();
}





}