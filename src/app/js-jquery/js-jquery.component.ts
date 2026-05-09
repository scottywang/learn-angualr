import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 必須引入
import $ from 'jquery';

@Component({
  selector: 'app-js-jquery',
  standalone: true,
  imports: [CommonModule, FormsModule], // 記得加這裡
  templateUrl: './js-jquery.component.html',
  styleUrls: ['./js-jquery.component.scss']
})
export class JsJqueryComponent implements AfterViewInit {
  // 原本的變數
  isAngularRed = false;

  // 1. [(ngModel)] 用變數
  userName = '';

  // 2. [ngClass] 用變數
  status = 'disabled'; // active | disabled
  isPillMode = false;

  // 3. [ngStyle] 用變數
  fontSize = 16;

  ngAfterViewInit() {
    const vanillaBtn = document.getElementById('vanillaBtn');
    vanillaBtn?.addEventListener('click', () => {
      alert('這是原生 JS 的 Alert！');
    });
  }

  useJquery() {
    $('#jqueryBox').css('background-color', 'orange');
    $('#jqueryBox').text('被 jQuery 改變了！');
  }

  useAngular() {
    this.isAngularRed = !this.isAngularRed;
  }
}