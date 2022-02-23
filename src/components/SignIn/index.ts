import {connect} from 'react-redux';
import {showNotification} from "src/store/notification/actions";
import {Dispatch} from "redux";
import {TNotify} from "src/store/notification/types";
import SignIn from './SignIn';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    showNotification: (payload: TNotify) => dispatch(showNotification(payload))
});

export default connect(null, mapDispatchToProps)(SignIn);
