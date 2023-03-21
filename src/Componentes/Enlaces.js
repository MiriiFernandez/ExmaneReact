import {NavLink} from "react-router-dom";

function Enlaces({path, name}) {
    return (
        <div className="btn">
            <NavLink to={path} className="link">{name} </NavLink>
        </div>
    )
}

export default Enlaces;