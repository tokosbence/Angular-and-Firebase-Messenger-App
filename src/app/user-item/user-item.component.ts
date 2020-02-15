import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../Services/chat.service';
import { User } from '../Models/User';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
