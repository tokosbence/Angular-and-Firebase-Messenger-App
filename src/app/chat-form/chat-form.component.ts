import { Component, OnInit } from '@angular/core';
import {ChatService} from '../Services/chat.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

  message: string;
  constructor(private chat: ChatService) { }

  ngOnInit() {
  }

  send(){
    this.chat.sendMessage(this.message);
    this.message = '';
  }

  handlerSubmit(event){
    if (event.keyCode === 13){
      this.send();
    }
  }
}
