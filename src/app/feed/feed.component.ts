import { Component, OnInit, OnChanges } from '@angular/core';
import {ChatService} from '../Services/chat.service';
import  {Observable} from 'rxjs/Observable';
import  {Message} from '../Models/Message';
import { FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {

  feed : FirebaseListObservable<Message[]>;

  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.feed = this.chat.getMessages();
  }

  ngOnChanges(){
    this.feed = this.chat.getMessages();
  }
}
