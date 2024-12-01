export default function Badge({color, children, ...rest}) {
    const classnames = rest.variant + "_badge " + color + " badge"

    return (
        <span className={classnames}>{children}</span>
    )
}