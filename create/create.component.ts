import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product;
  constructor(private _httpService:HttpService , private _route:Router) { }

  ngOnInit() {
    this.product={title:'',price:null,img_url:""}
  }


  cancel(){
    this._route.navigate(['pList'])

  }

  createProduct(form){
    let obs = this._httpService.addProduct(this.product)
    obs.subscribe(data =>{
      console.log(data)
      if(data['status']==200)
      this._route.navigate(['pList'])
    })
  }
 
  

}
