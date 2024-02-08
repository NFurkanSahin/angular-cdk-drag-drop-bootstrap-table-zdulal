import { Component, OnInit } from '@angular/core';
import { TableDragService } from './table-drag.service';
import { User } from './user';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-table-drag',
  templateUrl: './table-drag.component.html',
  styleUrls: ['./table-drag.component.scss'],
  providers: [TableDragService],
})
export class TableDragComponent implements OnInit {
  users: User[];

  constructor(private userApi: TableDragService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userApi.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.users, event.previousIndex, event.currentIndex);
    this.users.forEach((user, idx) => {
      user.order = idx + 1;
    });
  }
}
