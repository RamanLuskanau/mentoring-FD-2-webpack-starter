import './Header.scss';

export const Header = () => {
  return `
        <header class="header">
            <div class="header__logo">
                <img src='./assets/js.logo-png' alt="logo" />
            </div>
            <nav class="header__navigation">
                <a href="#">Link #1</a>
                <a href="#">Link #2</a>
                <a href="#">Link #3</a>
            </nav>
        </header>
    `.trim();
};
