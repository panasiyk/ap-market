import React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CardMedia from "@material-ui/core/CardMedia";
import {Button, Typography} from '@material-ui/core';
import {BuskedItem} from "../../store/basket/types";
import {addProduct, removeProduct} from "../../store/basket/actions";
import {useDispatch} from "react-redux";

type Props = {
    product: BuskedItem
}
export default function BaskedProduct(props: Props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Paper className={classes.paper}>
            <Grid container spacing={3}>
                <Grid item xs={4} className={classes.imgContainer}>
                    <CardMedia className={classes.img}
                               component="img"
                               alt="Contemplative Reptile"
                               image={props.product.item.image}
                               title="Contemplative Reptile"/>
                </Grid>
                <Grid container justify="center" alignItems="center" item xs={8}>
                    <Grid item xs={8} zeroMinWidth>
                        <Typography gutterBottom variant="h5">
                            {props.product.item.title}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {props.product.item.category}
                        </Typography>
                        <Typography noWrap variant="body2" color="textSecondary">
                            {props.product.item.description}
                        </Typography>
                    </Grid>
                    <Grid container item xs={4}>
                        <Grid item xs={4}>
                            <Button color="primary"
                                    onClick={() => dispatch(addProduct(props.product.item))}
                                    variant="contained">+</Button>
                        </Grid>
                        <Grid container justify="center" alignItems="center" item xs={4}
                              className={classes.counter}> {props.product.count}</Grid>
                        <Grid item xs={4}>
                            <Button color="secondary"
                                    onClick={() => dispatch(removeProduct(props.product.item))}
                                    variant="contained">-</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
            marginBottom: theme.spacing(2),
        },
        counter: {
            textAlign: 'center',
            verticalAlign: 'middle'
        },
        imgContainer: {
            marginTop: "auto",
            marginBottom: "auto",
        },
        img: {
            height: 'auto',
            width: 'auto',
            maxWidth: 150,
            maxHeight: 150,
            marginLeft: "auto",
            marginRight: "auto",
        },
    }),
);
