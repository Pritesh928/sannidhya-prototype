import { useState } from "react";
import "./App.css";

// AUTH
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import RoleSelection from "./pages/auth/RoleSelection";

// PATIENT
import PatientDashboard from "./pages/patient/PatientDashboard";
import MedicalAssistance from "./pages/patient/MedicalAssistance";
import Teleconsultation from "./pages/patient/Teleconsultation";
import Appointments from "./pages/patient/Appointments";
import MedicalRecords from "./pages/patient/MedicalRecords";
import Pharmacy from "./pages/patient/Pharmacy";
import LabTests from "./pages/patient/LabTests";
import FollowUps from "./pages/patient/FollowUps";
import PatientProfile from "./pages/patient/PatientProfile";

// ASHA
import AshaRoleSelection from "./pages/asha/AshaRoleSelection";

import AshaSupervisorDashboard from "./pages/asha/supervisor/AshaSupervisorDashboard";
import Workers from "./pages/asha/supervisor/Workers";
import AssignArea from "./pages/asha/supervisor/AssignArea";
import WorkerData from "./pages/asha/supervisor/WorkerData";
import SupervisorReports from "./pages/asha/supervisor/SupervisorReports";

import AshaWorkerDashboard from "./pages/asha/worker/AshaWorkerDashboard";
import HousesVisited from "./pages/asha/worker/HousesVisited";
import UsersUnderAsha from "./pages/asha/worker/UsersUnderAsha";
import AshaWorkerFollowUps from "./pages/asha/worker/FollowUps";
import AshaTeleconsultation from "./pages/asha/worker/AshaTeleconsultation";

// DOCTOR
import DoctorRoleSelection from "./pages/doctor/DoctorRoleSelection";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import PatientList from "./pages/doctor/PatientList";
import PatientData from "./pages/doctor/PatientData";
import Referrals from "./pages/doctor/Referrals";
import DoctorReports from "./pages/doctor/Reports";
import DoctorFollowUps from "./pages/doctor/DoctorFollowUps";

// PHARMACY
import PharmacyDashboard from "./pages/pharmacy/PharmacyDashboard";
import MedicineRequests from "./pages/pharmacy/MedicineRequests";
import Inventory from "./pages/pharmacy/Inventory";
import MedicineAvailability from "./pages/pharmacy/MedicineAvailability";
import PharmacyReports from "./pages/pharmacy/PharmacyReports";

// LAB
import LabDashboard from "./pages/lab/LabDashboard";
import TestRequests from "./pages/lab/TestRequests";
import EquipmentAvailability from "./pages/lab/EquipmentAvailability";
import LabReports from "./pages/lab/LabReports";
import SendReport from "./pages/lab/SendReport";

function App() {
  /*
   * page = current application screen
   * role = main selected role
   * subRole = ASHA/Doctor sub-role
   */

  const [page, setPage] = useState("login");
  const [role, setRole] = useState(null);
  const [subRole, setSubRole] = useState(null);

  const [user, setUser] = useState({
    name: "Rahul Patil",
    phone: "9876543210",
  });

  // -----------------------------
  // Navigation
  // -----------------------------

  const navigate = (nextPage) => {
    setPage(nextPage);
  };

  // -----------------------------
  // Login
  // -----------------------------

  const handleLogin = () => {
    navigate("role");
  };

  // -----------------------------
  // Register
  // -----------------------------

  const handleRegister = (name, phone) => {
    setUser({
      name: name || "Rahul Patil",
      phone: phone || "9876543210",
    });

    navigate("role");
  };

  // -----------------------------
  // Main Role
  // -----------------------------

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);

    if (selectedRole === "patient") {
      navigate("patient");
      return;
    }

    if (selectedRole === "asha") {
      navigate("asha-role");
      return;
    }

    if (selectedRole === "doctor") {
      navigate("doctor-role");
      return;
    }

    if (selectedRole === "pharmacy") {
      navigate("pharmacy");
      return;
    }

    if (selectedRole === "lab") {
      navigate("lab");
      return;
    }
  };

  // -----------------------------
  // Sub Role
  // -----------------------------

  const handleSubRoleSelect = (selectedSubRole) => {
    setSubRole(selectedSubRole);

    if (role === "asha") {
      if (selectedSubRole === "supervisor") {
        navigate("asha-supervisor");
        return;
      }

      if (selectedSubRole === "worker") {
        navigate("asha-worker");
        return;
      }
    }

    if (role === "doctor") {
      navigate("doctor");
    }
  };

  // -----------------------------
  // Logout
  // -----------------------------

  const logout = () => {
    setRole(null);
    setSubRole(null);
    setPage("login");
  };

  // -----------------------------
  // PATIENT ROUTES
  // -----------------------------

  if (page === "patient") {
    return (
      <PatientDashboard
        user={user}
        navigate={navigate}
        onLogout={logout}
      />
    );
  }

  if (page === "patient-assistance") {
    return <MedicalAssistance navigate={navigate} />;
  }

  if (page === "patient-teleconsultation") {
    return <Teleconsultation navigate={navigate} />;
  }

  if (page === "patient-appointments") {
    return <Appointments navigate={navigate} />;
  }

  if (page === "patient-records") {
    return <MedicalRecords navigate={navigate} />;
  }

  if (page === "patient-pharmacy") {
    return <Pharmacy navigate={navigate} />;
  }

  if (page === "patient-lab") {
    return <LabTests navigate={navigate} />;
  }

  if (page === "patient-followups") {
    return <FollowUps navigate={navigate} />;
  }

  if (page === "patient-profile") {
    return (
      <PatientProfile
        user={user}
        navigate={navigate}
        onLogout={logout}
      />
    );
  }

  // -----------------------------
  // ASHA
  // -----------------------------

  if (page === "asha-role") {
    return (
      <AshaRoleSelection
        onSelectRole={handleSubRoleSelect}
        navigate={navigate}
      />
    );
  }

  // ASHA SUPERVISOR

  if (page === "asha-supervisor") {
    return (
      <AshaSupervisorDashboard
        navigate={navigate}
        onLogout={logout}
      />
    );
  }

  if (page === "asha-workers") {
    return <Workers navigate={navigate} />;
  }

  if (page === "asha-assign-area") {
    return <AssignArea navigate={navigate} />;
  }

  if (page === "asha-worker-data") {
    return <WorkerData navigate={navigate} />;
  }

  if (page === "asha-supervisor-reports") {
    return <SupervisorReports navigate={navigate} />;
  }

  // ASHA WORKER

  if (page === "asha-worker") {
    return (
      <AshaWorkerDashboard
        navigate={navigate}
        onLogout={logout}
      />
    );
  }

  if (page === "asha-houses") {
    return <HousesVisited navigate={navigate} />;
  }

  if (page === "asha-users") {
    return <UsersUnderAsha navigate={navigate} />;
  }

  if (page === "asha-followups") {
    return <AshaWorkerFollowUps navigate={navigate} />;
  }

  if (page === "asha-teleconsultation") {
    return <AshaTeleconsultation navigate={navigate} />;
  }

  // -----------------------------
  // DOCTOR
  // -----------------------------

  if (page === "doctor-role") {
    return (
      <DoctorRoleSelection
        onSelectRole={handleSubRoleSelect}
        navigate={navigate}
      />
    );
  }

  if (page === "doctor") {
    return (
      <DoctorDashboard
        type={subRole}
        navigate={navigate}
        onLogout={logout}
      />
    );
  }

  if (page === "doctor-patients") {
    return <PatientList navigate={navigate} />;
  }

  if (page === "doctor-patient-data") {
    return <PatientData navigate={navigate} />;
  }

  if (page === "doctor-referrals") {
    return <Referrals navigate={navigate} />;
  }

  if (page === "doctor-reports") {
    return <DoctorReports navigate={navigate} />;
  }

  if (page === "doctor-followups") {
    return <DoctorFollowUps navigate={navigate} />;
  }

  // -----------------------------
  // PHARMACY
  // -----------------------------

  if (page === "pharmacy") {
    return (
      <PharmacyDashboard
        navigate={navigate}
        onLogout={logout}
      />
    );
  }

  if (page === "pharmacy-requests") {
    return <MedicineRequests navigate={navigate} />;
  }

  if (page === "pharmacy-inventory") {
    return <Inventory navigate={navigate} />;
  }

  if (page === "pharmacy-availability") {
    return <MedicineAvailability navigate={navigate} />;
  }

  if (page === "pharmacy-reports") {
    return <PharmacyReports navigate={navigate} />;
  }

  // -----------------------------
  // LAB
  // -----------------------------

  if (page === "lab") {
    return (
      <LabDashboard
        navigate={navigate}
        onLogout={logout}
      />
    );
  }

  if (page === "lab-requests") {
    return <TestRequests navigate={navigate} />;
  }

  if (page === "lab-equipment") {
    return <EquipmentAvailability navigate={navigate} />;
  }

  if (page === "lab-reports") {
    return <LabReports navigate={navigate} />;
  }

  if (page === "lab-send-report") {
    return <SendReport navigate={navigate} />;
  }

  // -----------------------------
  // AUTH
  // -----------------------------

  if (page === "register") {
    return (
      <Register
        onRegister={handleRegister}
        onLogin={() => navigate("login")}
      />
    );
  }

  if (page === "role") {
    return (
      <RoleSelection
        onSelectRole={handleRoleSelect}
        onLogout={logout}
      />
    );
  }

  // -----------------------------
  // DEFAULT
  // -----------------------------

  return (
    <Login
      onLogin={handleLogin}
      onRegister={() => navigate("register")}
    />
  );
}

export default App;