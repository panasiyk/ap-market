import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {productData} from "../../store/products/types";
import {useDispatch} from "react-redux";
import {addProduct} from "../../store/basket/actions";

type Props = {
    product: productData
}

const useStyles = makeStyles({
    cardActions: {display: 'flex'},
    btn: {flex: '1 0 auto'},
    title: {height: 100},
    img: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "auto",
        height: 200
    },
});

export default function Product(props: Props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card>
            <CardMedia className={classes.img}
                       component="img"
                       alt="Contemplative Reptile"
                       image={props.product.image}
                       title="Contemplative Reptile"
            />
            <CardContent>
                <Typography variant="h6" className={classes.title}>
                    {props.product.title}
                </Typography>
                <Typography variant="body1">
                    ${props.product.price}
                </Typography>

            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.btn}
                    onClick={() => dispatch(addProduct(props.product))}>
                    Add
                </Button>
            </CardActions>
        </Card>
    );
}
