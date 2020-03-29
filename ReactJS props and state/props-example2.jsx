class Welcome extends React.Component{
    render(){
return(
    <div className="welcome">
        <h3>Hi, do fast please!!!</h3>
<i>{this.props.name}</i>
    </div>

);
}
}

Welcome.defaultProps={
    name: "There",
    message:"WElcome to my special life :)))"
}

const element1=document.getElementById('welcome1')
const element2=document.getElementById('welcome2')

ReactDOM.render(
    <Welcome name='Tran' message='Welcome back!'/>, element1
)

ReactDOM.render(
    <Welcome/>, element2
)


