import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { connect } from 'react-redux';
import Profile from './Profile';
import AddInternals from './AddInternals';
import Managestudent from './ManageInternals';
import Regprofile from './Regprofile';
import Regint from './Regint';
import Regext from './Regext';
import ResultAnalysis from './ResultAnalysis';


const initState = [null];

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case 'login':
      return [action.data.id];
    case 'profile':
      return state;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  login: persistReducer(persistConfig, loginReducer),
});

const mapStateToProps = (state) => ({
  id: state.login[0],
});

const ConnectedProfile = connect(mapStateToProps)(Profile);
const Conne = connect(mapStateToProps)(AddInternals);
const Conn = connect(mapStateToProps)(Managestudent);
const Con1 = connect(mapStateToProps)(Regprofile);
const Con2 = connect(mapStateToProps)(Regint);
const Con3 = connect(mapStateToProps)(Regext);
const Con4 = connect(mapStateToProps)(ResultAnalysis);
export { ConnectedProfile };
export { Conne };
export { Conn };
export { Con1 };
export { Con2 };
export { Con3 };
export {Con4};
export default rootReducer;
