import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioappService } from '../../servicioapp.service';
import { Input, EventEmitter, Output, forwardRef, HostListener } from '@angular/core';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  
  t:any=false;
  
  lista_productos=[];
  constructor(private adunitservice: ServicioappService,private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
    this.lista_productos=[]
    this.lista_productos=this.adunitservice.getProductos();
    
  }

cambiar(id,c){

console.log(c)
this.adunitservice.UpdateTarea(id,c);
}
eliminarProducto(id){
  this.adunitservice.deleteProducto(id);
  this.router.navigate['index'];
}
clean_cache()
{localStorage.clear()
  this.router.navigate['index']
  this.ngOnInit()
}

}
