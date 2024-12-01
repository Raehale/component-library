import { FaRegCheckCircle } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Toast({children, ...rest}) {
    let classname = "toast "
    let icon
    if (rest.variant === "Success") {
        classname += "green"
        icon = <FaRegCheckCircle className="green_icon toast_icon" />
    } else if (rest.variant === "Warning") {
        classname += "yellow"
        icon = <AiOutlineExclamationCircle className="yellow_icon toast_icon" />
    } else if (rest.variant === "Error") {
        classname += "red"
        icon = <IoIosCloseCircleOutline className="red_icon toast_icon" />
    } else {
        classname += "blue"
        icon = <IoInformationCircleOutline className="blue_icon toast_icon" />
    }

    return (
        <div className={classname}>
            {icon}
            <span>
                <h3>{rest.variant}</h3>
                <p>{children}</p>
            </span>
        </div>
    )
}