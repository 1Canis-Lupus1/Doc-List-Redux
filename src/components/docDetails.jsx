import React,{Component} from 'react';
import {docData} from '../http/http-calls';

class Details extends Component{
    componentDidMount(){
        docData().then(response=>{
            console.log("Response:",response);
        })
        .catch(err=>{
            console.log("Error:",err);
        })
    }
    render(){
        return(
            <React.Fragment>
                <h2>Hello From Details Page</h2>
            </React.Fragment>
        )
    }
}

export default Details;