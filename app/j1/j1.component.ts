import { Component, OnInit } from '@angular/core';
import {conexionApi} from '../conexion.service';

@Component({
  selector: 'app-j1',
  templateUrl: './j1.component.html',
  styleUrls: ['./j1.component.css']
})
export class J1Component implements OnInit {

//public palabrasParaAdivinar=["politeismo","sistema","botánica","equinoccio"]
public palabrasParaAdivinar=["perro","casa"]
public letras=[];
public palabraArmada=[];
public palabraQueEstaJugando="";


  constructor(public servicio:conexionApi) { }

  ngOnInit() {
  	console.log("init j1")
  	let pal=this.palabrasParaAdivinar[Math.floor(Math.random()*this.palabrasParaAdivinar.length)]
  	this.letras=[];
  	this.palabraArmada=[];
  	this.palabraQueEstaJugando=pal;
  //	this.letras=this.palabra.split();
  	for (var i = 0; i <pal.length ; i++) {
  		this.letras.push(pal[i])
  	}
  	this.letras=this.shuffle(this.letras)
  	console.log(this.letras)
  }


 shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


chequearGanador(){
	let palabra=""
	for (var i =  0;i<this.palabraArmada.length ; i++) {
		palabra+=this.palabraArmada[i];
	}
	console.log(palabra,this.palabraQueEstaJugando)
	if(palabra==this.palabraQueEstaJugando){
		alert("ganaste");
		this.ngOnInit();
		 let promesa = this.servicio.cargarPuntuacion(1000).then((e:any)=>{
  	  		localStorage["puntos"]=e.puntos
  	  		console.log(e)
  	 	});
	}
}

	agregarLetra(e){
		console.log(e.target.innerHTML)
		let letra=e.target.innerHTML
		this.palabraArmada.push(letra);
		this.chequearGanador();
	}

	borrarLetra(e){
	

		var child = e.target;
		var idx=-1;
		var parent = e.target.parentNode.parentNode
		console.log(parent.children);
		for(let i=0;i<parent.children.length;i++){
			if(parent.children[i]==e.target.parentNode){
				idx=i;
				//parent.removeChild(e.target.parentNode);
				break;
			}
		}
		this.palabraArmada.splice(idx,1);

		

		
		this.chequearGanador();
	}

 getChildrenIndex(ele){
    //IE use Element.sourceIndex
    if(ele.sourceIndex){
        var eles = ele.parentNode.children;
        var low = 0, high = eles.length-1, mid = 0;
        var esi = ele.sourceIndex, nsi;
        //use binary search algorithm
        while (low <= high) {
            mid = (low + high) >> 1;
            nsi = eles[mid].sourceIndex;
            if (nsi > esi) {
                high = mid - 1;
            } else if (nsi < esi) {
                low = mid + 1;
            } else {
                return mid;
            }
        }
    }
    //other browsers
    var i=0;
    while(ele = ele.previousElementSibling){
        i++;
    }
    return i;
}
}
