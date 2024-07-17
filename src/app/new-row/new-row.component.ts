import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { PlayersListComponent } from '../body/players-list/players-list.component';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../header/logo/logo.component';
import { StateService } from '../../state.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-new-row',
  standalone: true,
  templateUrl: './new-row.component.html',
  styleUrl: './new-row.component.css',
  imports: [
    PlayersListComponent,
    CommonModule,
    LogoComponent,
  ],
})
export class NewRowComponent implements OnInit {
  className = String;

  @Input() rowData: any;
  @Input() rowIndex!: number;
  @Output() rowRemoved = new EventEmitter<number>();

  isFinished: boolean = true;
  elementHeight: string = "25px";

  constructor(private stateService: StateService) {
    this.setElementHeight();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.setElementHeight();
  }
  private setElementHeight() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    console.log('Current width:', width);
    console.log('Current height:', height);
    if (height <= 768 && width <= 1366) { // Przykładowy zakres dla laptopów
      this.elementHeight = '22px'; // Wysokość dla laptopów
    } else {
      this.elementHeight = '25px'; // Domyślna wysokość
    }
  }
  ngOnInit() {
    this.stateService.isFinished$.subscribe((state) => {
      this.isFinished = state;
    });
  }
  removeRow() {
    if (confirm('Na pewno chcesz usunąć ten wiersz?')) {
      this.rowRemoved.emit(this.rowIndex);
    }
  }
 
}
