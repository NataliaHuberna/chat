import {connect} from 'react-redux';
import {showNotification} from "../../store/notification/actions";
import {Dispatch} from "redux";
import {TNotify} from "../../store/notification/types";
import ForgotPassword from './ForgotPassword';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    showNotification: (payload: TNotify) => dispatch(showNotification(payload))
});

export default connect(null, mapDispatchToProps)(ForgotPassword);
