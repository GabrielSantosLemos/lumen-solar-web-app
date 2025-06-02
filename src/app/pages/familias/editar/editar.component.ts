import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Familia } from '../../admin/familias/familia.model';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent {
  readonly baseUrl = environment.baseUrl;

  @Input() familia: Familia | null = null;

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

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    if (this.familia) {
      this.form.patchValue({
        nomeResponsavel: this.familia.nomeResponsavel,
        email: this.familia.user.email,
        celular: this.familia.celular,
        cpf: this.familia.cpf,
        numeroMoradores: this.familia.numeroMoradores,
        rendaFamiliar: this.familia.rendaFamiliar,
        gastoComEnergia: this.familia.gastoComEnergia,
        situacaoVulnerabilidade: this.familia.situacaoVulnerabilidade,
      });
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (this.familia) {
      this._http
        .put(`${this.baseUrl}/familias/${this.familia.id}`, this.form.value)
        .subscribe();
    }
  }
}
