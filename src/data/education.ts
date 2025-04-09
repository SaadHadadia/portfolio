
export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  ongoing?: boolean;
  startYear: number;
  endYear: number | null;
}

export const educations: Education[] = [
  {
    degree: 'Master\'s Degree',
    field: 'Information Systems Engineering',
    institution: 'Faculty of Sciences Semlalia of Marrakech',
    location: 'Marrakech, Morocco',
    ongoing: true,
    startYear: 2024,
    endYear: 2026,
  },
  {
    degree: 'Professional Bachelor',
    field: 'Information Systems and Networks Engineering',
    institution: 'Higher School of Technology',
    location: 'Safi, Morocco',
    startYear: 2021,
    endYear: 2024,
  },
  {
    degree: 'University Diploma of Technology (DUT)',
    field: 'Computer Engineering and Information Systems Administration',
    institution: 'Higher School of Technology',
    location: 'Safi, Morocco',
    startYear: 2021,
    endYear: 2023,
  }
];
