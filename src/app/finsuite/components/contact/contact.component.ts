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
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm!: FormGroup;
  showSuccessMessage: boolean = false;
  showErrorMessage: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', Validators.required],
    });
  }

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
          this.showSuccessMessage = true; // Mostrar el mensaje de éxito
          /* console.log('Correo electrónico enviado correctamente', response); */
          setTimeout(() => {
            this.showSuccessMessage = false; // Ocultar el mensaje después de 3 segundos
          }, 3000);
          this.contactForm.reset(); // Limpiar el formulario
        },
        (error) => {
          this.showErrorMessage = true; // Mostrar el mensaje de error
          /*     console.error('Error al enviar correo electrónico', error); */
        }
      );
  }
}
