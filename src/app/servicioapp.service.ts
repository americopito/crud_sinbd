import { Injectable } from '@angular/core';
import { ParseError } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ServicioappService {
  cont:number=0;
  Productos=[];
  constructor() { }
  producto={'id':0,'nombre':'','realizado':false};



  addProducto(name) {
    this.cont++;
    this.producto={'id':this.cont,'nombre':name,'realizado':false};
    this.Productos.push(this.producto) 
    localStorage.setItem('item',JSON.stringify(this.Productos));
    
   
    console.log(localStorage)
  // console.log( JSON.parse(localStorage.getItem('item')))
   
}

getProductos(){
  return JSON.parse(localStorage.getItem('item'));
}

deleteProducto(id){
  for(var i=0; i<this.Productos.length;i++)
  {
    if(this.Productos[i].id==id)
    {
      this.Productos.splice(i,1)
      
      localStorage.setItem('item',JSON.stringify(this.Productos));
    }
  }
  console.log(localStorage)
  
}
UpdateProducto(id,name){
  for(var i=0; i<this.Productos.length;i++)
  {
    if(this.Productos[i].id==id)
    {
      //let x=this.Productos[i].nombre;
      this.Productos[i].nombre=name;
      //localStorage.setItem('producto 1','3')
      localStorage.setItem('item',JSON.stringify(this.Productos));
      
    }
  }
  console.log(localStorage)
}
UpdateTarea(id,b){
  for(var i=0; i<this.Productos.length;i++)
  {
    if(this.Productos[i].id==id)
    {
      //let x=this.Productos[i].nombre;
      this.Productos[i].realizado=b;
      //localStorage.setItem('producto 1','3')
      localStorage.setItem('item',JSON.stringify(this.Productos));
      
    }
  }
  console.log(localStorage)
}

}
