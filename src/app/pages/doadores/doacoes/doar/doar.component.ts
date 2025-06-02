import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-doar',
  templateUrl: './doar.component.html',
  styleUrls: ['./doar.component.scss'],
})
export class DoarComponent {
  readonly baseUrl = environment.baseUrl;
  doadorId = 0;
  valorDoacao: number = 0;
  mensagem: string = '';

  constructor(private activeModal: NgbActiveModal, private _http: HttpClient) {}

  confirmarDoacao() {
    this._http
      .post(`${this.baseUrl}/doadores/${this.doadorId}/doar`, {
        valor: this.valorDoacao,
      })
      .subscribe({
        next: () => {
          this.mensagem = `Obrigado pela sua doação de R$ ${this.valorDoacao.toFixed(
            2
          )}!`;
          this.valorDoacao = 0;
          this.activeModal.close();
        },
        error: (error) => {
          console.error('Erro ao realizar doação:', error);
        },
      });
  }

  onFechar() {
    this.activeModal.close();
  }
}
