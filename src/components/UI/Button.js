import classes from  './Button.module.css';
function Button (props){
    

    return <button type={props.type} className={classes['button-73']} onClick={props.onClick}>{props.children}</button>

}
export default Button;