import Home from "./components/pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./components/utils/DashboardLayout";
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
import SignUp from "./components/pages/Users/SignUp";
import Login from "./components/pages/Users/Login";
import ForgotPassword from "./components/pages/Users/ForgotPassword";
import RecoverPassword from "./components/pages/Users/RecoverPassword";
import DepartmentPoints from "./components/pages/Department/View/DepartmentPoints";
import ParticipantList from "./components/pages/Participants/View/ParticipantList";
import SheduleList from "./components/pages/Shedule/View/SheduleList";
import AddShedule from "./components/pages/Shedule/Add/AddShedule";
import MarkView from "./components/pages/MarkEntry/View/MarkView";
import AddMark from "./components/pages/MarkEntry/Add/AddMark";
import EventsAdd from "./components/pages/Events/Add/EventsAdd";
import EventsList from "./components/pages/Events/View/EventsList";
import AddDetails from "./components/pages/SetDetails/Add/AddDetails";
import ViewDetails from "./components/pages/SetDetails/View/ViewDetails";
import UserHome from "./components/pages/Users/UserHome/UserHome";
import UserShedule from "./components/pages/Users/UserShedule/UserShedule";
import ResultList from "./components/pages/Users/ResultList/ResultList";
import UserRegister from "./components/pages/Users/UserRegister/UserRegister";
import AssignEventList from "./components/pages/Users/AssignEvent/Add/AssignEventList";
import IndividualEventList from "./components/pages/Users/AssignEvent/View/IndividualEventList";

function App() {
  return (
    <ThemeConfig>
      <GlobalStyles />
      <Routes>
        {/* Home routes (Dashboard) */}
        <Route path="/app" element={<DashboardLayout />}>
          <Route path="/app" element={<Navigate to="/app/home" />} />
          <Route path="home" element={<Home />} />

          <Route path="/app/department" element={<DepartmentPoints />} />

          {/*participants list */}
          <Route path="/app/participants" element={<ParticipantList />} />

          {/*shedule list */}
          <Route path="shedule">
            <Route path="/app/shedule" element={<SheduleList />} />
            <Route path="add" element={<AddShedule />} />
            <Route />
          </Route>

          {/*Set Details */}
          <Route path="details">
            <Route path="/app/details" element={<ViewDetails />} />
            <Route path="add" element={<AddDetails />} />
          </Route>

          {/*events list */}
          <Route path="events">
            <Route path="/app/events" element={<EventsList />} />
            <Route path="add" element={<EventsAdd />} />
            <Route />
          </Route>

          <Route path="markentry">
            <Route path="/app/markentry" element={<MarkView />} />
            <Route path="add" element={<AddMark />} />
          </Route>
        </Route>

        {/* user routes */}
        <Route path="/" element={<Login />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="forgot" element={<ForgotPassword />} />
          <Route path="recover" element={<RecoverPassword />} />
          <Route path="shedule" element={<UserShedule />} />
          <Route path="assignprogram" element={<AssignEventList />} />
          <Route path="eventlist" element={<IndividualEventList />} />
          <Route path="home" element={<UserHome />} />
          <Route path="result" element={<ResultList />} />
          <Route path="register" element={<UserRegister />} />
        </Route>
      </Routes>
    </ThemeConfig>
  );
}

export default App;
