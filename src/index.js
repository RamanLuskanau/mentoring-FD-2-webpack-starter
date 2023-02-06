import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Section } from './components/Section/Section';
import { Social } from './components/SocialNetwork';
import './main.scss';

const root = document.querySelector('#root');

root.insertAdjacentHTML('beforeend', Header());
root.insertAdjacentHTML('beforeend', Section());
root.insertAdjacentHTML('beforeend', Footer());
root.insertAdjacentHTML('beforeend', Social());
