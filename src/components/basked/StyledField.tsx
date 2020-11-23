import React from "react";
import {InputAdornment, TextField, Theme, withStyles} from "@material-ui/core";
import {WrappedFieldProps} from "redux-form/lib/Field";
import { FieldProps } from "../../constants/types";

export function StyledField(props:WrappedFieldProps & FieldProps) {
    const label = (label:string):string => label.charAt(0).toUpperCase() + label.slice(1)
    const valid = !props.meta.valid && props.meta.touched;
    const Icon = props.icon;
    return (

        <Field {...props.input}
               error={valid}
               label={label(props.input.name)}
               variant="outlined" helperText={valid ? props.meta.error: ""}
               InputProps={{
                   startAdornment: (
                       <InputAdornment position="start">
                           <Icon/>
                       </InputAdornment>
                   ),
               }}/>

    )
}

const Field = withStyles((theme: Theme) => ({
    root: {
        marginBottom: theme.spacing(5),
        maxHeight: 45,
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 225
    }
}))(TextField);
