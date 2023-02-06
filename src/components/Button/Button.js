import './Button.scss';

export const Button = (text, classname) => {
  return `
        <button class="${classname}">${text}</button>
      `.trim();
};
