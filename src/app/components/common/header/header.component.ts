import { Component } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  imgNoData = environment.images.noData;
  constructor(public auth: AuthService) {
  }

}
