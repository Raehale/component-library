import { MdOutlineInbox } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

export default function Tooltip({title, color, children, ...rest}) {
    let classname = `tooltip ${rest.varient}-${color}`

    return (
        <div className={classname}>
            <MdOutlineInbox className="tooltip__icon" />
            <div className="tooltip__message">
                <h3>{title}</h3>
                <p>{children}</p>
            </div>
            <IoIosClose className="tooltip__icon" />
        </div>
    )
}