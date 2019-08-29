import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthUserService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  info: any;
  userForService: User;
  private ts:Subscription;
  private name: string;
  private image: string;
  private roles: string[];
  public authority: string;

  constructor(private token: TokenStorageService, 
              public router: Router, 
              private authService: AuthUserService, 
              ) { }

  ngOnInit() {
    
    if (this.token.getToken()) {
      this.info = {
        token: this.token.getToken(),
        username: this.token.getUsername(),
        authorities: this.token.getAuthorities(),
      };
    } else {
      this.info = {
        token: this.token.getTokenSession(),
        username: this.token.getUsernameSession(),
        authorities: this.token.getAuthoritiesSession()
      };
    }

    if (this.token.getToken()) {
      this.roles = this.token.getAuthorities();
      this.name = this.token.getUsername();
      this.ts = this.authService.getUserByName(this.name).subscribe(data => {
        this.userForService = data;
        console.log(this.userForService)
      })
      console.log(this.token.getUsername)
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
    else {
      this.roles = this.token.getAuthoritiesSession();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }

  logout() {
    if (this.token.getToken()) {
      this.token.signOut();
      this.router.navigate(['/homepage/auth/login'])
        .then(() => {
          window.location.reload();
        });
    } else {
      this.token.signOut1();
      this.router.navigate(['/homepage/auth/login'])
        .then(() => {
          window.location.reload();
        });
    }
  }


}
