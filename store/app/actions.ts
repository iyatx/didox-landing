import { AppTypes, AppActionTypes, ISize } from './types';

export const setSize = (type: null | string): AppActionTypes => {
  const html = document.getElementsByTagName('html')[0];
  switch (type) {
    case 'small':
      html.classList.add('root--small');
      break;
    default:
      type = 'default';
      html.classList.remove('root--small');
      break;
  }
  localStorage.setItem('size', type || 'default');
  return {
    type: AppTypes.SET_SIZE,
    payload: type as ISize,
  };
};
