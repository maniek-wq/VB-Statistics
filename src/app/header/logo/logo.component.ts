import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css',
})
export class LogoComponent {
  logoUrl: string | ArrayBuffer | null = '';
  hideInput = true;
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.logoUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  hideButton() {
    if (confirm('Czy na pewno wszystko jest poprawne?')) {
      this.hideInput = false;
    }
  }
}
