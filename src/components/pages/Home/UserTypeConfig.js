import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import EventNoteIcon from "@mui/icons-material/EventNote";
import DateRangeIcon from "@mui/icons-material/DateRange";


const UserTypeConfig = [
  {
    title: "Participants",
    heading: "5",
    Icon: SupervisorAccountIcon,
    colorType: "primary",
  },
  {
    title: "Events",
    heading: "hh",
    Icon: EventNoteIcon,
    colorType: "error",
  },
  {
    title: "Departments",
    heading: "5",
    Icon: AccountBalanceIcon,
    colorType: "info",
  },
  {
    title: "Days",
    heading: "gg",
    Icon: DateRangeIcon,
    colorType: "warning",
  },
];

export default UserTypeConfig;
