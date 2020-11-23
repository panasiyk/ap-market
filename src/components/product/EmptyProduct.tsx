import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {Skeleton} from "@material-ui/lab";
import {Box} from "@material-ui/core";

const useStyles = makeStyles({
    cardActions: {display: 'flex'},
    btn: {
        flex: '0.8',
        marginLeft: "auto",
        marginRight: "auto",
    }
});

export default function EmptyProduct() {
    const classes = useStyles();

    return (
        <Card>
            <Skeleton variant="rect" height={200}/>
            <Box pt={0.5}>
                <Skeleton/>
                <Skeleton width="60%"/>
            </Box>
            <Box pt={0.5} pb={0.5} className={classes.cardActions}>
                <Skeleton className={classes.btn}/>
            </Box>
        </Card>
    );
}
