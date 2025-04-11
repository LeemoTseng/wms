import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [PaginatorModule, FormsModule],
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
  gotoPage: number = 1;

  @Input() first: number = 0;
  @Input() rows: number = 10;
  @Input() totalRecords: number = 0;
  @Input() rowsPerPageOptions: number[] = [10, 30, 50, 100];

  @Output() onPageChange = new EventEmitter<PaginatorState>();

  emitPageChange(event: PaginatorState) {
    this.onPageChange.emit(event);
  }

  get totalPages(): number {
    return Math.ceil(this.totalRecords / this.rows);
  }

  goToPage() {
    if (this.gotoPage >= 1 && this.gotoPage <= this.totalPages) {
      const newFirst = (this.gotoPage - 1) * this.rows;
      this.emitPageChange({ first: newFirst, rows: this.rows, page: this.gotoPage - 1 });
    }
  }
}