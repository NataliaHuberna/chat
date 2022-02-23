import {connect} from 'react-redux';
import {showNotification} from "src/store/notification/actions";
import {Dispatch} from "redux";
import {TNotify} from "src/store/notification/types";
import SignUp from './SignUp';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    showNotification: (payload: TNotify) => dispatch(showNotification(payload))
});

export default connect(null, mapDispatchToProps)(SignUp);
