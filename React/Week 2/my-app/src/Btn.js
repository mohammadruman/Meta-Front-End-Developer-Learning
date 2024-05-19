function Btn(){
    const clickHandler = () => {
        console.log("Button clicked");
    }
    return (
        <button onClick={clickHandler}>Click me</button>
    )
}
export default Btn;