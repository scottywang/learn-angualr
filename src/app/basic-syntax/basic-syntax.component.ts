import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 1. 引入這行 (為了 ngIf, ngFor)
import { FormsModule } from '@angular/forms'; // 2. 引入這行 (為了 ngModel)

@Component({
  selector: 'app-basic-syntax',
  standalone: true, // 3. 確認這行是 true (v19 預設是 true)
  imports: [CommonModule, FormsModule], // 4. 在這裡把工具加進來
  templateUrl: './basic-syntax.component.html',
  styleUrls: ['./basic-syntax.component.scss']
})
export class BasicSyntaxComponent {
  inputValues: string = '';
  isVisible: boolean = true;
  skills = [
    { name: 'Angular 19 Standalone', level: '最新' },
    { name: 'Component', level: '進階' },
    { name: 'Directives', level: '核心' }
  ];
  rawInput: string = '';
  processedResult: string = '';
  // 新增：處理邏輯
  processData() {
    if (this.rawInput.trim()) {
      // 模擬 TS 處理流程：例如轉大寫、加上時間戳、或進行計算
      const time = new Date().toLocaleTimeString();
      this.processedResult = `[已處理於 ${time}]：${this.rawInput.toUpperCase()}`;
      
      // 處理完後清空輸入框 (選配)
      this.rawInput = '';
    } else {
      alert('請先輸入內容！');
    }
  }
  set() {
    if(this.rawInput.trim()) {
      if(isNaN(Number(this.rawInput))) {
        this.processedResult = this.rawInput;
        return
      }
      var number = Number(this.rawInput);
      number = number + 1
      this.rawInput = number.toString();
    } else {
      alert('請先輸入內容！')
    }
  }

  toggle() {
    this.isVisible = !this.isVisible;
  }
}