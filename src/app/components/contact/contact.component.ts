import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  sendEmail() {
    const templateParams = {
      from_name: this.name,
      from_email: this.email,
      message: this.message,
    };

    emailjs
      .send('service_m3s0xqh', 'template_h7ywywv', templateParams, '7FtHg-JEf6t-aI-PS')
      .then(
        (response: EmailJSResponseStatus) => {
          console.log('Email enviado com sucesso!', response.status, response.text);
          alert('Email enviado com sucesso!');
        },
        (error) => {
          console.error('Erro ao enviar email:', error);
          alert('Erro ao enviar email. Tente novamente mais tarde.');
        }
      );
  }
}
