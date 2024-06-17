import { Component } from '@angular/core';
import { NewPlayerComponent } from '../../new-player/new-player.component';
import { NewRowComponent } from '../../new-row/new-row.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-players-list',
  standalone: true,
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.css',
  imports: [NewPlayerComponent, NewRowComponent, CommonModule],
})
export class PlayersListComponent {
  rows: number[] = [];
  isExisting = true;
  addRow() {
    this.rows.push(this.rows.length + 1);
    if (this.rows.length >= 18) {
      window.alert(
        'Liczba zawodników jest większa niż przewidywana, czy chcesz kontynuować dodawanie zawodników?'
      );
    }
  }
  removeRow(index: number) {
    if (index > -1) {
      this.rows.splice(index, 1);
    }
  }
}
