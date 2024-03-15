export default {
  authors: [
    {
      id: 123,
      name: "ABC",
    },
    {
      id: 321,
      name: "Man Sinh",
    },
  ],
  folders: [
    {
      id: "1",
      name: "Home",
      createdAt: "2023-11-18T03:42:13Z",
      authorId: 123,
    },
    {
      id: "2",
      name: "New Folder",
      createdAt: "2023-10-18T03:42:13Z",
      authorId: 321,
    },
    {
      id: "3",
      name: "Work",
      createdAt: "2023-09-18T03:42:13Z",
      authorId: 123,
    },
  ],
  notes: [
    {
      id: "123",
      content: "<p>Go to supermarket</p>",
      folderId: "1",
    },
    {
      id: "234",
      content: "<p>Go to park</p>",
      folderId: "1",
    },
    {
      id: "123",
      content: "<p>Go to school</p>",
      folderId: "2",
    },
  ],
};
