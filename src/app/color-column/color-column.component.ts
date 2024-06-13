import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-color-column',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './color-column.component.html',
  styleUrl: './color-column.component.css',
})
export class ColorColumnComponent {
  selectedColor: string = '#ffffff'; // Default color, can be any valid color value

  constructor() {}
}
