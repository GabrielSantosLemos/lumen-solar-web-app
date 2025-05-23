import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent {
  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefone: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    endereco: new FormControl('', Validators.required),
    moradores: new FormControl('', [Validators.required, Validators.min(1)]),
    renda: new FormControl('', [Validators.required, Validators.min(0)]),
    energia: new FormControl('', [Validators.required, Validators.min(0)]),
    vulnerabilidade: new FormControl('', Validators.required),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmarSenha: new FormControl('', Validators.required),
    termos: new FormControl(false, Validators.requiredTrue),
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('Formulário válido:', this.form.value);
  }
}
