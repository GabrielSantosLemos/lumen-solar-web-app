import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Familia } from '../../admin/familias/familia.model';
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

  id: number | null = null;
  familia: Familia | null = null;

  form = new FormGroup({
    nomeResponsavel: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    celular: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    numeroMoradores: new FormControl(0, [
      Validators.required,
      Validators.min(1),
    ]),
    rendaFamiliar: new FormControl(0, [Validators.required, Validators.min(0)]),
    gastoComEnergia: new FormControl(0, [
      Validators.required,
      Validators.min(0),
    ]),
    situacaoVulnerabilidade: new FormControl('', Validators.required),

    uf: new FormControl('...'),
    cep: new FormControl('...'),
    rua: new FormControl('...'),
    bairro: new FormControl('...'),
    cidade: new FormControl('...'),
  });

  constructor(
    private _http: HttpClient,
    private _activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this._activateRoute.params.subscribe(param => {
      if (param['id']) {
        this.id = Number(param['id']);
        this._http
          .get<Familia>(`${this.baseUrl}/familias/${this.id}`)
          .subscribe({
            next: data => {
              this.familia = data;
              this.form.patchValue({
                nomeResponsavel: data.nomeResponsavel,
                email: data.user.email,
                celular: data.celular,
                cpf: data.cpf,
                numeroMoradores: data.numeroMoradores,
                rendaFamiliar: data.rendaFamiliar,
                gastoComEnergia: data.gastoComEnergia,
                situacaoVulnerabilidade: data.situacaoVulnerabilidade,
              });
            },
            error: error => {
              console.error('Erro ao buscar familia:', error);
            },
          });
      }
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (this.familia) {
      this._http
        .put(`${this.baseUrl}/familias/${this.familia.id}`, this.form.value)
        .subscribe(() => {});
    }
  }
}
