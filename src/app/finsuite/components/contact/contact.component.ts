/* import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.initForm();
  }

  onSubmit(): void {
    console.log('form ->', this.contactForm.value);
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],

      phone: ['', Validators.required],

      email: ['', Validators.required],

      message: ['', Validators.required],
    });
  }
}
 */ import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6d4gviy',
        'template_ss7p0pa',
        e.target as HTMLFormElement,
        'JmdKjmBFJupfoOzOk'
      )
      .then(
        (response: EmailJSResponseStatus) => {
          alert('Mensaje enviado exitosamente!');
          console.log('Correo electrónico enviado correctamente', response);
          location.reload(); // Opcional: recargar la página después de enviar el correo electrónico
        },
        (error) => {
          console.error('Error al enviar correo electrónico', error);
        }
      );
  }
}
