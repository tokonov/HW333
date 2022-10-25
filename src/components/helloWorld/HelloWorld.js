


function HelloWorld(props){
    function Hello(){
        alert("Hello world")
    }
    return(
        <>
            <button className='btn' onClick={Hello}>Tap me</button>
        </>
    )
}

export default HelloWorld