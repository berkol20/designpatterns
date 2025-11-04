class ChatRoom {
  showMessage(user: User, message: string) {
    console.log(`${user.name}: ${message}`);
  }
}

class User {
  constructor(public name: string, private chatRoom: ChatRoom) {}
  send(message: string) {
    this.chatRoom.showMessage(this, message);
  }
}

const room = new ChatRoom();
const ali = new User("Bedirhan", room);
const ayşe = new User("Sude", room);

ali.send("Merhaba!");
ayşe.send("Selam Bedirhan!");
