import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Carlos";
  dataNascimento = "1992-09-08";
  urlImagem = "/assets/carlos.png";

  mostrarDataNascimento(){
    alert(`A data de nascimento do ${this.nome} é ${this.dataNascimento}`);
  };
}
