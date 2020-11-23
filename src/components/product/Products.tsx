import React, {useEffect, useState} from 'react';
import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';
import {Container, Grid} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux'
import {ApplicationState} from '../../store';
import {getProducts} from "../../store/products/actions";
import IntRandom from "../../service/Helpers";
import {productData} from '../../store/products/types';
import EmptyProduct from "./EmptyProduct";
import {PRODUCTS_COUNT_FOR_API} from "../../constants";
import Product from "./Product";

export default function Products() {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    let [emptyProducts] = useState(new Array(PRODUCTS_COUNT_FOR_API)
        .fill(0)
        .map(() => ({id: IntRandom()})));

    let products = useSelector<ApplicationState, productData[]>(state => state.products.items);
    const getCurrentProduct = () => products.length ? products : emptyProducts;
    return (
        <Container className={classes.rootContainer}>
            <Grid container spacing={5}>
                {getCurrentProduct().map(product =>
                    <Grid key={product.id} item sm={12} md={4}>
                        {products.length ?
                            <Product product={product as productData}/> :
                            <EmptyProduct/>
                        }
                    </Grid>
                )}
            </Grid>
        </Container>

    );
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rootContainer: {
            marginTop: theme.spacing(5),
            flexGrow: 1
        }
    }),
);

