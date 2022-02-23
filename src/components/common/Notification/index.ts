import {connect} from 'react-redux';
import Notification from "./Notification";
import {clearNotification} from "../../../store/notification/actions";
import {selectNotify} from "../../../store/notification/selectors";
import {ApplicationState} from "../../../store/types";
import {Dispatch} from "redux";

const mapStateToProps = (state: ApplicationState) => ({
    notify: selectNotify(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    clearNotification: () => dispatch(clearNotification()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
