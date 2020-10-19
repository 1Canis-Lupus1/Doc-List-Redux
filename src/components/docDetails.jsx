import React,{Component} from 'react';
import {docData} from '../http/http-calls';

class Details extends Component{
    constructor(props){
        super(props);
        this.state={
            details:[]
        }
    }

    componentDidMount(){
        docData().then(response=>{
            console.log("Response:",response);
            this.setState({
                details: response.doctors
            })
            console.log("State:",this.state.details);
        })
        .catch(err=>{
            console.log("Error:",err);
        })
        
    }
    render(){
        return(
            <React.Fragment>
                <h2>Hello From Details Page</h2>
                <ul>{this.state.details.map((item)=>{
                    return <li>{item.email}</li>
                })}</ul>
            </React.Fragment>
        )
    }
}

export default Details;