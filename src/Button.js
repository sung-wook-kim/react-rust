import PropTypes from "prop-types"
import styles from "./Button.module.css"
import React, { useEffect } from "react";
function Button({text , onClick , state}){
    useEffect(()=>console.log("The thing i chase is ",state) , [state])
    return <button onClick={onClick} className={styles.btn}>{text}</button>;
}

Button.propTypes = {
    text : PropTypes.string.isRequired,
}
export default Button;