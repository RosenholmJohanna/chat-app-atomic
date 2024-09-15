
export const mockUsers = [
    { id: 1, name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 2, name: "Jane Smith", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 3, name: "Mike Johnson", avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
  ];

export const mockConversations = [
    { convoId: "1", lastMessage: { text: "Hello from conversation 1", userId: 1 } },
    { convoId: "2", lastMessage: { text: "Hey, this is conversation 2", userId: 2 } },
  ];
  
  export const mockMessages = {
    1: [
      { id: "1", text: "Hi there!", userId: 1, createdAt: "2024-01-01" },
      { id: "2", text: "Hello!", userId: 2, createdAt: "2024-01-02" },
    ],
    2: [
      { id: "3", text: "How are you?", userId: 1, createdAt: "2024-01-03" },
      { id: "4", text: "I'm good!", userId: 2, createdAt: "2024-01-04" },
    ],
  };