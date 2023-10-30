import { combineReducers } from 'redux';

import invoices from './invoices.js';
import clients from './clients.js';
import profiles from './profiles.js';
import auth from './auth.js';

export default combineReducers({ auth, profiles, clients, invoices });
