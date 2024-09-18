import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Importar solo módulos necesarios
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  losdatos: any[] = [];
  nuevoPost = { title: '', body: '' };  // Objeto para el nuevo post

  constructor(private servicio: DataService) {}

  ngOnInit() {
    this.obtenerPosts();
  }

  // Método para obtener los datos existentes
  obtenerPosts() {
    this.servicio.obtenerDatos().subscribe((data: any) => {
      console.log(data);
      this.losdatos = Array.isArray(data) ? data : [];  // Asegúrate de que sea un array
    }, (error) => {
      console.error('Error al obtener los datos', error);
    });
  }

  // Método para agregar un nuevo post
  agregarPost() {
    this.servicio.agregarDato(this.nuevoPost).subscribe((data) => {
      console.log('Post agregado:', data);
      this.losdatos.unshift(data);  // Agrega el nuevo post al inicio de la lista
      this.nuevoPost = { title: '', body: '' };  // Reiniciar el formulario
    }, (error) => {
      console.error('Error al agregar el post', error);
    });
  }
}
