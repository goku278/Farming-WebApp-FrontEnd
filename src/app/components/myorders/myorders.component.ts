import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MyOrders } from 'src/app/model/myorders';
@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css'],
})
export class MyordersComponent implements OnInit {
  roleId = '';
  type = '';
  myOrders: any;
  orders: MyOrders[] = [];
  dataSource: any;
  ELEMENT_DATA: any;
  constructor(private service: ApiServiceService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.getAllOrders();
  }

  displayedColumns: string[] = ['id', 'name', 'image', 'cost', 'address'];

  public getAllOrders() {
    this.roleId = localStorage.getItem('roleId')!;
    this.type = localStorage.getItem('orderOrcart')!;
    this.service.getAllOrders(this.roleId, this.type).subscribe((data) => {
      this.myOrders = data;
      this.orders = data;
      this.dataSource = new MatTableDataSource<MyOrders>(this.orders);
      this.dataSource.paginator = this.paginator;
    });
  }
}
