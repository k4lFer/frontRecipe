import { Component,inject } from '@angular/core';
import { NgbModal,NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import{RegisterComponent}from'../../auth/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private  modalService= inject(NgbModal)
  openregistro(){
  
    this.modalService.open(RegisterComponent);
  }
}