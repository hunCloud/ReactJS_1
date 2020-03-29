// Employee Component

class Employee extends React.Component{
    render(){
        return(
            <li className="employee">
                <div>
                    <b>
                        Full name:
                    </b>
                    {
                        this.props.fullName
                    }
                </div>

                <div>
                    <b>
                        Gender:
                    </b>
                    {
                        this.props.gender
                    }
                </div>
            </li>
        );
    }
}