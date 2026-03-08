export interface Notice {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  refNo?: string;
}

export const notices: Notice[] = [
  // Add your notices here, or leave empty if no notices
  // Example:
  // {
  //   id: "1",
  //   title: "Third Terminal Examination",
  //   date: "2082/11/15",
  //   imageUrl: "/notices/notice1.jpg",
  //   refNo: "123"
  // }
];

export const hasActiveNotices = () => notices.length > 0;
export const getLatestNotice = () => notices[0] || null;
