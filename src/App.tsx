import React, {useEffect} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Products from './components/product/Products';
import Basked from "./components/basked/Basked";
import { Firebase } from './service/Firebase';

export default function App() {
    useEffect(() =>  Firebase.create(), [])
    return (
        <>
            <AppBar>
                <Toolbar>
                    <Grid container direction="row" justify="flex-end">
                        <Basked/>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Toolbar/>
            <Products/>
        </>
    )
}
