import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: User = new User();
  
  constructor(private accountService: AccountService,private router: Router) { }

  ngOnInit() {
    
  }

  login(form: NgForm) {
    let logged= this.accountService.login(this.model)
    if(logged)
    {
      this.router.navigate([""]);
    }
   

  }

}
