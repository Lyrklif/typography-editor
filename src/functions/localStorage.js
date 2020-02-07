// localStorage

import sanitize from './sanitize';

// очистить localStorage
export const clearLocalStorage = () => {
  localStorage.removeItem('param');
}


// обновить значения в localStorage
export const updLocalStorage = () => {
  sanitize(); // записать новый текст, удалив неразрешённые теги

  // this.setState(state => ({
  //   ...state,
  // }),
  //   this.setNewValueLocalStorage // записать в localStorage после обновления
  // );
}

// перезаписать localStorage
export const setNewValueLocalStorage = () => {
  localStorage.setItem('param', JSON.stringify(this.state));
  localStorage.setItem('text', JSON.stringify(this.state.html));
}