import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.scss'],
})
export class ExcluirComponent {
  readonly baseUrl = environment.baseUrl;

  public id!: number;

  constructor(
    private _activeModal: NgbActiveModal,
    private _http: HttpClient
  ) {}

  excluir(): void {
    this._http.delete(`${this.baseUrl}/admin/doadores/${this.id}`).subscribe({
      next: () => {
        this.onFechar();
      },
      error: error => {
        console.error('Erro ao excluir:', error);
      },
    });
  }

  onFechar() {
    this._activeModal.close();
  }
}
