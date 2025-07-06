import { styled } from "@mui/material/styles";
import { Box, Paper, Typography, IconButton } from "@mui/material";

export const ChatContainer = styled(Box)(() => ({
  position: "fixed",
  bottom: 5,
  right: 20,
  height: "75vh",
  width: "25vw",
  maxWidth: 360,
  backgroundColor: "#fff",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  borderRadius: 8,
  display: "flex",
  flexDirection: "column",
  zIndex: 1300
}));

export const MessageBubble = styled(Typography)(() => ({
  display: "inline-block",
  padding: "8px 12px",
  borderRadius: 16,
  fontSize: "14px"
}));

export const ChatMessagesContainer = styled(Paper)({
  flex: 1,
  padding: "16px",
  overflowY: "auto",
  marginBottom: "16px",
  backgroundColor: "#fafafa"
});

export const ChatHeader = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 10,
  backgroundColor: "#f1f1f1",
  borderBottom: "1px solid #ddd",
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8
}));

export const ChatContent = styled(Box)(() => ({
  flex: 1,
  overflowY: "auto",
  padding: 10
}));

export const ChatInputArea = styled(Box)(() => ({
  padding: 10,
  borderTop: "1px solid #ddd"
}));

export const ListHeader = styled(Box)({
  borderBottom: "1px solid #ddd",
  backgroundColor: "#fff",
  fontWeight: 600,
  fontSize: "16px",
  display: "flex",
  justifyContent: "space-between",
  padding: 16
});

export const ScrollableList = styled(Box)({
  flex: 1,
  overflowY: "auto"
});

export const FriendsListStyled = styled(Box)(() => ({
  width: "20%",
  zIndex: 2,
  position: "fixed",
  bottom: 0,
  margin: "0 auto",
  backgroundColor: "#f5f5f5",
  padding: 0,
  display: "flex",
  flexDirection: "column",
  // overflowY: "auto",
  borderRight: "1px solid #ddd",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" // ✨ custom shadow
}));
