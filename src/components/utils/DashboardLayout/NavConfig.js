import PieChartIcon from "@mui/icons-material/PieChart";
import InfoIcon from '@mui/icons-material/Info';
import ViewListIcon from '@mui/icons-material/ViewList';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PeopleIcon from '@mui/icons-material/People';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

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
    icon: PeopleIcon,
  },
  {
    title: "Participants Data",
    path: "/app/participantsdata",
    icon: AppRegistrationIcon,
  },
  {
    title: "events list",
    path: "/app/events",
    icon: ViewListIcon,
  },
  {
    title: "shedule",
    path: "/app/shedule",
    icon: DateRangeIcon,
  },
  {
    title: "mark entry",
    path: "/app/markentry",
    icon: AddCircleIcon,
  },
  {
    title: "departments point",
    path: "/app/department",
    icon: EqualizerIcon,
  },
  {
    title: "details",
    path: "/app/details",
    icon: InfoIcon,
  }, 
];

export default NavConfig;
