import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent {
  doadorTipo: string = '';

  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefone: new FormControl(''),
    cpf: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required),
    empresa: new FormControl(''),
    cnpj: new FormControl(''),
  });

  atualizarTipoDoador(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.doadorTipo = value;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('Dados do doador:', this.form.value);
  }
}
