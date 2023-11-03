import { combineReducers } from "redux";

import invoices from "./invoices.jsx";
import clients from "./clients.jsx";
import profiles from "./profiles.jsx";
import auth from "./auth.jsx";

export default combineReducers({ auth, profiles, clients, invoices });
