import Button from "@material-ui/core/Button";
import React from "react";
import {Field, GenericField, InjectedFormProps, reduxForm} from "redux-form";
import {reduxFormNames} from "../../constants";
import {FieldProps, FormData} from "../../constants/types";
import {alphaNumeric, onlyAlpha, phoneNumber, required} from "../../service/Validator";
import {StyledField} from "./StyledField";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        btn: {
            width: 225
        },
        form: {
            display: "flex",
            flexDirection: "column"
        }
    }),
);

function Form(props: InjectedFormProps<FormData>) {
    const TypedStyledField = Field as new () => GenericField<FieldProps>;
    const classes = useStyles();
    return (
        <form className={classes.form} autoComplete="off" onSubmit={props.handleSubmit}>
            <TypedStyledField icon={PersonOutlineIcon} validate={[required, onlyAlpha]} name="name" component={StyledField}/>
            <TypedStyledField icon={PersonOutlineIcon} validate={[required, onlyAlpha]} name="surname" component={StyledField}/>
            <TypedStyledField icon={HomeIcon} validate={[required, alphaNumeric]} name="address" component={StyledField}/>
            <TypedStyledField icon={PhoneIcon} validate={[required, phoneNumber]} name="phone" component={StyledField}/>
            <div>
                <Button className={classes.btn} type="submit" variant="contained" color="primary">Add</Button>
            </div>
        </form>
    )
}

export const ContactForm = reduxForm<FormData>({form: reduxFormNames.ORDER})(Form)
