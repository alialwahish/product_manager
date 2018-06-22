import { Injectable } from '@angular/core';
import { Http } from '@angular/http'




@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:Http) {}
  
  updateProd(product){
    return this._http.put('/api/products/'+product._id,product)
  }

  getProduct(id){
    return this._http.get('/api/products/'+id);
  }


  addProduct(product){
    return this._http.post('/api/products',product);
  }
  getProds(){
    return this._http.get('/api/products');
  }

  deleteProd(id){
    return this._http.delete('/api/products',id);
  }
  
}
