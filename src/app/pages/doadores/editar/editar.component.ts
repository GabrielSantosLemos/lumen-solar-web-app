import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Doador } from '../../admin/doadores/doador.model';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent {
  readonly baseUrl = environment.baseUrl;

  id = 0;
  doador: Doador | null = null;
  doadorTipo = 0;

  form = new FormGroup({
    nomeCompleto: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    celular: new FormControl(''),
    tipo: new FormControl<number | null>(null, Validators.required),
    cpf: new FormControl(''),
    nomeEmpresa: new FormControl(''),
    cnpj: new FormControl(''),
  });

  constructor(
    private _http: HttpClient,
    private _activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form.controls.tipo.disable();

    this._activateRoute.params.subscribe(param => {
      if (param['id']) {
        this.id = Number(param['id']);
        this._http
          .get<Doador>(`${this.baseUrl}/doadores/${this.id}`)
          .subscribe({
            next: data => {
              this.doador = data;
              this.form.patchValue({
                nomeCompleto: this.doador.nomeCompleto,
                email: this.doador.user.email,
                celular: this.doador.celular,
                tipo: this.doador.tipo,
                cpf: this.doador.cpf,
                nomeEmpresa: this.doador.nomeEmpresa,
                cnpj: this.doador.cnpj,
              });

              this.doadorTipo = this.doador.tipo;
            },
            error: error => {
              console.error('Erro ao buscar doador:', error);
            },
          });
      }
    });
  }

  atualizarTipoDoador(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.doadorTipo = Number(value);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this._http
      .put(`${this.baseUrl}/doadores/${this.id}`, this.form.value)
      .subscribe();
  }
}
