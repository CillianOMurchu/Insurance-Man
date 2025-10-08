import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class NotificationAlertsService {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string, className: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      panelClass: [className]
    });
  }

  warningAlert(message) {
    this.openSnackBar(message, null, 'red-snackbar');
  }

  public successAlert(message) {
    this.openSnackBar(message, null, 'red-snackbar');
  }
}
