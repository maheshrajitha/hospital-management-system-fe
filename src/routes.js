import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import Icons from "views/Icons.jsx";
import Typography from "views/Typography.jsx";
import TableList from "views/Tables.jsx";
import Maps from "views/Map.jsx";
import UserPage from "views/User.jsx";
import NewDoctor from './views/NewDoctor';
import NewPatient from './views/NewPatient';
import NewPharmacist from './views/NewPharmacist';
var routes = [
  {
    path: "/dashboard/:pageNo",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
    visible: true
  },
  {
    path: "/patients/:pageNo",
    name: "Patients",
    icon: "fas fa-procedures",
    component: Icons,
    layout: "/admin",
    visible: true
  },
  {
    path: "/pharmacist/:pageNo",
    name: "Pharmacists",
    icon: "fas fa-pills",
    component: Maps,
    layout: "/admin",
    visible: true
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
    visible: true
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
    visible: true
  },
  {
    path: "/tables",
    name: "Table List",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/admin",
    visible: true
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-caps-small",
    component: Typography,
    layout: "/admin",
    visible: true
  },
  {
    path: "/new-doctor",
    component: NewDoctor,
    layout: "/admin",
    visible : false
  },
  {
    path: '/new-patient',
    component: NewPatient,
    layout: '/admin',
    visible : false
  },
  {
    path: '/new-pharmacist',
    component: NewPharmacist,
    layout: '/admin',
    visible : false
  }
];


export default routes;