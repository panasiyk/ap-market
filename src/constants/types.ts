import {OverridableComponent} from "@material-ui/core/OverridableComponent";
import {SvgIconTypeMap} from "@material-ui/core/SvgIcon/SvgIcon";
import {Color} from "@material-ui/lab/Alert/Alert";


export type FormData = {
    name: string,
    surname: string,
    address: string,
    phone: number

}

export type FieldProps = {
    icon:OverridableComponent<SvgIconTypeMap>
}

export type NotificationData = {
    massage:string,
    status:Color
}



