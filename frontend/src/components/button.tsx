type ButtonProps = {
    label: string
    style: React.CSSProperties
    size?: "base" | "large" | "small"
}

export const Button = ({ label, style, size } : ButtonProps) => {
    if (typeof size == undefined) { size = "base" }
    let sizeClassname = size === "large" ? "p-3 px-5" : size === "small" ? "p-0.5 px-1 text-sm" : "p-1 px-1.5 text-sm"

    return <button 
        className={`
            ${sizeClassname}
        `}
        style={{
            // @TODO: Add additional styles here
            ...style
        }}
    >
        {label}
    </button>

}