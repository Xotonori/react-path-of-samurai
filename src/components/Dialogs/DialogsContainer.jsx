import React from 'react'
import {updateNewMessageTextCreator, sendMessageCreator} from "../../redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = state => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = dispatch => {
    return {
        updateMessageText: newText => {
            dispatch(updateNewMessageTextCreator(newText))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;