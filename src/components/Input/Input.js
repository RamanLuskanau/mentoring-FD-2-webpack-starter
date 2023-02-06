import './Input.scss';

export const Input = (classname, placeholder) => {
  return `
    <input class="${classname}" placeholder="${placeholder}" type="text">
  `.trim();
};
