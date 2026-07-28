import { Achievement, EducationItem, ExperienceItem, SoftwareCategory } from '../types';

export const FSUK_ACHIEVEMENTS: Achievement[] = [
  { title: 'FS-AI Class', result: 'Overall Winners', badge: '1st Place' },
  { title: 'FS-AI Dynamics', result: 'Overall Winners', badge: '1st Place' },
  { title: 'FS-AI Skid Pad', result: 'Overall Winners', badge: '1st Place' },
  { title: 'FS-AI Sprint / Autocross', result: 'Overall Winners', badge: '1st Place' },
  { title: 'FS-AI Endurance / Track Drive', result: 'Overall Winners', badge: '1st Place' },
  { title: 'FS-AI Acceleration', result: '2nd Place', badge: 'Podium' },
];

export const PAID_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'toyota-mg',
    company: 'Narmada Toyota / Kayakalp MG Motors',
    role: 'Training & Compliance Officer',
    period: '2024 – 2025',
    type: 'paid',
    description: 'Lead technical training and quality compliance across dual-brand workshop facilities.',
    starResult: 'Delivered technical training and compliance support across the jointly owned Toyota and MG operations, increasing trained-technician coverage from 35% to 67% and improving inspection-quality and safety performance by approximately 17%.',
    highlights: [
      '50+ technicians and service advisors trained on OEM diagnostic protocols.',
      'Audited safety procedures and high-voltage maintenance readiness.',
      'Improved workshop repair quality and first-time-fix metrics.'
    ],
    images: [
      '/assets/portfolio/toyota-workshop.webp',
      '/assets/portfolio/toyota-classroom.webp'
    ]
  },
  {
    id: 'bajaj-allianz',
    company: 'Bajaj Allianz General Insurance',
    role: 'Motor Loss Assessor / Junior Service Engineer',
    period: '2019 – 2024',
    type: 'paid',
    description: 'Technical vehicle damage assessment, OEM repair estimation, and claim settlement operations.',
    starResult: 'Managed 120–150 motor claims per month across approximately 30–35 associated garages, combining damage assessment, OEM repair methods, fraud checks and technical evidence to support prompt, auditable settlement decisions.',
    highlights: [
      'Evaluated structural, mechanical and electrical accident damages against OEM standards.',
      'Conducted technical forensic checks to ensure auditable settlements.',
      'Maintained direct liaison with workshop managers and engineering assessors.'
    ]
  },
  {
    id: 'ford-motors',
    company: 'Ford Motors',
    role: 'Engineering Intern',
    period: '2015 – 2016',
    type: 'paid',
    description: 'Hands-on dealership workshop engineering, vehicle diagnostics, and vehicle road testing.',
    starResult: 'Supported mechanical and electrical diagnosis, repair verification and road testing, developing an early foundation in systematic vehicle fault-finding.',
    highlights: [
      'Engine diagnostic scan tool operation and fault code isolation.',
      'Brake, suspension and electrical assembly inspection and road testing.'
    ]
  }
];

export const UNIVERSITY_LEADERSHIP: ExperienceItem[] = [
  {
    id: 'msc-brookes',
    company: 'Oxford Brookes University',
    role: 'MSc Automotive Engineering with Electric Vehicles',
    period: '2025 – 2026',
    type: 'university',
    description: 'Postgraduate degree focused on EV technology, CAE simulation, NVH, and vehicle dynamics.',
    starResult: 'Specialised in NVH, electrified powertrains, vehicle dynamics, power electronics, composites and impact simulation.',
    highlights: [
      'Advanced simulation methodologies using ANSYS, GT-SUITE, MSC Adams, and Simscape.',
      'Hands-on experimental setup and model validation against measured data.'
    ]
  },
  {
    id: 'obra-team',
    company: 'Oxford Brookes Racing Autonomous (OBRA)',
    role: 'Powertrain, Electronics & Vehicle Controls',
    period: '2025 – Present',
    type: 'university',
    description: 'Formula Student AI team engineering autonomous race car electrical and powertrain systems.',
    starResult: 'Supported shutdown-system electronics, minor VCU/CAN design changes, brake and HV-battery connections, and vehicle electrical safety.',
    highlights: [
      'Contributed to overall FS-AI class win at Silverstone FSUK AI 2026.',
      'Ensured compliance with Formula Student high-voltage and safety regulations.'
    ]
  },
  {
    id: 'course-rep',
    company: 'Oxford Brookes University',
    role: 'Course Representative — MSc Automotive Engineering',
    period: '2025 – Present',
    type: 'university',
    description: 'Student cohort representative liaising with academic staff and university leadership.',
    starResult: 'Served as leadership representative for student feedback, academic curriculum communication and student advocacy.',
    highlights: [
      'Facilitated constructive dialogue between students and module leaders.',
      'Represented student perspectives during faculty review committees.'
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'MSc Automotive Engineering with Electric Vehicles',
    institution: 'Oxford Brookes University, UK',
    grade: 'Postgraduate Degree',
    period: '2025 – 2026',
    focusArea: 'NVH, Electrified Powertrains, Vehicle Dynamics, Power Electronics, Composites & LS-DYNA Crash Simulation'
  },
  {
    degree: 'BE Automobile Engineering',
    institution: 'Institute of Technology and Management',
    grade: 'First Class',
    period: '2016 – 2019',
    focusArea: 'Thermodynamics, IC Engines, Chassis Design, Manufacturing Engineering & Vehicle Maintenance'
  },
  {
    degree: 'Diploma in Automobile Engineering',
    institution: 'Valia Polytechnic College',
    grade: 'First Class',
    period: '2013 – 2016',
    focusArea: 'Automobile Fundamentals, Workshop Technology, Electrical Systems & Fluid Mechanics'
  }
];

export const SOFTWARE_CATEGORIES: SoftwareCategory[] = [
  {
    category: 'CAE & Structures',
    tools: ['ANSYS Mechanical', 'HyperMesh', 'LS-DYNA']
  },
  {
    category: 'Powertrain & Systems',
    tools: ['GT-SUITE', 'GT-Drive', 'Simulink', 'Simscape']
  },
  {
    category: 'Vehicle Dynamics',
    tools: ['MSC Adams', 'MATLAB']
  },
  {
    category: 'CAD & Product Development',
    tools: ['SolidWorks', 'Siemens NX']
  },
  {
    category: 'Power Electronics',
    tools: ['Multisim']
  }
];
