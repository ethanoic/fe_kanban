import { createStore } from 'redux';
import kanbanApp from './reducers';

const store = createStore(kanbanApp);

export default store;