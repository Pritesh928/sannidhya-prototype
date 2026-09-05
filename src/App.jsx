import { useState } from "react";
import "./App.css";

const dummyPatient = {
  name: "Rahul Patil",
  age: 28,
  village: "Nandgaon",
  upcoming: "Dr. Sharma • Today, 4:30 PM",
};

const dummyWorkers = [
  { name: "Sunita More", area: "Ward 01", visits: 18, pending: 3 },
  { name: "Meena Jadhav", area: "Ward 02", visits: 24, pending: 1 },
  { name: "Kavita Pawar", area: "Ward 03", visits: 15, pending: 4 },
];

function App() {
  const [screen, setScreen] = useState("login");
  const [role, setRole] = useState(null);
  const [subRole, setSubRole] = useState(null);

  const go = (screenName) => setScreen(screenName);

  // ---------------- LOGIN ----------------

  if (screen === "login") {
    return (
      <MobileShell>
        <div className="auth-screen">
          <div className="brand-mark">✚</div>

          <h1>Sannidhi</h1>
          <p className="brand-subtitle">
            Integrated Public Healthcare
          </p>

          <div className="auth-card">
            <h2>Welcome back</h2>
            <p className="muted">
              Sign in to continue to your healthcare journey.
            </p>

            <label>Mobile Number</label>
            <input
              className="input"
              placeholder="Enter mobile number"
              defaultValue="9876543210"
            />

            <label>Password</label>
            <input
              className="input"
              type="password"
              placeholder="Enter password"
              defaultValue="123456"
            />

            <button
              className="primary-btn full"
              onClick={() => go("role")}
            >
              Sign In
            </button>

            <div className="auth-divider">
              <span>OR</span>
            </div>

            <button
              className="secondary-btn full"
              onClick={() => go("role")}
            >
              Create New Account
            </button>
          </div>

          <p className="demo-note">
            Prototype mode • Dummy data
          </p>
        </div>
      </MobileShell>
    );
  }

  // ---------------- ROLE SELECTION ----------------

  if (screen === "role") {
    return (
      <MobileShell>
        <TopBar
          title="Choose your role"
          onBack={() => go("login")}
        />

        <div className="page-content">
          <div className="intro-block">
            <span className="eyebrow">GET STARTED</span>
            <h2>Who are you?</h2>
            <p>
              Select your role to access your personalized
              healthcare dashboard.
            </p>
          </div>

          <div className="role-list">
            <RoleCard
              icon="👤"
              title="Patient"
              description="Access healthcare services"
              color="patient"
              onClick={() => {
                setRole("patient");
                go("patient");
              }}
            />

            <RoleCard
              icon="🧑‍⚕️"
              title="ASHA"
              description="Community health worker"
              color="asha"
              onClick={() => {
                setRole("asha");
                go("asha-role");
              }}
            />

            <RoleCard
              icon="👨‍⚕️"
              title="Doctor"
              description="Healthcare professional"
              color="doctor"
              onClick={() => {
                setRole("doctor");
                go("doctor-role");
              }}
            />

            <RoleCard
              icon="💊"
              title="Pharmacy"
              description="Medicine & inventory management"
              color="pharmacy"
              onClick={() => {
                setRole("pharmacy");
                go("pharmacy");
              }}
            />

            <RoleCard
              icon="🔬"
              title="Lab Testing Center"
              description="Diagnostics & test management"
              color="lab"
              onClick={() => {
                setRole("lab");
                go("lab");
              }}
            />
          </div>
        </div>
      </MobileShell>
    );
  }

  // ---------------- ASHA ROLE ----------------

  if (screen === "asha-role") {
    return (
      <MobileShell>
        <TopBar
          title="ASHA"
          onBack={() => go("role")}
        />

        <div className="page-content">
          <div className="intro-block">
            <span className="eyebrow">ASHA PORTAL</span>
            <h2>Select your role</h2>
            <p>
              Choose the type of ASHA account you are using.
            </p>
          </div>

          <RoleCard
            icon="👩‍💼"
            title="ASHA Supervisor"
            description="Manage workers, areas and reports"
            color="asha"
            onClick={() => {
              setSubRole("supervisor");
              go("asha-supervisor");
            }}
          />

          <RoleCard
            icon="👩‍⚕️"
            title="ASHA Worker"
            description="Visit households and manage users"
            color="asha-light"
            onClick={() => {
              setSubRole("worker");
              go("asha-worker");
            }}
          />
        </div>
      </MobileShell>
    );
  }

  // ---------------- DOCTOR ROLE ----------------

  if (screen === "doctor-role") {
    return (
      <MobileShell>
        <TopBar
          title="Doctor Portal"
          onBack={() => go("role")}
        />

        <div className="page-content">
          <div className="intro-block">
            <span className="eyebrow">CLINICAL ACCESS</span>
            <h2>What type of doctor?</h2>
            <p>
              Select your healthcare facility or designation.
            </p>
          </div>

          <RoleCard
            icon="🩺"
            title="CHO"
            description="Community Health Officer"
            color="cho"
            onClick={() => {
              setSubRole("cho");
              go("doctor");
            }}
          />

          <RoleCard
            icon="🏥"
            title="PHC Doctor"
            description="Primary Health Centre"
            color="phc"
            onClick={() => {
              setSubRole("phc");
              go("doctor");
            }}
          />

          <RoleCard
            icon="👨‍⚕️"
            title="Specialist"
            description="Specialist consultation & referrals"
            color="specialist"
            onClick={() => {
              setSubRole("specialist");
              go("doctor");
            }}
          />
        </div>
      </MobileShell>
    );
  }

  // ---------------- DASHBOARDS ----------------

  if (screen === "patient") {
    return (
      <PatientDashboard
        onLogout={() => go("login")}
      />
    );
  }

  if (screen === "asha-supervisor") {
    return (
      <AshaSupervisorDashboard
        onLogout={() => go("login")}
      />
    );
  }

  if (screen === "asha-worker") {
    return (
      <AshaWorkerDashboard
        onLogout={() => go("login")}
      />
    );
  }

  if (screen === "doctor") {
    return (
      <DoctorDashboard
        type={subRole}
        onLogout={() => go("login")}
      />
    );
  }

  if (screen === "pharmacy") {
    return (
      <PharmacyDashboard
        onLogout={() => go("login")}
      />
    );
  }

  if (screen === "lab") {
    return (
      <LabDashboard
        onLogout={() => go("login")}
      />
    );
  }

  return null;
}


// =====================================================
// MOBILE SHELL
// =====================================================

function MobileShell({ children }) {
  return (
    <div className="prototype-page">
      <div className="mobile-frame">
        {children}
      </div>
    </div>
  );
}


// =====================================================
// TOP BAR
// =====================================================

function TopBar({ title, onBack }) {
  return (
    <div className="topbar">
      <button className="icon-btn" onClick={onBack}>
        ←
      </button>

      <div className="topbar-title">{title}</div>

      <div className="top-logo">✚</div>
    </div>
  );
}


// =====================================================
// ROLE CARD
// =====================================================

function RoleCard({
  icon,
  title,
  description,
  color,
  onClick,
}) {
  return (
    <button
      className={`role-card ${color}`}
      onClick={onClick}
    >
      <div className="role-icon">{icon}</div>

      <div className="role-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="arrow">→</div>
    </button>
  );
}


// =====================================================
// PATIENT DASHBOARD
// =====================================================

function PatientDashboard({ onLogout }) {
  const [tab, setTab] = useState("home");

  return (
    <MobileShell>
      <DashboardHeader
        name={dummyPatient.name}
        role="Patient"
        onLogout={onLogout}
      />

      {tab === "home" && (
        <div className="dashboard-content">
          <div className="greeting">
            <span>Good morning 👋</span>
            <h2>{dummyPatient.name}</h2>
          </div>

          <div className="health-banner">
            <div>
              <small>YOUR HEALTH</small>
              <h3>Everything looks good</h3>
              <p>Keep your regular check-ups updated.</p>
            </div>
            <span className="health-icon">♡</span>
          </div>

          <SectionTitle
            title="Quick Access"
            action="View all"
          />

          <div className="quick-grid">
            <QuickCard icon="🩺" text="Medical Assistance" />
            <QuickCard icon="📹" text="Teleconsultation" />
            <QuickCard icon="💊" text="Pharmacy" />
            <QuickCard icon="🔬" text="Lab Tests" />
          </div>

          <SectionTitle
            title="Upcoming"
            action="View all"
          />

          <div className="appointment-card">
            <div className="appointment-icon">🩺</div>

            <div>
              <span className="small-label">TODAY • 4:30 PM</span>
              <h3>General Consultation</h3>
              <p>Dr. Sharma • PHC Nandgaon</p>
            </div>

            <span className="status-dot"></span>
          </div>

          <SectionTitle title="Health Services" />

          <div className="service-list">
            <ServiceRow
              icon="📄"
              title="Medical Records"
              subtitle="View your health history"
            />

            <ServiceRow
              icon="🔁"
              title="Follow-ups"
              subtitle="2 follow-ups pending"
            />

            <ServiceRow
              icon="🔔"
              title="Alerts"
              subtitle="1 important notification"
            />
          </div>
        </div>
      )}

      {tab === "records" && (
        <div className="dashboard-content">
          <PageHeading
            eyebrow="MY HEALTH"
            title="Medical Records"
            subtitle="Your longitudinal health information"
          />

          <RecordCard
            title="Blood Test"
            date="28 Aug 2026"
            doctor="PHC Nandgaon"
            icon="🩸"
          />

          <RecordCard
            title="General Consultation"
            date="12 Aug 2026"
            doctor="Dr. Sharma"
            icon="🩺"
          />

          <RecordCard
            title="Prescription"
            date="12 Aug 2026"
            doctor="Dr. Sharma"
            icon="💊"
          />
        </div>
      )}

      {tab === "appointments" && (
        <div className="dashboard-content">
          <PageHeading
            eyebrow="CARE"
            title="Appointments"
            subtitle="Manage your consultations"
          />

          <div className="appointment-card">
            <div className="appointment-icon">🩺</div>

            <div>
              <span className="small-label">
                TODAY • 4:30 PM
              </span>
              <h3>General Consultation</h3>
              <p>Dr. Sharma • PHC Nandgaon</p>
            </div>
          </div>

          <button className="primary-btn full">
            + Book Appointment
          </button>
        </div>
      )}

      <BottomNav
        active={tab}
        setActive={setTab}
        items={[
          ["home", "⌂", "Home"],
          ["appointments", "▣", "Appointments"],
          ["records", "▤", "Records"],
          ["profile", "◉", "Profile"],
        ]}
      />
    </MobileShell>
  );
}


// =====================================================
// ASHA SUPERVISOR
// =====================================================

function AshaSupervisorDashboard({ onLogout }) {
  const [tab, setTab] = useState("home");

  return (
    <MobileShell>
      <DashboardHeader
        name="Anita Deshmukh"
        role="ASHA Supervisor"
        color="asha-header"
        onLogout={onLogout}
      />

      <div className="dashboard-content">
        {tab === "home" && (
          <>
            <PageHeading
              eyebrow="ASHA SUPERVISOR"
              title="Good morning, Anita"
              subtitle="Here's today's community overview."
            />

            <div className="stats-grid">
              <StatCard value="12" label="Workers" />
              <StatCard value="86" label="Visits" />
              <StatCard value="17" label="Pending" />
              <StatCard value="04" label="Alerts" />
            </div>

            <SectionTitle
              title="Worker Activity"
              action="View all"
            />

            {dummyWorkers.map((worker, index) => (
              <WorkerCard
                key={index}
                worker={worker}
              />
            ))}

            <button className="primary-btn full">
              + Assign Area to Worker
            </button>
          </>
        )}

        {tab === "workers" && (
          <>
            <PageHeading
              eyebrow="MANAGEMENT"
              title="ASHA Workers"
              subtitle="Monitor assigned workers"
            />

            {dummyWorkers.map((worker, index) => (
              <WorkerCard
                key={index}
                worker={worker}
              />
            ))}
          </>
        )}

        {tab === "reports" && (
          <>
            <PageHeading
              eyebrow="ANALYTICS"
              title="Reports"
              subtitle="Community health activity"
            />

            <div className="report-card">
              <span>Household Visits</span>
              <strong>86</strong>
              <div className="progress">
                <span style={{ width: "78%" }}></span>
              </div>
            </div>

            <div className="report-card">
              <span>Follow-ups Completed</span>
              <strong>64</strong>
              <div className="progress">
                <span style={{ width: "64%" }}></span>
              </div>
            </div>
          </>
        )}
      </div>

      <BottomNav
        active={tab}
        setActive={setTab}
        items={[
          ["home", "⌂", "Home"],
          ["workers", "♙", "Workers"],
          ["reports", "▥", "Reports"],
          ["profile", "◉", "Profile"],
        ]}
        accent="asha"
      />
    </MobileShell>
  );
}


// =====================================================
// ASHA WORKER
// =====================================================

function AshaWorkerDashboard({ onLogout }) {
  const [tab, setTab] = useState("home");

  return (
    <MobileShell>
      <DashboardHeader
        name="Sunita More"
        role="ASHA Worker"
        color="asha-header"
        onLogout={onLogout}
      />

      <div className="dashboard-content">
        {tab === "home" && (
          <>
            <PageHeading
              eyebrow="TODAY'S WORK"
              title="Namaste, Sunita 👋"
              subtitle="You have 8 households scheduled today."
            />

            <div className="visit-highlight">
              <div>
                <small>TODAY'S PROGRESS</small>
                <h2>5 / 8</h2>
                <p>Households visited</p>
              </div>

              <div className="circle-progress">
                63%
              </div>
            </div>

            <SectionTitle
              title="Quick Actions"
            />

            <div className="quick-grid">
              <QuickCard
                icon="🏠"
                text="Houses Visited"
              />
              <QuickCard
                icon="👤"
                text="Users Under Me"
              />
              <QuickCard
                icon="🔁"
                text="Follow-up"
              />
              <QuickCard
                icon="📹"
                text="Teleconsultation"
              />
            </div>

            <SectionTitle title="Pending Follow-ups" />

            <ServiceRow
              icon="⚠️"
              title="Ramesh Patil"
              subtitle="Blood pressure follow-up • Due today"
            />

            <ServiceRow
              icon="⚠️"
              title="Lata Shinde"
              subtitle="Medicine follow-up • Due tomorrow"
            />
          </>
        )}

        {tab === "visits" && (
          <>
            <PageHeading
              eyebrow="COMMUNITY"
              title="Households"
              subtitle="Today's assigned visits"
            />

            <VisitCard name="Ramesh Patil" area="Ward 01" status="Visited" />
            <VisitCard name="Lata Shinde" area="Ward 01" status="Pending" />
            <VisitCard name="Ganesh More" area="Ward 02" status="Pending" />
          </>
        )}

        {tab === "followups" && (
          <>
            <PageHeading
              eyebrow="CARE CONTINUITY"
              title="Follow-ups"
              subtitle="Patients requiring attention"
            />

            <ServiceRow
              icon="🔴"
              title="Ramesh Patil"
              subtitle="Blood pressure • Due today"
            />

            <ServiceRow
              icon="🟠"
              title="Lata Shinde"
              subtitle="Medicine • Due tomorrow"
            />
          </>
        )}
      </div>

      <BottomNav
        active={tab}
        setActive={setTab}
        items={[
          ["home", "⌂", "Home"],
          ["visits", "⌂", "Visits"],
          ["followups", "↻", "Follow-ups"],
          ["profile", "◉", "Profile"],
        ]}
        accent="asha"
      />
    </MobileShell>
  );
}


// =====================================================
// DOCTOR
// =====================================================

function DoctorDashboard({ type, onLogout }) {
  const doctorName =
    type === "cho"
      ? "Dr. Amit Joshi"
      : type === "phc"
      ? "Dr. Priya Sharma"
      : "Dr. Rahul Kulkarni";

  const doctorRole =
    type === "cho"
      ? "Community Health Officer"
      : type === "phc"
      ? "PHC Doctor"
      : "Specialist";

  const [tab, setTab] = useState("home");

  return (
    <MobileShell>
      <DashboardHeader
        name={doctorName}
        role={doctorRole}
        color="doctor-header"
        onLogout={onLogout}
      />

      <div className="dashboard-content">
        {tab === "home" && (
          <>
            <PageHeading
              eyebrow={doctorRole.toUpperCase()}
              title={`Good morning, Doctor`}
              subtitle="Here is your clinical overview."
            />

            <div className="stats-grid">
              <StatCard value="18" label="Patients" />
              <StatCard value="06" label="Pending" />
              <StatCard value="04" label="Referrals" />
              <StatCard value="03" label="Follow-ups" />
            </div>

            <SectionTitle
              title="Today's Patients"
              action="View all"
            />

            <PatientRow
              name="Rahul Patil"
              condition="Fever & weakness"
              time="09:30 AM"
            />

            <PatientRow
              name="Meena Jadhav"
              condition="Hypertension"
              time="10:15 AM"
            />

            <PatientRow
              name="Suresh More"
              condition="Diabetes follow-up"
              time="11:00 AM"
            />

            <SectionTitle title="Quick Actions" />

            <div className="quick-grid">
              <QuickCard
                icon="👤"
                text="Patient Data"
              />
              <QuickCard
                icon="↗"
                text="Referral"
              />
              <QuickCard
                icon="📋"
                text="Reports"
              />
              <QuickCard
                icon="🔁"
                text="Follow-up"
              />
            </div>
          </>
        )}

        {tab === "patients" && (
          <>
            <PageHeading
              eyebrow="PATIENTS"
              title="Patient List"
              subtitle="Today's assigned patients"
            />

            <PatientRow
              name="Rahul Patil"
              condition="Fever & weakness"
              time="09:30 AM"
            />

            <PatientRow
              name="Meena Jadhav"
              condition="Hypertension"
              time="10:15 AM"
            />

            <PatientRow
              name="Suresh More"
              condition="Diabetes follow-up"
              time="11:00 AM"
            />
          </>
        )}

        {tab === "referrals" && (
          <>
            <PageHeading
              eyebrow="CARE CONTINUITY"
              title="Referrals"
              subtitle="Patients requiring higher care"
            />

            <div className="referral-card">
              <div className="avatar">RP</div>
              <div>
                <h3>Rahul Patil</h3>
                <p>Refer to Specialist</p>
                <span className="warning-badge">
                  Pending
                </span>
              </div>
            </div>

            <button className="primary-btn full">
              + Create Referral
            </button>
          </>
        )}
      </div>

      <BottomNav
        active={tab}
        setActive={setTab}
        items={[
          ["home", "⌂", "Home"],
          ["patients", "♙", "Patients"],
          ["referrals", "↗", "Referrals"],
          ["profile", "◉", "Profile"],
        ]}
      />
    </MobileShell>
  );
}


// =====================================================
// PHARMACY
// =====================================================

function PharmacyDashboard({ onLogout }) {
  const [tab, setTab] = useState("home");

  return (
    <MobileShell>
      <DashboardHeader
        name="Nandgaon Pharmacy"
        role="Pharmacy"
        color="pharmacy-header"
        onLogout={onLogout}
      />

      <div className="dashboard-content">
        {tab === "home" && (
          <>
            <PageHeading
              eyebrow="PHARMACY"
              title="Inventory Overview"
              subtitle="Monitor medicine availability."
            />

            <div className="stats-grid">
              <StatCard value="248" label="Medicines" />
              <StatCard value="17" label="Low Stock" />
              <StatCard value="08" label="Requests" />
              <StatCard value="03" label="Orders" />
            </div>

            <SectionTitle
              title="Medicine Requests"
              action="View all"
            />

            <MedicineRequest
              name="Paracetamol 500mg"
              quantity="20 strips"
              status="Available"
            />

            <MedicineRequest
              name="Metformin 500mg"
              quantity="10 strips"
              status="Low stock"
            />

            <SectionTitle title="Quick Actions" />

            <div className="quick-grid">
              <QuickCard
                icon="💊"
                text="Medicine Request"
              />
              <QuickCard
                icon="📦"
                text="Inventory"
              />
              <QuickCard
                icon="✓"
                text="Availability"
              />
              <QuickCard
                icon="📊"
                text="Reports"
              />
            </div>
          </>
        )}

        {tab === "inventory" && (
          <>
            <PageHeading
              eyebrow="STOCK"
              title="Inventory"
              subtitle="Current medicine stock"
            />

            <InventoryRow
              name="Paracetamol 500mg"
              stock="120"
              unit="strips"
            />

            <InventoryRow
              name="Amoxicillin 500mg"
              stock="86"
              unit="strips"
            />

            <InventoryRow
              name="Metformin 500mg"
              stock="12"
              unit="strips"
              warning
            />

            <InventoryRow
              name="ORS"
              stock="214"
              unit="packets"
            />
          </>
        )}

        {tab === "requests" && (
          <>
            <PageHeading
              eyebrow="REQUESTS"
              title="Medicine Requests"
              subtitle="Pending requests from patients"
            />

            <MedicineRequest
              name="Paracetamol 500mg"
              quantity="20 strips"
              status="Available"
            />

            <MedicineRequest
              name="Metformin 500mg"
              quantity="10 strips"
              status="Low stock"
            />
          </>
        )}
      </div>

      <BottomNav
        active={tab}
        setActive={setTab}
        items={[
          ["home", "⌂", "Home"],
          ["inventory", "▣", "Inventory"],
          ["requests", "▤", "Requests"],
          ["profile", "◉", "Profile"],
        ]}
      />
    </MobileShell>
  );
}


// =====================================================
// LAB
// =====================================================

function LabDashboard({ onLogout }) {
  const [tab, setTab] = useState("home");

  return (
    <MobileShell>
      <DashboardHeader
        name="Nandgaon Diagnostic Center"
        role="Lab Testing Center"
        color="lab-header"
        onLogout={onLogout}
      />

      <div className="dashboard-content">
        {tab === "home" && (
          <>
            <PageHeading
              eyebrow="DIAGNOSTICS"
              title="Lab Overview"
              subtitle="Manage tests and reports."
            />

            <div className="stats-grid">
              <StatCard value="24" label="Tests Today" />
              <StatCard value="07" label="Pending" />
              <StatCard value="17" label="Completed" />
              <StatCard value="03" label="Reports" />
            </div>

            <SectionTitle
              title="Test Requests"
              action="View all"
            />

            <LabRequest
              patient="Rahul Patil"
              test="CBC Blood Test"
              status="Pending"
            />

            <LabRequest
              patient="Meena Jadhav"
              test="Blood Glucose"
              status="Processing"
            />

            <SectionTitle title="Lab Services" />

            <div className="quick-grid">
              <QuickCard
                icon="🔬"
                text="Test Requests"
              />
              <QuickCard
                icon="⚙️"
                text="Equipment"
              />
              <QuickCard
                icon="📄"
                text="Reports"
              />
              <QuickCard
                icon="📤"
                text="Send Report"
              />
            </div>
          </>
        )}

        {tab === "tests" && (
          <>
            <PageHeading
              eyebrow="TESTS"
              title="Test Requests"
              subtitle="Pending diagnostic requests"
            />

            <LabRequest
              patient="Rahul Patil"
              test="CBC Blood Test"
              status="Pending"
            />

            <LabRequest
              patient="Meena Jadhav"
              test="Blood Glucose"
              status="Processing"
            />
          </>
        )}

        {tab === "reports" && (
          <>
            <PageHeading
              eyebrow="REPORTS"
              title="Lab Reports"
              subtitle="Recently completed reports"
            />

            <RecordCard
              title="CBC Blood Test"
              date="04 Sep 2026"
              doctor="Dr. Sharma"
              icon="🩸"
            />

            <RecordCard
              title="Blood Glucose"
              date="03 Sep 2026"
              doctor="Dr. Joshi"
              icon="🔬"
            />
          </>
        )}
      </div>

      <BottomNav
        active={tab}
        setActive={setTab}
        items={[
          ["home", "⌂", "Home"],
          ["tests", "🔬", "Tests"],
          ["reports", "▤", "Reports"],
          ["profile", "◉", "Profile"],
        ]}
      />
    </MobileShell>
  );
}


// =====================================================
// SHARED COMPONENTS
// =====================================================

function DashboardHeader({
  name,
  role,
  onLogout,
  color = "",
}) {
  return (
    <div className={`dashboard-header ${color}`}>
      <div className="header-brand">
        <div className="mini-logo">✚</div>
        <span>Sannidhi</span>
      </div>

      <button
        className="profile-mini"
        onClick={onLogout}
        title="Logout"
      >
        {name.charAt(0)}
      </button>

      <div className="header-user">
        <div>
          <small>{role}</small>
          <strong>{name}</strong>
        </div>
      </div>
    </div>
  );
}


function PageHeading({
  eyebrow,
  title,
  subtitle,
}) {
  return (
    <div className="page-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}


function SectionTitle({ title, action }) {
  return (
    <div className="section-title">
      <h3>{title}</h3>
      {action && <button>{action} →</button>}
    </div>
  );
}


function QuickCard({ icon, text }) {
  return (
    <button className="quick-card">
      <span>{icon}</span>
      <strong>{text}</strong>
    </button>
  );
}


function ServiceRow({
  icon,
  title,
  subtitle,
}) {
  return (
    <div className="service-row">
      <div className="service-icon">{icon}</div>

      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>

      <span className="row-arrow">›</span>
    </div>
  );
}


function StatCard({ value, label }) {
  return (
    <div className="stat-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}


function WorkerCard({ worker }) {
  return (
    <div className="worker-card">
      <div className="avatar">
        {worker.name
          .split(" ")
          .map((x) => x[0])
          .join("")}
      </div>

      <div className="worker-info">
        <h3>{worker.name}</h3>
        <p>{worker.area}</p>

        <div className="worker-meta">
          <span>{worker.visits} visits</span>
          <span>{worker.pending} pending</span>
        </div>
      </div>

      <span className="row-arrow">›</span>
    </div>
  );
}


function VisitCard({ name, area, status }) {
  return (
    <div className="visit-card">
      <div className="avatar">
        {name
          .split(" ")
          .map((x) => x[0])
          .join("")}
      </div>

      <div>
        <h3>{name}</h3>
        <p>{area}</p>
      </div>

      <span
        className={
          status === "Visited"
            ? "success-badge"
            : "warning-badge"
        }
      >
        {status}
      </span>
    </div>
  );
}


function PatientRow({ name, condition, time }) {
  return (
    <div className="patient-row">
      <div className="avatar">
        {name
          .split(" ")
          .map((x) => x[0])
          .join("")}
      </div>

      <div>
        <h3>{name}</h3>
        <p>{condition}</p>
      </div>

      <span className="patient-time">{time}</span>
    </div>
  );
}


function RecordCard({
  title,
  date,
  doctor,
  icon,
}) {
  return (
    <div className="record-card">
      <div className="record-icon">{icon}</div>

      <div>
        <h3>{title}</h3>
        <p>{date}</p>
        <small>{doctor}</small>
      </div>

      <span className="row-arrow">›</span>
    </div>
  );
}


function MedicineRequest({
  name,
  quantity,
  status,
}) {
  return (
    <div className="request-card">
      <div className="medicine-icon">💊</div>

      <div>
        <h3>{name}</h3>
        <p>{quantity}</p>
      </div>

      <span
        className={
          status === "Available"
            ? "success-badge"
            : "warning-badge"
        }
      >
        {status}
      </span>
    </div>
  );
}


function InventoryRow({
  name,
  stock,
  unit,
  warning,
}) {
  return (
    <div className="inventory-row">
      <div className="medicine-icon">💊</div>

      <div>
        <h3>{name}</h3>
        <p>{stock} {unit} available</p>
      </div>

      {warning && (
        <span className="warning-badge">
          Low
        </span>
      )}
    </div>
  );
}


function LabRequest({
  patient,
  test,
  status,
}) {
  return (
    <div className="lab-request">
      <div className="lab-icon">🔬</div>

      <div>
        <h3>{test}</h3>
        <p>{patient}</p>
      </div>

      <span className="warning-badge">
        {status}
      </span>
    </div>
  );
}


function BottomNav({
  active,
  setActive,
  items,
  accent,
}) {
  return (
    <div className={`bottom-nav ${accent || ""}`}>
      {items.map(([id, icon, label]) => (
        <button
          key={id}
          className={active === id ? "active" : ""}
          onClick={() => setActive(id)}
        >
          <span>{icon}</span>
          <small>{label}</small>
        </button>
      ))}
    </div>
  );
}

export default App;