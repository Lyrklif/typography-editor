// actionCreators Генераторы экшенов
import mainStore from '../store/mainStore';

import {
  UPD_MAIN_STORE,
  UPD_TEXT
} from './actionTypes';

/*
 * генераторы экшенов
 */

// обновить статусы
export function updStates(name, value) {
  updStore({
    group: 'states',
    name: name,
    value: value
  });
}

// обновить стили
export function updStyles(name, value) {
  updStore({
    group: 'styles',
    name: name,
    value: value
  });
}

// обновить размеры
export function updSizes(name, value) {
  updStore({
    group: 'sizes',
    name: name,
    value: value
  });
}


// обновить данные
export function updStore(value) {
  // return { type: UPD_MAIN_STORE, value }
  mainStore.dispatch({ type: UPD_MAIN_STORE, value });
}

// обновить данные
export function updText(value) {
  const unsubscribe = mainStore.subscribe(() => console.log(mainStore.getState()));
  
  mainStore.dispatch({ type: UPD_TEXT, value });

  unsubscribe();
}