import { Component, HostListener } from '@angular/core';
import { routerTransition } from './router.animations';
import { fadeAnimation } from './fade.animation';


@Component({
  selector: 'app-root',
  animations: [ routerTransition, fadeAnimation ],
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  menu = false;
  // change the animation state
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.state
  }

  hideMenu() {
    this.menu = !this.menu;
  }

}
