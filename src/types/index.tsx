export type Friend = {
  id: string;
  name: string;
};

export type Message = {
  sender: "me" | "friend";
  text: string;
};

export type MessageStore = {
  [friendId: string]: Message[];
};
