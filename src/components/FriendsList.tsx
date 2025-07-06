import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider
} from "@mui/material";
import { Friend, MessageStore } from "../types";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FriendsListStyled } from "./styles";

export const getInitials = (name: string) => {
  return name
    .split(" ")
    .map(word => word[0])
    .join("")
    .toUpperCase();
};

export default function FriendsList(props: {
  friends: Friend[];
  setSelectedFriend: any;
  messages: MessageStore;
}) {
  const { friends, setSelectedFriend, messages } = props;
  const [showList, setShowList] = useState<boolean>(true);

  return (
    <FriendsListStyled
      sx={{
        height: showList ? "80%" : "10%"
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 16
        }}
        onClick={() => setShowList(prev => !prev)}
      >
        <Typography variant="h6">Friends</Typography>
        {showList ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
      </Box>
      <Divider />
      {showList && (
        <List sx={{ height: "90%", overflow: "scroll" }}>
          {friends.map((friend: Friend, index: number) => {
            const lastMessage = messages[friend.id]?.slice(-1)[0];
            const previewText = lastMessage
              ? lastMessage.text.slice(0, 30) +
                (lastMessage.text.length > 30 ? "…" : "")
              : "";
            // const time = lastMessage ? format(new Date(), "p") : ""; // Replace `new Date()` with actual timestamp if available
            return (
              <Box key={friend.id}>
                <ListItem
                  key={friend.id}
                  // button
                  // selected={selectedFriend?.id === friend.id}
                  onClick={() => {
                    setSelectedFriend(friend);
                  }}
                  sx={{ cursor: "pointer", paddingLeft: 0, paddingRight: 0 }}
                >
                  <ListItemAvatar>
                    <Avatar>{getInitials(friend.name)}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography fontWeight={600}>{friend.name}</Typography>
                      </Box>
                    }
                    secondary={
                      <Typography noWrap>
                        {previewText || "No messages yet"}
                      </Typography>
                    }
                  />
                </ListItem>
                {index < friends.length - 1 && <Divider component="li" />}
              </Box>
            );
          })}
        </List>
      )}
    </FriendsListStyled>
  );
}
