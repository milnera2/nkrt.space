export const CONTACTS = {
  president: {
    name: 'Jordan Niemann',
    role: 'President',
    email: 'niemannj2@mymail.nku.edu',
  },
  faculty: {
    name: 'Dr. Dirk Grupe',
    role: 'Faculty mentor',
    email: 'gruped1@nku.edu',
  },
  generalEmail: 'niemannj2@mymail.nku.edu',
  linkedin: 'https://www.linkedin.com/company/nku-rt/posts/?feedView=all',
  address: 'Nunn Dr, Highland Heights, KY 41099',
}

export const STAR_CATCHER_STATS: [string, string][] = [
  ['Body diameter', '4 in'],
  ['Total length', '72 in'],
  ['Motor choice', 'AeroTech K400C-14A'],
  ['Average thrust', '409 N'],
  ['Total impulse', '1,304 N-s'],
  ['Expected apogee', '5,191 ft'],
]

export const LRE_STATS: [string, string][] = [
  ['Thrust', '300 lbf'],
  ['Propellants', 'Isopropyl alcohol and nitrous oxide'],
  ['Cycle', 'Pressure-fed'],
  ['Cooling', 'Heatsink'],
  ['Injector type', 'Pintle'],
]

export const STAR_CATCHER_IMAGES = [
  {
    src: '/media/starcatcher1.jpg',
    caption:
      'Our nose cone was printed in two pieces due to its length, and used ABS as a filament. Pictured is the top piece of the nose cone immediately after printing.',
  },
  {
    src: '/media/starcatcher2.jpg',
    caption: 'The rocket, held in a vise, directly after fin attachment.',
  },
  {
    src: '/media/starcatcher3.jpg',
    caption:
      'The electronics bay consisted of an altimeter sourced off-the-shelf, a battery and a screw switch. The plywood was laser cut by the manufacturing team.',
  },
]
