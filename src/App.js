import Home from "./components/pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./components/utils/DashboardLayout";
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
// import TeachersList from "./components/pages/Teachers/View/TeachersList";
// import AddTeacher from "./components/pages/Teachers/Add/AddTeacher";
// import TeachersView from "./components/pages/Teachers/View/TeachersView";
// import StudentsList from "./components/pages/Students/view/StudentsList";
// import AddStudent from "./components/pages/Students/Add/AddStudents";
import PersonalDetails from "./components/pages/Students/Add/PersonalDetails";
import EducationalDetails from "./components/pages/Students/Add/EducationalDetails";
import FamilyDetails from "./components/pages/Students/Add/FamilyDetails";
import Register from "./components/pages/Users/Register";
import Login from "./components/pages/Users/Login";
import AuthLayout from "./components/utils/UserLayout/AuthLayout";
import ForgotPassword from "./components/pages/Users/ForgotPassword";
import RecoverPassword from "./components/pages/Users/RecoverPassword";
import Details from "./components/pages/Students/view/Details";
import ProfileProvider from "./context/profileContext";
import StudentProvider from "./context/studentContext";
import Dependencies from "./components/pages/Students/Add/Dependencies";
import DepartmentDetails from "./components/pages/Department/Dpt-details/DptDetails";
import Add from "./components/pages/Department/Add/Add";
import DptStudentList from "./components/pages/Department/List/DptStudentList";
import ParticipantList from "./components/pages/Participants/View/ParticipantList";
import SheduleList from "./components/pages/Shedule/View/SheduleList";
import AddShedule from "./components/pages/Shedule/Add/AddShedule";
import MarkView from "./components/pages/MarkEntry/View/MarkView";
import AddMark from "./components/pages/MarkEntry/Add/AddMark";
import ToDoFinalize from "./components/pages/MarkEntry/Add/ToDoFinalize"
import EventsAdd from "./components/pages/Events/Add/EventsAdd";
import EventsList from "./components/pages/Events/View/EventsList";
import AddDetails from "./components/pages/SetDetails/Add/AddDetails";
import ViewDetails from "./components/pages/SetDetails/View/ViewDetails";
import UserHome from "./components/pages/Users/UserHome/UserHome"
import UserShedule from "./components/pages/Users/UserShedule/UserShedule";
import ResultList from "./components/pages/Users/ResultList/ResultList";
import UserRegister from "./components/pages/Users/UserRegister/UserRegister";
import AssignEventList from "./components/pages/Users/AssignEvent/Add/AssignEventList";
import IndividualEventList from "./components/pages/Users/AssignEvent/View/IndividualEventList";

function App() {
  return (
    <ThemeConfig>
      <GlobalStyles />

      {/* Student data provider */}
      <StudentProvider>
        {/* User profile provider */}
        <ProfileProvider>
          <Routes>
            {/* Home routes (Dashboard) */}
            <Route path="/app" element={<DashboardLayout />}>
              <Route path="/app" element={<Navigate to="/app/home" />} />
              <Route path="home" element={<Home />} />


              <Route path="department">
                <Route
                  path="/app/department"
                  element={<Navigate to="/app/department/list" />}
                />
                <Route path="list" element={<DepartmentDetails />} />
                <Route path="details" element={<DptStudentList />} />
                <Route path="student/:id" element={<Details />} />
                <Route path="add" element={<Add />} />
              </Route>

              {/*participants list */}
              <Route path="/app/participants" element={<ParticipantList />} />

              {/*shedule list */}
              <Route path="shedule" >
                <Route path="/app/shedule" element={<SheduleList />}/>
                <Route path="add" element={<AddShedule />}/>
                <Route/>
              </Route>

              {/*Set Detail */}
              <Route path="details">
                <Route path="/app/details" element={<ViewDetails />}/>
                <Route path="add" element={<AddDetails />}/>
              </Route>
              
              {/*events list */}
              <Route path="events" >
                <Route path="/app/events" element={<EventsList />}/>
                <Route path="add" element={<EventsAdd />}/>
                <Route/>
              </Route>


              <Route path="markentry" >
                <Route path="/app/markentry" element={<MarkView />}/>
                <Route path="add" element={<AddMark />}/>
                <Route path="finalize" element={<ToDoFinalize/>}/>
                
              </Route>


            </Route>

            {/* user routes */}
            <Route path="/user" element={<AuthLayout />}>
              <Route path="signup" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="forgot" element={<ForgotPassword />} />
              <Route path="recover" element={<RecoverPassword />} />

              <Route path="shedule" element={<UserShedule/>}/>
              <Route path="assignprogram" element={<AssignEventList/>}/>
              <Route path="eventlist" element={<IndividualEventList/>}/>
              <Route path="home" element={<UserHome/>}/>
              <Route path="result" element={<ResultList/>} />
              <Route path="register" element={<UserRegister />}/>
            </Route>

            {/* teacher details forms routes */}
            <Route path="/teacher/details">
              <Route path="personal" element={<AddDetails />} />
            </Route>

            {/* student details forms routes */}
            <Route path="/student/details">
              <Route path="personal" element={<PersonalDetails />} />
              <Route path="educational" element={<EducationalDetails />} />
              <Route path="family" element={<FamilyDetails />} />
              <Route path="dependencies" element={<Dependencies />} />
            </Route>
            <Route path="/" element={<Navigate to="/user/login" />} />

            
          </Routes>
        </ProfileProvider>
      </StudentProvider>
    </ThemeConfig>
  );
}

export default App;
