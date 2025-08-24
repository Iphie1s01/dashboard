import { AiOutlineFile } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { BsCheckSquare, BsExclamationSquare } from "react-icons/bs";
import { GiRoundStar } from "react-icons/gi";

export const mockData = {
  summary: {
    completed: 1,
    updated: 10,
    created: 0,
    due: 0,
  },

  statusOverview: [
    {
      id: "stakeholder",
      label: "Stakeholder to define",
      value: 34,
      color: "#68D5F8",
    },
    { id: "inProgress", label: "In Progress", value: 0, color: "#4A9CFF" },
    {
      id: "awaitingReview",
      label: "Awaiting Dev Review",
      value: 0,
      color: "#FFA500",
    },
    { id: "uat", label: "UAT", value: 0, color: "#FF69B4" },
    {
      id: "internalTesting",
      label: "Internal Testing",
      value: 3,
      color: "#FFA500",
    },
    { id: "review", label: "Review", value: 5, color: "#FF69B4" },
  ],

  recentActivity: [
    {
      user: "seyi ogunbowale",
      userInitials: "SO",
      action: "changed",
      task: "Search and Filter for Products",
      taskId: "RT52",
      timeAgo: "1 minute ago",
      isToday: true,
    },
    {
      user: "Shantanu Nama",
      userInitials: "SN",
      action: "changed",
      task: "Fulfill Delivery Orders W/O LMF",
      taskId: "RT67",
      timeAgo: "about 18 hours ago",
      isToday: false,
    },
    {
      user: "Shantanu Nama",
      userInitials: "SN",
      action: "commented",
      task: "Admin - Change Order",
      taskId: "RT66",
      timeAgo: "about 20 hours ago",
      isToday: false,
    },
  ],

  priorityBreakdown: [
    { priority: "Highest", count: 1, color: "#FF5630" },
    { priority: "High", count: 2, color: "#FF7452" },
    { priority: "Medium", count: 3, color: "#FFC400" },
    { priority: "Low", count: 4, color: "#4C9AFF" },
    { priority: "Lowest", count: 60, color: "#6B778C" },
  ],

  typesOfWork: [
    {
      type: "Story",
      percentage: 44,
      icon: AiOutlineFile,
      color: "#36B37E",
    },
    {
      type: "Sub-task",
      percentage: 44,
      icon: BsCheckSquare,
      color: "#4C9AFF",
    },
    {
      type: "Epic",
      percentage: 8,
      icon: GiRoundStar,
      color: "#9747FF",
    },
    {
      type: "Bug",
      percentage: 2,
      icon: BsExclamationSquare,
      color: "#FF5630",
    },
    {
      type: "Task",
      percentage: 2,
      icon: BiTask,
      color: "#4BADE8",
    },
  ],

  teamWorkload: [
    {
      assignee: "Unassigned",
      initials: "UN",
      distribution: 53,
      bgColor: "#6B778C",
    },
    {
      assignee: "ES",
      initials: "ES",
      distribution: 15,
      bgColor: "#FF991F",
    },
    {
      assignee: "VL",
      initials: "VL",
      distribution: 12,
      bgColor: "#FF5630",
    },
    {
      assignee: "SN",
      initials: "SN",
      distribution: 10,
      bgColor: "#FF8F73",
    },
    {
      assignee: "LR",
      initials: "LR",
      distribution: 10,
      bgColor: "#FFA700",
    },
  ],

  epicProgressData: [
    {
      epic: "RT5",
      done: 11,
      inProgress: 6,
      toDo: 83,
    },
    {
      epic: "RT22",
      done: 0,
      inProgress: 100,
      toDo: 0,
    },
    {
      epic: "RT20",
      done: 50,
      inProgress: 50,
      toDo: 0,
    },
  ],
};
