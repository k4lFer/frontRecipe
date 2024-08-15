import { Component, inject } from '@angular/core';
import { NgbModule ,NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { NgForm } from '@angular/forms';
import{RegisterComponent}from'../../auth/register/register.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,NgbModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(public activeModal: NgbActiveModal) {}

  user = {
    username: '',
    password: ''
  };

  private  modalService= inject(NgbModal)
 
  closeModal() {
    this.activeModal.close();  }

  onSubmit() {
    console.log('User:', this.user);
  }
  register(){
    this.modalService.open(RegisterComponent);
    this.activeModal.close(); 

  }

}
