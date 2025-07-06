import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  IconButton,
  Avatar
} from "@mui/material";
import { Friend, MessageStore } from "../types";
import {
  ChatContainer,
  ChatHeader,
  ChatMessagesContainer,
  MessageBubble
} from "./styles";
import { getInitials } from "./FriendsList";

export default function ChatWindow(props: {
  selectedFriend: Friend | null;
  messages: MessageStore;
  setMessages: any;
  setSelectedFriend: any;
}) {
  const { selectedFriend, messages, setMessages, setSelectedFriend } = props;
  const [input, setInput] = useState("");

  const currentMessages = selectedFriend
    ? messages[selectedFriend.id] || []
    : [];

  const handleSend = () => {
    if (!input.trim() || !selectedFriend) return;

    setMessages((prev: MessageStore) => ({
      ...prev,
      [selectedFriend.id]: [
        ...(prev[selectedFriend.id] || []),
        { sender: "me", text: input }
      ]
    }));
    setInput("");
  };
  if (!selectedFriend) {
    return null;
  }
  return (
    <ChatContainer>
      <ChatHeader>
        <Avatar>{getInitials(selectedFriend.name)}</Avatar>
        <Typography variant="h6" gutterBottom>
          {selectedFriend?.name}
        </Typography>
        <IconButton size="small" onClick={() => setSelectedFriend(null)}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </ChatHeader>{" "}
      <ChatMessagesContainer>
        {currentMessages.map((msg, index) => (
          <Box
            key={index}
            textAlign={msg.sender === "me" ? "right" : "left"}
            mb={1}
          >
            <MessageBubble
              variant="body2"
              sx={{
                backgroundColor: msg.sender === "me" ? "#1976d2" : "#e0e0e0",
                color: msg.sender === "me" ? "#fff" : "#000"
              }}
            >
              {msg.text}
            </MessageBubble>
          </Box>
        ))}
      </ChatMessagesContainer>
      <Box display="flex" gap={1}>
        <TextField
          fullWidth
          size="small"
          placeholder="Type a message"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter") handleSend();
          }}
        />
        <Button variant="contained" onClick={handleSend}>
          Send
        </Button>
      </Box>
    </ChatContainer>
  );
}
