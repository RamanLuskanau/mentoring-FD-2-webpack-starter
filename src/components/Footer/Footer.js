import { Button } from '../Button';
import { Input } from '../Input';
import { Title } from '../Title';
import './Footer.scss';

export const Footer = () => {
  return `
    <footer class="footer">
      <div class="footer__block">
        ${Title('Shop', 'footer__title')}
        <a class="footer__block_link" href="#">Men</a>
        <a class="footer__block_link" href="#">Women</a>
        <a class="footer__block_link" href="#">Kids</a>
        <a class="footer__block_link" href="#">Baby</a>
        <a class="footer__block_link" href="#">Sale %</a>
      </div>
      <div class="footer__block">
        ${Title('Help', 'footer__title')}
        <a class="footer__block_link" href="#">Orders</a>
        <a class="footer__block_link" href="#">Order Status</a>
        <a class="footer__block_link" href="#">Returns</a>
        <a class="footer__block_link" href="#">Exchanges</a>
        <a class="footer__block_link" href="#">Payments</a>
      </div>
      <div class="footer__block">
        ${Title('About', 'footer__title')}
        <a class="footer__block_link" href="#">About ZARA</a>
        <a class="footer__block_link" href="#">Careers at ZARA</a>
        <a class="footer__block_link" href="#">Featured</a>
        <a class="footer__block_link" href="#">Collaborations</a>
        <a class="footer__block_link" href="#">Contact Us</a>
      </div>
      <div class="footer__block">
        ${Title('Always be up<br>to date with<br>zara news', 'footer__title footer__title_active')}
        <div class="footer__block_row">
          ${Input('footer__input', 'Name@email.com')}
          ${Button('Join us', 'footer__btn')}
        </div>
      </div>
    </footer>    
    `.trim();
};
