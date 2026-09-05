// Dummy ASHA data for SANNIDHYA prototype

export const ashaWorkers = [
  {
    id: "ASHA001",
    name: "Sunita Patil",
    village: "Shivapur",
    phone: "9876543210",
    patients: 24,
    status: "Active",
  },
  {
    id: "ASHA002",
    name: "Meena Shinde",
    village: "Kasarwadi",
    phone: "9876543211",
    patients: 18,
    status: "Active",
  },
  {
    id: "ASHA003",
    name: "Rekha Jadhav",
    village: "Wadgaon",
    phone: "9876543212",
    patients: 31,
    status: "Active",
  },
];

export const ashaUsers = [
  {
    id: "P001",
    name: "Ramesh Pawar",
    age: 46,
    gender: "Male",
    village: "Shivapur",
    phone: "9876500001",
    condition: "Hypertension",
    lastVisit: "02 Sep 2026",
    status: "Follow-up Required",
    ashaWorker: "Sunita Patil",
  },
  {
    id: "P002",
    name: "Savita More",
    age: 35,
    gender: "Female",
    village: "Shivapur",
    phone: "9876500002",
    condition: "Diabetes",
    lastVisit: "30 Aug 2026",
    status: "Stable",
    ashaWorker: "Sunita Patil",
  },
  {
    id: "P003",
    name: "Ganesh Shinde",
    age: 61,
    gender: "Male",
    village: "Kasarwadi",
    phone: "9876500003",
    condition: "Respiratory Problem",
    lastVisit: "28 Aug 2026",
    status: "Referral Required",
    ashaWorker: "Meena Shinde",
  },
  {
    id: "P004",
    name: "Lata Jadhav",
    age: 52,
    gender: "Female",
    village: "Wadgaon",
    phone: "9876500004",
    condition: "Joint Pain",
    lastVisit: "01 Sep 2026",
    status: "Follow-up Required",
    ashaWorker: "Rekha Jadhav",
  },
];

// Optional doctor data if other screens use it
export const doctors = [
  {
    id: "D001",
    name: "Dr. Amit Kulkarni",
    specialization: "General Physician",
    facility: "Primary Health Centre",
    status: "Available",
  },
  {
    id: "D002",
    name: "Dr. Priya Deshmukh",
    specialization: "Gynecologist",
    facility: "Rural Hospital",
    status: "Available",
  },
  {
    id: "D003",
    name: "Dr. Rahul Joshi",
    specialization: "Cardiologist",
    facility: "District Hospital",
    status: "Teleconsultation",
  },
];