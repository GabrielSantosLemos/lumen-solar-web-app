import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment.prod';

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
  readonly baseUrl = environment.baseUrl;

  private route = inject(ActivatedRoute);
  private router = inject(Router);

  tabAtiva: 'login' | 'register' = 'login';
  formSelecionado: 'donor' | 'family' | null = null;
  doadorTipo = 0;
  erro: string | null = null;

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  formDoador = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    celular: new FormControl(''),
    cpf: new FormControl('', Validators.required),
    tipo: new FormControl<number | null>(1, Validators.required),
    empresa: new FormControl(''),
    cnpj: new FormControl(''),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmarSenha: new FormControl('', Validators.required),
    termos: new FormControl(false, Validators.requiredTrue),
  });

  formFamilia = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    celular: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    moradores: new FormControl('', [Validators.required, Validators.min(1)]),
    renda: new FormControl('', [Validators.required, Validators.min(0)]),
    energia: new FormControl('', [Validators.required, Validators.min(0)]),
    vulnerabilidade: new FormControl('', Validators.required),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmarSenha: new FormControl('', Validators.required),
    termos: new FormControl(false, Validators.requiredTrue),

    uf: new FormControl('...'),
    cep: new FormControl('...'),
    rua: new FormControl('...'),
    numero: new FormControl(0),
    bairro: new FormControl('...'),
    cidade: new FormControl('...'),
  });

  get email() {
    return this.form.get('email') as AbstractControl<string>;
  }

  get senha() {
    return this.form.get('senha') as AbstractControl<string>;
  }

  constructor(
    private _activeModal: NgbActiveModal,
    private _http: HttpClient
  ) {}

  switchTab(tab: 'login' | 'register') {
    this.tabAtiva = tab;
    this.formSelecionado = null;
  }

  selectForm(form: 'donor' | 'family') {
    this.formSelecionado = form;
  }

  atualizarTipoDoador(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.doadorTipo = Number(value);
  }

  onFechar() {
    this._activeModal.close();
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this._http
      .post<{ id: number; email: string; token: string; roles: string[] }>(
        `${this.baseUrl}/accounts/login`,
        this.form.value
      )
      .subscribe({
        next: value => {
          localStorage.setItem('USER', JSON.stringify(value));
          const id = value.id;
          const roles = value.roles || [];

          if (roles.includes('familia')) {
            this.router
              .navigate([`/familias/${id}`])
              .then(() => this._activeModal.close());
          } else if (roles.includes('doador')) {
            this.router
              .navigate([`/doadores/${id}`])
              .then(() => this._activeModal.close());
          } else {
            this.router.navigate(['/']);
          }
        },
        error: error => {
          this.erro = 'Login inválido.';
          console.error('Erro ao carregar dashboard:', error);
        },
      });
  }

  onSubmitDoador(): void {
    if (this.formDoador.invalid) {
      this.formDoador.markAllAsTouched();
      return;
    }

    debugger;

    const value = this.formDoador.value;

    this._http
      .post<{ id: number; email: string; token: string; roles: string[] }>(
        `${this.baseUrl}/accounts/registrar_doador`,
        {
          doador: {
            nomeCompleto: value.nome,
            email: value.email,
            celular: value.celular,
            tipo: Number(value.tipo),
            cpf: value.cpf,
            nomeEmpresa: value.empresa,
            cnpj: value.cnpj,
          },
          senha: value.senha,
        }
      )
      .subscribe({
        next: value => {
          this.login(value);
        },
        error: error => {
          console.error('Erro ao realizar cadastro familia', error);
        },
      });
  }

  onSubmitFamilia(): void {
    if (this.formFamilia.invalid) {
      this.formFamilia.markAllAsTouched();
      return;
    }

    const value = this.formFamilia.value;

    this._http
      .post<{ id: number; email: string; token: string; roles: string[] }>(
        `${this.baseUrl}/accounts/registrar_familia`,
        {
          familia: {
            nomeResponsavel: value.nome,
            cpf: value.cpf,
            email: value.email,
            celular: value.celular,
            cep: value.cep,
            rua: value.rua,
            numero: value.numero,
            bairro: value.bairro,
            cidade: value.cidade,
            uf: value.uf,
            rendaFamiliar: value.renda,
            numeroMoradores: value.moradores,
            gastoComEnergia: value.energia,
            situacaoVulnerabilidade: value.vulnerabilidade,
          },
          senha: value.senha,
        }
      )
      .subscribe({
        next: value => {
          this.login(value);
        },
        error: error => {
          console.error('Erro ao realizar cadastro familia', error);
        },
      });
  }

  login(value: { id: number; email: string; token: string; roles: string[] }) {
    localStorage.setItem('USER', JSON.stringify(value));
    const id = value.id;
    const roles = value.roles || [];

    if (roles.includes('familia')) {
      this.router
        .navigate([`/familias/${id}`])
        .then(() => this._activeModal.close());
    } else if (roles.includes('doador')) {
      this.router
        .navigate([`/doadores/${id}`])
        .then(() => this._activeModal.close());
    } else {
      this.router.navigate(['/']);
    }
  }
}
