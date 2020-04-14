import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Map.jsx";
import NewDoctor from './views/NewDoctor';
import NewPatient from './views/NewPatient';
import NewPharmacist from './views/NewPharmacist';
import { NewStaffMember } from "views/NewStaffMember";
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
    path: "/staff-members/:pageNo",
    name: "Staff Members",
    icon: "fas fa-user-alt",
    component: Notifications,
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
  },
  {
    path: '/new-staff-member',
    component: NewStaffMember,
    layout: '/admin',
    visible: false
  }
];


export default routes;
