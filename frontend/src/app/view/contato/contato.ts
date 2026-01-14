import { Component } from '@angular/core';
import { Header } from '../../componets/header/header';
import { Footer } from '../../componets/footer/footer';
import { NgxCaptchaModule } from 'ngx-captcha';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contato',
  imports: [Header, Footer, NgxCaptchaModule, CommonModule, ReactiveFormsModule],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  contatoForm: FormGroup;
  siteKey: string = "6LfOGEosAAAAADpRFfJ2eADHByZowPw8vhAR77LR"; // Sua chave pública
  enviando: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contatoForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['Oportunidade', Validators.required],
      message: ['', Validators.required],
      recaptcha: ['', Validators.required]
    });
  }

  async enviar() {
    if (this.contatoForm.invalid) {
      alert("Por favor, preencha todos os campos e marque que não é um robô.");
      return;
    }

    this.enviando = true;
    const formData = this.contatoForm.value;

    try {
      const validacao = await this.http.post<any>('/api/validate-captcha', { 
        token: formData.recaptcha 
      }).toPromise();

      const formspreeData = new FormData();
      formspreeData.append('name', formData.name);
      formspreeData.append('email', formData.email);
      formspreeData.append('subject', formData.subject);
      formspreeData.append('message', formData.message);

      await this.http.post('https://formspree.io/f/mlggeqgj', formspreeData).toPromise();

      alert('Mensagem enviada com sucesso!');
      this.contatoForm.reset(); 

    } catch (error) {
      console.error(error);
      alert('Erro ao enviar mensagem. Tente novamente ou me chame no WhatsApp.');
    } finally {
      this.enviando = false;
    }
  }

  handleSuccess(token: any) {
    console.log("Captcha resolvido:", token);
    
    this.contatoForm.patchValue({
      recaptcha: token
    });
    
    this.contatoForm.get('recaptcha')?.updateValueAndValidity();
    
    console.log("Formulário Válido?", this.contatoForm.valid);
  }
}
