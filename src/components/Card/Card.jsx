import { IoCloudUploadOutline } from "react-icons/io5";

export default function Card({title, children}) {
    return (
        <div className="card">
            <span className="card_icon_container">
                <IoCloudUploadOutline className="card_icon" />
            </span>
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
    )
}