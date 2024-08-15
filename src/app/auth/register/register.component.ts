import { Component,inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import{User} from '../../core/models/user';
import { NgbModule ,NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import{LoginComponent}from '../login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule,NgbModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(public activeModal: NgbActiveModal) {}

  user = {
    username: '',
    email: '',
    password: ''
  };
  private  modalService= inject(NgbModal)
  openregistro(){
  
    this.modalService.open(LoginComponent);
  }

  closeModal() {
    this.activeModal.close();  }

  onSubmit() {
    console.log('User:', this.user);
  }

  login() {
    this.modalService.open(LoginComponent);
    this.activeModal.close(); 
  }
}
