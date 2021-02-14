import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_service/data-service.service';
declare var $:any;
// import { init as initWebex } from 'webex';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sales';
  // newMessage: string;
  // messageList:  string[] = [];

  constructor(private dataService:DataService){

  }

  // sendMessage() {
  //   let messages = document.getElementById("messages");
  //   let li = document.createElement("li");
  //   this.dataService.sendMessage('chat message', $("#message").val());
  //   messages.appendChild(li).append($("#message").val());
  //   let span = document.createElement("span");
  //   messages.appendChild(span).append("by " + "Anonymous" + ": " + "just now");
  //   $("#message").val("");


  //   let message = this.dataService.getMessages('received');
  //   console.log("===============>>>>",message);
  //   messages.appendChild(li).append($("#message").val());
  //   messages.appendChild(span).append("by " + "Anonymous" + ": " + "just now");
  // }

  // ngOnInit() {
  //     // let message = this.dataService.getMessages('chat message');
  //     // this.messageList.push(message);
  //     this.getMessage();
  // }


  // public getMessage(){
  //   let messages = document.getElementById("messages");
  //   this.dataService.get('chats').subscribe(res=>{
  //     console.log("res=============>>>>",res);
  //     res['chat'].map(data => {
  //       let li = document.createElement("li");
  //       let span = document.createElement("span");
  //       messages.appendChild(li).append(data.message);
  //       messages
  //         .appendChild(span)
  //         // .append("by " + data.sender + ": " + formatTimeAgo(data.createdAt));
  //     });
  //   })
  // }
  

  // public webex() {
  //   // Initialize the SDK and make it available to the window
  //   const webex = (window.webex = initWebex({
  //     credentials: {
  //       access_token: '<your webex access token>'
  //     }
  //   }));

  //   // Create a room with the title "My First Room"
  //   webex.rooms.create({
  //     title: 'My First Room!'
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  // // Filter for "My First Room" from the last 10 rooms
  // webex.rooms.list({
  //     max: 10
  //   })
  //   .then((rooms) => {
  //     // Destructure room properties for its id (aliased to roomId) and title
  //     const { id: roomId, title } = rooms.items.filter(
  //       room => room.title === 'My First Room!'
  //     )[0];

  //     // Post message "Hello World!" to "My First Room!"
  //     webex.messages.create({
  //       roomId,
  //       text: 'Hello World!'
  //     });

  //     // Log the the room name and the message we created
  //     return webex.messages
  //       .list({ roomId, max: 1 })
  //       // Destructure promised value to get the text property from the first item in items array
  //       .then(({ items: [{ text }] }) =>
  //         console.log(`Last message sent to room "${title}": ${text}`)
  //       );
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // }
}

