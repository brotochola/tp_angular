import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 	public home=true;
 	public j1=false;
 	public j2=false;
 	public j3=false;
 	public j4=false;
 	public j5=false;
 	public ranking=false;
 	public nombre;

 	public yaSeLogueo(k){
 		console.log("ya se logueo ",k)
 		this.nombre=k;
 	}

 	public cambiarSeccion(cual){
 		
	 	 this.home=false;
	 	 this.j1=false;
	 	 this.j2=false;
	 	 this.j3=false;
	 	 this.j4=false;
	 	 this.j5=false;
	 	 this.ranking=false;
	 	 eval("this."+cual+"=true");
 	}

 	ngOnInit(){
 		//this.cambiarSeccion("j2")
 	}


}
