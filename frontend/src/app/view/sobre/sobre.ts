import { Component } from '@angular/core';
import { Header } from '../../componets/header/header';
import { Footer } from '../../componets/footer/footer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sobre',
  imports: [Header, Footer, RouterLink],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class Sobre {

}
