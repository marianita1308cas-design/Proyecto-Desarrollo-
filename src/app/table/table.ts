
import { Component, Input, OnChanges } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table implements OnChanges {

  @Input() data: any[] = [];

  columns: string[] = [];

  ngOnChanges(): void {
    if (this.data && this.data.length > 0) {
      this.columns = Object.keys(this.data[0]);
    } else {
      this.columns = [];
    }
  }
}

