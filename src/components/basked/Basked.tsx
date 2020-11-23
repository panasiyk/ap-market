import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import {ApplicationState} from "../../store";
import Dialog from '@material-ui/core/Dialog';
import BaskedDialog from "./BaskedDialog";
import DialogContent from '@material-ui/core/DialogContent';
import {BuskedItem} from "../../store/basket/types";
import {reduxFormNames} from "../../constants";
import {initProduct} from "../../store/basket/actions";
import Notification from "./Notification";
import {NotificationData} from "../../constants/types";
import LocalStorage from '../../service/LocalStorage';


export default function Basked() {
    const dispatch = useDispatch();
    const [totalPrice, updatePrice] = useState<number>();
    const [open, changeDialogStatus] = useState<boolean>(false);

    const [isOpen, changeVisibility] = useState(false);
    const [notifConfig, changeConfig] = useState<NotificationData>({
        massage: "Order sent successfully",
        status: "success"
    });

    const products: BuskedItem[] = useSelector<ApplicationState, BuskedItem[]>(state => state.busked.items);

    useEffect(() => {
        const order = LocalStorage<BuskedItem[]>().get(reduxFormNames.ORDER)
        dispatch(initProduct(order))
    }, []);

    useEffect(() => {
        const price = products.reduce((total, product) => total + product.count * product.item.price, 0)
        updatePrice(price)
    }, [products])

    const close = () => changeDialogStatus(false);
    return (
        <>
            <IconButton onClick={() => changeDialogStatus(true)}>
                {totalPrice ? <div>{totalPrice.toFixed(2)}</div> : ""}
                <ShoppingCartIcon fontSize="large" style={{color: "white"}}/>
            </IconButton>
            <Dialog open={open} fullWidth maxWidth='lg' onClose={close}>
                <DialogContent>
                    <BaskedDialog
                        changeVisibility={changeVisibility}
                        changeConfig={changeConfig}
                        totalPrice={totalPrice}
                        closeDialog={close}/>
                </DialogContent>
            </Dialog>
            <Notification isOpen={isOpen}
                          changeVisibility={changeVisibility}
                          notifConfig={notifConfig}/>
        </>
    );
}
