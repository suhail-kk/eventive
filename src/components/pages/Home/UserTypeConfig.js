import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EventNoteIcon from '@mui/icons-material/EventNote';
import DateRangeIcon from '@mui/icons-material/DateRange';
const UserTypeConfig =[
    {
        title:'Participants',
        Icon:SupervisorAccountIcon,
        colorType:"primary"
    },
    {
        title:'Events',
        Icon:EventNoteIcon,
        colorType:"error"
    },
    {
        title:'Departments',
        Icon:AccountBalanceIcon,
        colorType:"info"
    },{
        title:"Days",
        Icon:DateRangeIcon,
        colorType:"warning"
    }
]

export default UserTypeConfig;