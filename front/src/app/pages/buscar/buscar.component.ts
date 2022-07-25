import { Component, OnInit, ɵisListLikeIterable } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { LibreriaService } from 'src/app/services/libreria.service';
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {
  busquedaForm = new FormGroup({
    termino: new FormControl()
  }) ; 

  constructor(
    private libreriaService: LibreriaService
  ) { }


  onSubmit (){
    console.log("vas re bien");
    //llamar al servicio y enviarle a la funcion finBooks el termino
  //conseguir el dato de lo que tipeo el usuario
  const {termino} = this.busquedaForm.value ;
  this.libreriaService.findBooks(termino).subscribe(libros =>{
    console.log("resultados",libros);
  });
  }

  ngOnInit(): void {
  }

}
