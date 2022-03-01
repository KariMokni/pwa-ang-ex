import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Convertisseur unitées';
  tabs : any = [{label: "Devise", link: "/a"}, {label: "Distance", link: "/b"}]
}
