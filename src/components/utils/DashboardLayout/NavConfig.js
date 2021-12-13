import PieChartIcon from "@mui/icons-material/PieChart";
import FaceIcon from "@mui/icons-material/Face";
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

//nav bar options
const NavConfig = [
  {
    title: "home",
    path: "/app/home",
    icon: PieChartIcon,
  },
  {
    title: "participants",
    path: "/app/participants",
    icon: AccountBalanceIcon,
  },
  {
    title: "events list",
    path: "/app/events",
    icon: AccountBalanceIcon,
  },
  {
    title: "shedule",
    path: "/app/shedule",
    icon: AccountBalanceIcon,
  },
  {
    title: "markentry",
    path: "/app/markentry",
    icon: AccountBalanceIcon,
  },
  {
    title: "departments point",
    path: "/app/department",
    icon: AccountBalanceIcon,
  },
  {
    title: "teacher",
    path: "/app/teacher",
    icon: FaceIcon,
  },
  {
    title: "student",
    path: "/app/student",
    icon: PersonIcon,
  },  
];

export default NavConfig;
