import { Component, OnInit, ViewChild } from '@angular/core';
import { StationDataService, StationData } from '../../services/station-data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'; // Import module
import { MatSortModule } from '@angular/material/sort'; // Import module
import { MatPaginatorModule } from '@angular/material/paginator'; // Import module

@Component({
  selector: 'app-weather-stations-component',
    imports: [
    CommonModule,
    MatTableModule, // Use module instead of class
    MatSortModule,  // Use module instead of class
    MatPaginatorModule // Use module instead of class
  ],
  templateUrl: './weather-stations-component.html',
  styleUrls: ['./weather-stations-component.scss']
})
export class WeatherStationsComponent implements OnInit {
  displayedColumns: string[] = ['sl', 'name', 'contact'];
  dataSource = new MatTableDataSource<StationData>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private stationDataService: StationDataService) {}

  ngOnInit() {
    this.dataSource.data = this.stationDataService.stationData;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
