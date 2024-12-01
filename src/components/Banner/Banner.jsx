import { FaCheckCircle } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

export default function Banner({title, children, ...rest}) {
    let classname = "banner "
    let icon
    if (rest.variant === "success") {
        classname += "green"
        icon = <FaCheckCircle className="green_icon" />
    } else if (rest.variant === "warning") {
        classname += "yellow"
        icon = <FaExclamationTriangle className="yellow_icon" />
    } else if (rest.variant === "error") {
        classname += "red"
        icon = <IoIosCloseCircle className="red_icon" />
    } else {
        classname += "blue"
        icon = <FaInfoCircle className="blue_icon" />
    }

    function closeBanner() {
        console.log('set up close')
    }

    return (
        <div className={classname}>
            {icon}
            <span>
                <h3>{title}</h3>
                <p>{children}</p>
            </span>
            <IoIosClose className="banner_x" onClick={closeBanner} />
        </div>
    )
}