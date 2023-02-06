import './Title.scss';

export const Title = (text, classname) => {
  return `
    <div class="${classname}">${text}</div>    
    `.trim();
};
