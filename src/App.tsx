import React, { useState } from "react";
import { Box } from "@mui/material";
import { Friend, MessageStore } from "./types";
import FriendsList from "./components/FriendsList";
import ChatWindow from "./components/ChatWindow";

const friends: Friend[] = [
  { id: "1", name: "Ramesh Mehta" },
  { id: "2", name: "John Deo" },
  { id: "3", name: "Charlie Williams" },
  { id: "4", name: "Rahul Mehta" },
  { id: "5", name: "Sachin Deo" },
  { id: "6", name: "Curl Williams" },
  { id: "7", name: "Paul Mehta" },
  { id: "8", name: "Arjun Deo" },
  { id: "9", name: "Jack Williams" },
  { id: "10", name: "Bijay Mehta" },
  { id: "12", name: "Magie Deo" },
  { id: "13", name: "Richie Williams" },
  { id: "14", name: "Manoj Mehta" },
  { id: "25", name: "Kamosh Deo" },
  { id: "36", name: "April Williams" },
  { id: "17", name: "Augus Mehta" },
  { id: "28", name: "Maya Deo" },
  { id: "39", name: "Jae Williams" }
];

const App = () => {
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const [messages, setMessages] = useState<MessageStore>({});

  return (
    <Box display="flex" height="100vh">
      {/* Chat Window */}
      <ChatWindow
        selectedFriend={selectedFriend}
        messages={messages}
        setMessages={setMessages}
        setSelectedFriend={setSelectedFriend}
      />
      <FriendsList
        friends={friends}
        setSelectedFriend={setSelectedFriend}
        messages={messages}
      />
    </Box>
  );
};

export default App;
