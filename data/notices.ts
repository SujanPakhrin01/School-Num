export interface Notice {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  description?: string;
}

export const notices: Notice[] = [
  // Add your notices here
  // Example:
  // {
  //   id: "1",
  //   title: "Third Terminal Examination Notice",
  //   date: "2082/11/15",
  //   imageUrl: "/notices/exam-notice.jpg",
  //   description: "Terminal examination schedule"
  // }
];

export const hasNotices = () => notices.length > 0;
export const getAllNotices = () => notices;
