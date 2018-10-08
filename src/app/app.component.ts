import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private isShownSuccess = false;
  private isShownFailure = false;

  onSuccess() {
    console.log('success');
    this.isShownSuccess = true;
    this.isShownFailure = false;
  }
  onFailure() {
    console.log('failure');
    this.isShownSuccess = false;
    this.isShownFailure = true;
  }
}
