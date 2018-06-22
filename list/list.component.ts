import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private _httpService:HttpService , private _route:Router) { }
  
  products;

  ngOnInit() {
  let obs= this._httpService.getProds()
  obs.subscribe(data=>{
    console.log("data in the list component ",JSON.parse(data['_body']).data)
    this.products=JSON.parse(data['_body']).data
    })
  } 

 
  deleteProd(id){
    let obs = this._httpService.deleteProd(id)
    obs.subscribe(data=>{
      console.log("Data back after deleting ",JSON.parse(data['_body']).data)
      this.products=JSON.parse(data['_body']).data

      this._route.navigate(['pList'])

    })
  }

}
