import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  alumnos = [
    { 
      id: '1',
      nombre: 'Juan Pérez', 
      edad: 20, 
      ciudad: 'Santiago',
      estado: 'Activo' },
     
    { 
      id: '2',
      nombre: 'Ana García', 
      edad: 22, 
      ciudad: 'Arica', 
      estado: 'Activo' },
    { 
      id: '3',
      nombre: 'Carlos Rodríguez', 
      edad: 21, 
      ciudad: 'Concepción',
      estado: 'Inactivo' 
    }, 
    { 
      id: '4',
      nombre: 'María López', 
      edad: 23, 
      ciudad: 'Chillán', 
      estado: 'Inactivo'
    },
    { 
      id: '5',
      nombre: 'Camilo Samson', 
      edad: 31, 
      ciudad: 'Santiago',
      estado: 'Activo' 
    },
    { 
      id: '6',
      nombre: 'Roberto Fuenzalida', 
      edad: 39, 
      ciudad: 'Rancagua',
      estado: 'Inactivo' 
    },
    { 
      id: '7',
      nombre: 'Elena Alarcón', 
      edad: 19, 
      ciudad: 'La Florida',
      estado: 'Inactivo' 
    },
    { 
      id: '8',
      nombre: 'Iván Orozco', 
      edad: 19, 
      ciudad: 'Rengo',
      estado: 'Activo' 
    }

  ];

}
