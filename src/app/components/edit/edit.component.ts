import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioappService } from '../../servicioapp.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
producto:string='';
  constructor(private route: ActivatedRoute,
    private router: Router,
private adunitservice: ServicioappService,) { }
  

  ngOnInit() {
  }

    
  ActualizarProducto() {
    this.route.params.subscribe(params => {
        this.adunitservice.UpdateProducto( params['id'],this.producto);
        console.log(params['id'])
        this.router.navigate(['index']);
    });
  }

}
