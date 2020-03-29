// Create a ES6 class component
class Person extends React.Component{
    // Use the render function to return JSX component

    render(){
        // haha k comment dc trong return
        return(
            // okee
            <div className="person-info">
                <h3>Person {this.props.personNo}:</h3>
                <ul>
                     
                    
        <li>First Name:{this.props.firstName}</li>
        <li>Last Name:{this.props.lastName}</li>
                </ul>
            </div>
        );
    }
}

const element1=document.getElementById('person1')
const element2=document.getElementById('person2')
// const element3=document.getElementById('person3')

// Use the ReactDOM.render to show your component on the browser
// what mean??
ReactDOM.render(
    <Person personNo='1' firstName='Hung' lastName='Nguyen'/>, element1
)
// run and xem lai code
// xog roi cmt
// run and review all source code
// then comment. haha
// use the ReactDOM.render to show your component on the browser???

ReactDOM.render(
    <Person personNo='2' firstName='lost' lastName='six years, haha'/>, element2
)
