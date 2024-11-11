import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppbarComponent } from "../components/app-bar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppbarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'loginProject';
}
