import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  holidays: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getDays().subscribe(
      (data: any) => {
        this.holidays = data.response.holidays;
      },
      (error) => {
        console.error('Error fetching holidays:', error);
      }
    );
  }
}
