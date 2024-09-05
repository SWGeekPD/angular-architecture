import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticated = false;

  // Simulate a login
  login(): void {
    this.isAuthenticated = true;
  }

  // Simulate a logout
  logout(): void {
    this.isAuthenticated = false;
  }

  // Check if the user is authenticated
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
  getAuthToken(): boolean {
    return true;
  }
}
