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
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  readonly baseUrl = environment.baseUrl;

  public familiaId!: number;
  public familiaStatus!: number;

  form = new FormGroup({
    status: new FormControl<number | null>(null, [Validators.required]),
  });

  get status() {
    return this.form.get('status') as AbstractControl<number>;
  }

  constructor(
    private _activeModal: NgbActiveModal,
    private _http: HttpClient
  ) {}

  ngOnInit() {
    this.form.patchValue({
      status: this.familiaStatus,
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this._http
      .post(`${this.baseUrl}/admin/familias/${this.familiaId}/status`, {
        status: this.form.value.status,
      })
      .subscribe({
        next: value => {
          this.onFechar();
        },
        error: error => {
          console.error('Erro ao atualizar status:', error);
        },
      });
  }

  onFechar() {
    this._activeModal.close();
  }
}
