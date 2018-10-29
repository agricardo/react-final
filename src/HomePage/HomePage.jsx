import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class HomePage extends React.Component {
constructor(props){
    super(props);

    this.state = {
        userInput:'',
        list:[]
    }
}

    changeUserInput(input){
        this.setState({
            userInput: input
        });
    }

    addToList(input){
        let listArray = this.state.list;
        listArray.push(input);
    
        this.setState({
            list : listArray,
            userInput: ''
        })
    }

    onDelete(val){
        let listArray = this.state.list;
        let index = listArray.indexOf(val);
        listArray.splice(index, 1)
        this.setState({list:listArray})
        console.log(val);
    }





    render() {
        const { user, users } = this.props;
        return (




            
            <div className="col-md-6 col-md-offset-3">

            <div className="to-do-list-main">
            <input
            onChange={(e)=>this.changeUserInput(e.target.value)}
            value={this.state.userInput}
            type="text"
            />
            <button onClick={()=> this.addToList(this.state.userInput)}>ADD</button>
            
            <ul>
                {this.state.list.map((val)=> <li>{val}<button onClick={this.onDelete.bind(this, val)}>X</button></li>)}
            </ul>
            
            </div>

                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };