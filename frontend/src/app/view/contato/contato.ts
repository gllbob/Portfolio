import { Component } from '@angular/core';
import { Header } from '../../componets/header/header';
import { Footer } from '../../componets/footer/footer';

@Component({
  selector: 'app-contato',
  imports: [Header, Footer],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {

}
