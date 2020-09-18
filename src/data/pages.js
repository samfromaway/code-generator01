import ReactLogo from '../images/icons/react-logo.svg';
import FirebaseLogo from '../images/icons/firebase.png';
import Design from '../images/icons/design.svg';

import Home from '../images/icons/home.svg';
import PageView from '../images/icons/pageview.svg';
import People from '../images/icons/people.svg';
import SettingsInput from '../images/icons/settings-input.svg';
import Verified from '../images/icons/verified.svg';
import CallMissed from '../images/icons/call-missed.svg';

const react = { title: 'React', logo: ReactLogo };
const firebase = { title: 'Firebase', logo: FirebaseLogo };
const design = { title: 'Design', logo: Design };

export const info = [
  {
    title: 'Home',
    path: '/',
    icon: Home,
  },
  {
    title: 'About',
    path: '/about',
    icon: People,
  },
];

export const resources = [
  {
    title: 'ContextAPI',
    desc:
      'Organize your state in a modular way while making it available globally in your app.',
    path: '/context-api',
    categories: react,
    icon: SettingsInput,
  },
  {
    title: 'Firestore Rules',
    desc:
      'Keep your database security with the security rules of Firebase. Implement validation checks on the client and database side.',
    path: '/validation-firebase-web',
    categories: firebase,
    icon: Verified,
  },
  {
    title: 'React State Hooks',
    desc:
      'Make it easier to create your useState hooks. Add the name, and get the props and hooks automatically.',
    path: '/react-state-hooks',
    categories: react,
    icon: CallMissed,
  },
  {
    title: 'Design Resources',
    desc:
      'Select your resource from over 400 free services that will help you design your next project.',
    path: '/design-resources',
    categories: design,
    icon: PageView,
  },
];
