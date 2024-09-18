import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  articulo: any = {
    codigo: 0,
    descripcion: "",
    precio: 0
  }; 

  articulos: any[] = [];
  editando: boolean = false; // Indica si se está editando un artículo

  contarRegistros() {
    return this.articulos.length < 1;
  }

  agregarRegistro() {
    if (!this.editando) {
      this.articulos.push({ ...this.articulo });
      this.limpiarFormulario();
    }
  }

  editarRegistro() {
    if (this.editando) {
      const index = this.articulos.findIndex(a => a.codigo === this.articulo.codigo);
      if (index !== -1) {
        this.articulos[index] = { ...this.articulo };
      }
      this.editando = false;
      this.limpiarFormulario();
    }
  }

  SelectArticulo(articulo: any) {
    this.articulo = { ...articulo }; // Copiar los datos del artículo seleccionado
    this.editando = true; // Cambiar a modo edición
  }

  eliminarRegistro(articulo: any) {
    this.articulos = this.articulos.filter(a => a.codigo !== articulo.codigo);
  }

  limpiarFormulario() {
    this.articulo = {
      codigo: 0,
      descripcion: "",
      precio: 0
    };
    this.editando = false; // Reiniciar el modo edición
  }
}