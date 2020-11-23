import React, {Dispatch} from 'react';
import {Alert} from "@material-ui/lab";
import {Snackbar} from "@material-ui/core";
import {NotificationData} from "../../constants/types";

type Props = {
    isOpen: boolean
    changeVisibility: Dispatch<boolean>
    notifConfig: NotificationData
}

export default function Notification(props: Props) {
    return (
        <Snackbar open={props.isOpen} autoHideDuration={3000} onClose={() => props.changeVisibility(false)}>
            <Alert onClose={() => props.changeVisibility(false)} severity={props.notifConfig.status}>
                {props.notifConfig.massage}
            </Alert>
        </Snackbar>
    );
}
