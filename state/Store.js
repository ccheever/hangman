import { createStore } from 'redux';
import app from './Reducers';

let store = createStore(app);
export default store;
