import { Component, OnInit } from '@angular/core';
import { ServicioappService } from '../../servicioapp.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  producto:string='';
  
  productos={'id':0,'nombre':''}; 
  lista_productos=[];

  constructor(private adunitservice: ServicioappService,private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
  }

  anadirProducto( ){
    this.adunitservice.addProducto(this.producto);
    this.router.navigate(['index']);
   }

  }
