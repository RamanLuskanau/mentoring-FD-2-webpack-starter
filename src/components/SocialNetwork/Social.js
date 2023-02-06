import './Social.scss';

export const Social = () => {
  return `
    <div class="social">
      <div class="social__rights">&copy; 2023 ZARA Clone All Righhts Reserved</div>
      <div class="social__icons">
        <img width="30px" height="30px" src='./assets/images/facebook.png' alt="icon" />
        <img width="30px" height="30px" src='./assets/images/instagram.png' alt="icon" />
        <img width="30px" height="30px" src='./assets/images/twitter.png' alt="icon" />
        <img width="30px" height="30px" src='./assets/images/youtube.png' alt="icon" />
        <img width="30px" height="30px" src='./assets/images/tiktok.png' alt="icon" />
      </div>
    </div>
  `.trim();
};
