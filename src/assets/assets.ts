import logo from "./logo.svg";
import assignment from "./assignment.svg";
import avatar from "./avatar.svg";
import calendar from "./Calendar.svg";
import caretDown from "./CaretDown.svg";
import caretDown1 from "./CaretDown1.svg";
import classes from "./classes.svg";
import courses from "./courses.svg";
import dashboard from "./dashboard.svg";
import discussion from "./discussion.svg";
import download from "./download.svg";
import frame1 from "./Frame1.svg";
import frame2 from "./Frame2.svg";
import frame3 from "./Frame3.svg";
import note from "./Note.svg";
import recording from "./recording.svg";
import resources from "./resources.svg";
import searchIcon from "./searchIcon.svg";
import setting from "./setting.svg";
import pen from "./pen.svg";
import redFile from "./redfile.svg";
import blueFile from "./bluefile.svg";
import greenFile from "./greenfile.svg";
import avatar1 from "./avatar1.svg";
import avatar2 from "./avatar2.svg";
import avatar3 from "./avatar3.svg";
import avatar4 from "./avatar4.svg";
import avatar5 from "./avatar5.svg";
import avatar6 from "./avatar6.svg";
import Design from "./Design.png";
import Figma from "./Figma.png";
import GraduationCap from "./GraduationCap.png";
import Interaction from "./Interaction.png";
import Rectangle1 from "./Rectangle1.jpg";
import Rectangle2 from "./Rectangle2.jpg";
import Rectangle3 from "./Rectangle3.jpg";
import Rectangle4 from "./Rectangle4.jpg";
import watch from "./watch.svg";
import downloads from "./downloads.svg";
import Form from "./Form.svg";
import Clock from "./Clock.svg";
import cardImage1 from "./cardImage1.jpg";
import cardImage2 from "./cardImage2.jpg";
import cardImage3 from "./cardImage3.jpg";

export const assets = {
  logo,
  assignment,
  avatar,
  calendar,
  caretDown,
  caretDown1,
  classes,
  courses,
  dashboard,
  discussion,
  download,
  frame1,
  frame2,
  frame3,
  note,
  recording,
  resources,
  searchIcon,
  setting,
  pen,
  redFile,
  blueFile,
  greenFile,
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  Design,
  Figma,
  GraduationCap,
  Interaction,
  Rectangle1,
  Rectangle2,
  Rectangle3,
  Rectangle4,
  watch,
  downloads,
  Form,
  Clock,
  cardImage1,
  cardImage2,
  cardImage3,
};

export const sliderManu = [
  { name: "Dashboard", icon: assets.dashboard, path: "/dashboard" },
  { name: "Assignments", icon: assets.assignment, path: "/assignments" },
  { name: "Schedule", icon: assets.calendar, path: "/schedule" },
  { name: "Recordings", icon: assets.recording, path: "/recordings" },
  { name: "Discussions", icon: assets.discussion, path: "/discussions" },
  { name: "Resources", icon: assets.resources, path: "/resources" },
  { name: "Notes", icon: assets.note, path: "/notes" },
  { name: "Downloads", icon: assets.download, path: "/downloads" },
  { name: "Classes", icon: assets.classes, path: "/classes" },
  { name: "Courses", icon: assets.courses, path: "/courses" },
  { name: "Settings", icon: assets.setting, path: "/settings" },
];

export const assignments = [
  {
    title: "Conducting User Research",
    course: "User Research and Per...",
    dueDate: "July 1, 2024",
    status: "Done",
    submit: "Submitted",
  },
  {
    title: "Competitive Analysis R...",
    course: "Competitive Analysis in...",
    dueDate: "July 25, 2024",
    status: "Progress",
    submit: "Upload",
  },
  {
    title: "Creating Wireframes",
    course: "Wireframing and Protot...",
    dueDate: "August 1, 2024",
    status: "Progress",
    submit: "Upload",
  },
  {
    title: "Usability Testing and F...",
    course: "Usability Testing and It...",
    dueDate: "August 22, 2024",
    status: "Pending",
    submit: "Upload",
  },
  {
    title: "Developing Visual Desi...",
    course: "Visual Design and Bran...",
    dueDate: "August 29, 2024",
    status: "Pending",
    submit: "Upload",
  },
  {
    title: "Creating a Design Syst...",
    course: "Design Systems and C...",
    dueDate: "September 5, 2024",
    status: "Pending",
    submit: "Upload",
  },
];

export const data = [
  {
    buttonText: ["Weekly", "Product"],
    title: "Product Team Meeting",
    paragraph: "This monthly progress agenda is following this items:",
    points: ["Introduction to Newest Product Plan", "Monthly Revenue updates for each"],
    avatar: assets.avatar1,
    name: "Floyd Miles",
    date: "Mar 5 04:25",
  },

  {
    buttonText: ["Monthly", "Business"],
    title: "Product Team Meeting",
    paragraph: "This monthly progress agenda is following this items:",
    points: ["Introduction to Newest Product Plan", "Monthly Revenue updates for each"],
    avatar: assets.avatar2,
    name: "Dianne Russell",
    date: "Apr 11 18:30",
  },

  {
    buttonText: ["Personal", "Business"],
    title: "HR Interview",
    paragraph: "This monthly progress agenda is following this items:",
    points: ["Introduction to Newest Product Plan", "Monthly Revenue updates for each"],
    avatar: assets.avatar3,
    name: "Annette Black",
    date: "Jun 23 14:31",
  },

  {
    buttonText: ["Monthly", "Product"],
    title: "Monthly Team Progress",
    points: ["Introduction to Newest Product Plan", "Monthly Revenue updates for each"],
    avatar: assets.avatar4,
    name: "Robert Fox",
    date: "Jan 31 09:53",
  },

  {
    buttonText: ["Monthly", "Business"],
    title: "Product Team Meeting",
    paragraph: "This monthly progress agenda is following this items:",
    points: ["Some Summaries of this weeks meeting with some conclusion we get :"],
    avatar: assets.avatar5,
    name: "Brooklyn Simmons",
    date: "Aug 15 10:29",
  },

  {
    buttonText: ["Personal"],
    title: "Document Images",
    points: ["Report Document of Weekly Meetings"],
    image: assets.cardImage1,
    avatar: assets.avatar6,
    name: "Cameron Williamson",
    date: "Dec 30 21:28",
  },

  {
    buttonText: ["Monthly", "Product"],
    title: "Monthly Team Progress",
    points: ["Introduction to Newest Product Plan", "Monthly Revenue updates for each"],
    avatar: assets.avatar4,
    name: "Robert Fox",
    date: "Jan 31 09:53",
  },

  {
    buttonText: ["Monthly", "Business"],
    title: "Product Team Meeting",
    paragraph: "This monthly progress agenda is following this items:",
    points: ["Some Summaries of this weeks meeting with some conclusion we get :"],
    avatar: assets.avatar5,
    name: "Brooklyn Simmons",
    date: "Aug 15 10:29",
  },

  {
    buttonText: ["Personal"],
    title: "Document Images",
    points: ["Report Document of Weekly Meetings"],
    image: assets.cardImage2,
    avatar: assets.avatar6,
    name: "Cameron Williamson",
    date: "Dec 30 21:28",
  },

  {
    buttonText: ["Badge", "Product"],
    title: "Weekly Team Progress",
    paragraph: "This weekly progress agenda is following this items:",
    points: ["Introduction to Newest Product Plan", "Monthly Revenue updates for each"],
    avatar: assets.avatar2,
    name: "Dianne Russell",
    date: "Apr 11 18:30",
  },

  {
    buttonText: ["Business"],
    title: "Revenue Progress",
    points: ["Report Document of Weekly Meetings"],
    image: assets.cardImage2,
    avatar: assets.avatar3,
    name: "Ronald Richards",
    date: "May 22 04:32",
  },

  {
    buttonText: ["Product"],
    title: "Monthly Products",
    points: ["Report Document of Weekly Meetings"],
    image: assets.cardImage3,
    avatar: assets.avatar6,
    name: "Albert Flores",
    date: "Oct 4 15:48",
  },
];

export const cardData = [
  {
    title: "Color Styles - 02",
    duration: "1:30hrs",
    lessons: "02 Lessons",
    image: assets.Rectangle1,
  },
  {
    title: "Design Thinking",
    duration: "2:30hrs",
    lessons: "02 Lessons",
    image: assets.Rectangle2,
  },
  {
    title: "Constructing Visual Design from Briefs",
    duration: "3:30hrs",
    lessons: "01 Lessons",
    image: assets.Rectangle3,
  },
  {
    title: "Curiosity for Terminology",
    duration: "4:00hrs",
    lessons: "02 Lessons",
    image: assets.Rectangle4,
  },
  {
    title: "Color Styles - 01",
    duration: "2:30hrs",
    lessons: "02 Lessons",
    image: assets.Rectangle1,
  },
];
