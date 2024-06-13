import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../header/logo/logo.component';

@Component({
  selector: 'app-new-player',
  standalone: true,
  imports: [CommonModule, LogoComponent],
  templateUrl: './new-player.component.html',
  styleUrl: './new-player.component.css',
})
export class NewPlayerComponent {
  [x: string]: any;

  isExisting = true;
  @Output() addRow = new EventEmitter<void>();
  onClick() {
    this.addRow.emit();
  }
}
