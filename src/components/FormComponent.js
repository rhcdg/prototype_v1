import React from 'react';
import FormService from '../services/FormService';

class FormComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            forms:[],
            randomVariable: false
        }
    }
    componentDidMount(){
        FormService.getForms().then((response) => {
            this.setState({forms: response.data})
        })
    }
    render(){
        return(
            <div>
                <h1>Some Text</h1>
            </div>
        )
    }
}
export default FormComponent