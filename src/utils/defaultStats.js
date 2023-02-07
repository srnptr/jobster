import { FaBug, FaCalendarCheck, FaSuitcaseRolling } from "react-icons/fa";

const defaultStats = [
  {
    icon: <FaSuitcaseRolling />,
    title: "pending applications",
    color: "#e9b949",
    bcg: "#fcefc7",
  },
  {
    icon: <FaCalendarCheck />,
    title: "interviews scheduled",
    color: "#647acb",
    bcg: "#e0e8f9",
  },
  {
    icon: <FaBug />,
    title: "jobs declined",
    color: "#d66a6a",
    bcg: "#ffeeee",
  },
];

export default defaultStats;
