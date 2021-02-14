import { Component, OnInit } from '@angular/core';
import { DataService } from '../_service/data-service.service';

@Component({
  selector: 'app-chat-inbox',
  templateUrl: './chat-inbox.component.html',
  styleUrls: ['./chat-inbox.component.scss']
})
export class ChatInboxComponent implements OnInit {

  user:String;
  room:String;
  messageText:String;
  messageArray:Array<{user:String,message:String}> = [];
  constructor(private _chatService:DataService){
      this._chatService.newUserJoined()
      .subscribe(data=> this.messageArray.push(data));


      this._chatService.userLeftRoom()
      .subscribe(data=>this.messageArray.push(data));

      this._chatService.newMessageReceived()
      .subscribe(data=>this.messageArray.push(data));
  }

  ngOnInit(){

  }

  join(){
      this._chatService.joinRoom({user:this.user, room:this.room});
  }

  leave(){
      this._chatService.leaveRoom({user:this.user, room:this.room});
  }

  sendMessage()
  {
      this._chatService.sendMessage({user:this.user, room:this.room, message:this.messageText});
      this.messageText = ''
  }

}
