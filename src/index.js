import { Button } from './components/Button';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import './main.scss';

const root = document.querySelector('#root');

root.insertAdjacentHTML('beforeend', Header());
root.insertAdjacentHTML('beforeend', Form());
root.insertAdjacentHTML('beforeend', Button());

console.log('Hello IT-academy student 🚀');
