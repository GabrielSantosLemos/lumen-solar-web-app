import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgbActiveModal, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [
    CommonModule,
    NgbNavModule,
    NgbNavModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent {
  tabAtiva: 'login' | 'register' = 'login';
  formSelecionado: 'donor' | 'family' | null = null;
  doadorTipo: string = '';

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    lembrar: new FormControl(false),
  });

  formDoador = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefone: new FormControl(''),
    cpf: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required),
    empresa: new FormControl(''),
    cnpj: new FormControl(''),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmarSenha: new FormControl('', Validators.required),
    termos: new FormControl(false, Validators.requiredTrue),
  });

  formFamilia = new FormGroup({
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

  get email() {
    return this.form.get('email') as AbstractControl<string>;
  }

  get senha() {
    return this.form.get('senha') as AbstractControl<string>;
  }

  constructor(private activeModal: NgbActiveModal) {}

  switchTab(tab: 'login' | 'register') {
    this.tabAtiva = tab;
    this.formSelecionado = null;
  }

  selectForm(form: 'donor' | 'family') {
    this.formSelecionado = form;
  }

  atualizarTipoDoador(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.doadorTipo = value;
  }

  onFechar() {
    this.activeModal.dismiss();
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('Formulário válido:', this.form.value);
  }

  onSubmitDoador(): void {
    if (this.formDoador.invalid) {
      this.formDoador.markAllAsTouched();
      return;
    }

    console.log('Dados do doador:', this.formDoador.value);
  }

  onSubmitFamilia(): void {
    if (this.formFamilia.invalid) {
      this.formFamilia.markAllAsTouched();
      return;
    }

    console.log('Dados da família:', this.formFamilia.value);
  }
}
