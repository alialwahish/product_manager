import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private _router:ActivatedRoute , private _httpService:HttpService , private _route:Router ) { }
  id;
  product;
  ngOnInit() {
    this.id=this._router.params.subscribe((params:Params)=>{
      this.id=params['id']
      console.log("printing id in edit ",this.id)
      let obs = this._httpService.getProduct(this.id)
      obs.subscribe(data=>{
        this.product=JSON.parse(data['_body']).data[0]
        // console.log("found product to update ",JSON.parse(data['_body']).data)

      })
    })
  }

  updateProd(){
    // console.log("new Entry to update",this.product)
    let obs = this._httpService.updateProd(this.product)
    obs.subscribe(data=>{
      this._route.navigate(['pList'])

    })
  }

  deleteProd(id){
    let obs = this._httpService.deleteProd(id)
    obs.subscribe(data=>{
      this._route.navigate(['pList'])

    })
  }


}
