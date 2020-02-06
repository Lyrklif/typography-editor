// mainStore

/**
 * Стор (Store) — это объект, который соединяет части вместе. 
 * 
 * Стор берет на себя следующие задачи: 
 * содержит состояние приложения (application state);
 * предоставляет доступ к состоянию с помощью getState();
 * предоставляет возможность обновления состояния с помощью dispatch(action);
 * Обрабатывает отмену регистрации слушателей с помощью функции, возвращаемой subscribe(listener).
 */


import { createStore } from 'redux';
import reducer from '../reducers/reducer';
import { startingValue } from '../startingValue';

const store = createStore(reducer, startingValue);

export default store;