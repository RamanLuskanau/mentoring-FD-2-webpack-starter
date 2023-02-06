import { Button } from '../Button';
import { Input } from '../Input';
import './Header.scss';

export const Header = () => {
  return `
    <header class="header">
        <div class="header__top">
            <div class="header__top--left">
                <div class="header__top--left--logo">
                    <img src='./assets/images/zara-logo-1.svg' alt="logo" />
                    ${Button('Clone', 'header__logo--btn')}
                </div>
            </div>
            <div class="header__top--right">
                ${Input('header__input', 'Search...')}
                ${Button('Sign up', 'header__top--btn1')}
                ${Button('Shopping bag', 'header__top--btn2')}
            </div>
        </div>    
        <nav class="navigation">
            <a class="navigation__link" href="#">Men</a>
            <a class="navigation__link" href="#">Women</a>
            <a class="navigation__link" href="#">Kids</a>
            <a class="navigation__link" href="#">Baby</a>
            <a class="navigation__link navigation__link--active" href="#">Sale %</a>
        </nav>
    </header>
    `.trim();
};
