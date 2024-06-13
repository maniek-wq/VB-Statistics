import { Component, Input } from '@angular/core';
import { ColorColumnComponent } from '../color-column/color-column.component';

@Component({
  selector: 'app-new-row',
  standalone: true,
  templateUrl: './new-row.component.html',
  styleUrl: './new-row.component.css',
  imports: [ColorColumnComponent],
})
export class NewRowComponent {
  @Input() rowData: any;
}
