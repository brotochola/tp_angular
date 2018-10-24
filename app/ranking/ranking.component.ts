import { Component, OnInit } from '@angular/core';
import {conexionApi} from '../conexion.service';


@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

	public ranking=[]

constructor(public servicio:conexionApi) {   }

  ngOnInit() {
  	let promesa = this.servicio.traerRanking().then((e:any)=>{
         this.ranking=e
         this.ranking.sort(this.compare);
         console.log(e)
      });

  }

   compare(a,b) {
  if (a.puntos < b.puntos)
    return 1;
  if (a.puntos > b.puntos)
    return -1;
  return 0;
}





}
