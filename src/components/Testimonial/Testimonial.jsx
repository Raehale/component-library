import { RiDoubleQuotesL } from "react-icons/ri";
import { GiRat } from "react-icons/gi";

export default function Testimonial({img, name, location, children, ...rest}) {
    return (
        <>
            {img ? <div className="blue_testimonial">
                <img src={`../../public/images/${img}`} alt={name} className="blue_testimonial__img" />
                <div className="blue_quote">
                    <RiDoubleQuotesL className="blue_quote__icon" />
                    <p className="blue_quote__text">{children}</p>
                    <p className="blue_quote__name">{name}</p>
                    <p className="blue_quote__location">{location}</p>
                </div>
            </div> : 
            <div className="white_testimonial">
                <GiRat className="white_testimonial__logo" />
                <p className="white_testimonial__text">"{children}"</p>
                <div className="white_testimonial__by">
                    <span className="white_testimonial__by__name">{name}</span> / <span className="white_testimonial__by__location">{location}</span>
                </div>
            </div>}
        </>
    )
}