import { Component, OnInit , Input} from '@angular/core';
import {ChatService} from '../Services/chat.service';
import {AuthService} from '../Services/auth.service';
import {Message} from '../Models/Message';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input()  chatMessage: Message;
  userEmail: string;
  userName: string;
  messageContent: string;
  timeStamp: Date = new Date();
  isOwnMessage : boolean;


  constructor() { }

  ngOnInit(chatMessage = this.chatMessage) {
    this.messageContent = chatMessage.message;
    this.timeStamp = chatMessage.timeSent;
    this.userName = chatMessage.userName;
    this.userEmail = chatMessage.email;
  
  }

}
