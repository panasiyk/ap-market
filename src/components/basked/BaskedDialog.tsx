import React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {ContactForm} from './Form';
import {FormData, NotificationData} from "../../constants/types";
import {useDispatch, useSelector} from "react-redux";
import {ApplicationState} from "../../store";
import BaskedProduct from "./BaskedProduct";
import {BuskedItem} from "../../store/basket/types";
import {Firebase} from '../../service/Firebase';
import {Typography} from "@material-ui/core";
import {initProduct} from "../../store/basket/actions";
import {Color} from "@material-ui/lab/Alert/Alert";
import { Dispatch } from 'react';
import {reduxFormNames} from "../../constants";
import LocalStorage from '../../service/LocalStorage';



type Props = {
    closeDialog: () => void
    changeConfig:  Dispatch<NotificationData>
    changeVisibility: Dispatch<boolean>
    totalPrice: number | undefined
}

export default function BaskedDialog(props: Props) {
    const classes = useStyles();
    const products = useSelector<ApplicationState, BuskedItem[]>(state => state.busked.items);
    const dispatch = useDispatch();

    const changeNotifConfig = (isError: boolean) => {
        let massage = "Order sent successfully";
        let status: Color = "success";
        if (isError) {
            massage = "Basked is empty. Please add something and try later!";
            status = "error";
        }
        props.changeConfig({massage, status})
    }
    const submit = async (formData: FormData) => {
        if (products.length) {
            const dataForServer = {
                clientInfo: formData,
                orderItems: products,
            }
            await Firebase.sentOrder(dataForServer)
            changeNotifConfig(false)
            props.closeDialog();
            dispatch(initProduct([]))
            LocalStorage<BuskedItem[]>().set(reduxFormNames.ORDER, [])
        } else changeNotifConfig(true)
        props.changeVisibility(true)

    }
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item md={8} xs={12} className={classes.item1}>
                    {products.map(product => <BaskedProduct key={product.id} product={product as BuskedItem}/>)}
                </Grid>
                <Grid item md={4} xs={12} className={classes.item2}>
                    <Paper className={classes.paper}>
                        <ContactForm onSubmit={submit}/>
                    </Paper>
                </Grid>
            </Grid>
            {props.totalPrice ? <Typography variant="h6">${props.totalPrice.toFixed(2)}</Typography> : ""}
        </div>
    );
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        cardActions: {
            marginTop: theme.spacing(2),
            display: 'flex'
        },
        btn: {
            marginLeft: "auto",
            marginRight: "auto",
            flex: '0.6 0 auto',
            display: "block"
        },
        root: {
            padding: 19,
            flexGrow: 1
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        item1: {
            order: 2,
            [theme.breakpoints.up("md")]: {
                order: 1
            }
        },
        item2: {
            order: 1,
            [theme.breakpoints.up("md")]: {
                order: 2
            }
        },
    }),
);
