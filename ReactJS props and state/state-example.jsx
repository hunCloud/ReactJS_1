// create a ES 6 class component

class Button extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text: "click me", 
            clickCount: 0
        };
    }
    // Method updateCount()

    updateCount(){
        this.setState((prevState, props)=>{
            return{
                clickCount: prevState.clickCount+1, 
                text:"Clicked"
            }
        }
        );
    }
    render(){
        return(
            <button onClick={()=>this.updateCount()}>
                {this.state.text}:{this.state.clickCount}
            </button>
        );
    }
}

ReactDOM.render(<Button/>, document.getElementById("button1"));
ReactDOM.render(<Button/>, document.getElementById("button2"));

