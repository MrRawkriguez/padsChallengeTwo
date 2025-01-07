import { useState } from "react"

function Pad (props) {

    const [on, setOn] = useState(props.on)

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    return(
    <button
        style={{backgroundColor: props.color}}
        className={on ? "on" : ""}
        onClick={toggle}
    ></button>
    )
}

export default Pad