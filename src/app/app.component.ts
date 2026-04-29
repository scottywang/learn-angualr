import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicSyntaxComponent } from './basic-syntax/basic-syntax.component';
import { StylePracticeComponent } from './style-practice/style-practice.component';
@Component({
  selector: 'app-root',
  imports: [ BasicSyntaxComponent,StylePracticeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-app';
}
