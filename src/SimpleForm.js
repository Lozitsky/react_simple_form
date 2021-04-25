import {Component} from "react";
import './App.css';

// https://youtu.be/tNmYO6Jvb8I
// https://youtu.be/IsnOTmB88tE
class SimpleForm extends Component {
    state = {
        name: '',
        email: '',
        description: '',
        country: 'ukraine',
        agree: false,
        gender: 'android',
        error: false,
        errorMsg: ''
    }

    doChange = (e) => {
        const {value, name, type, checked} = e.target;
        this.setState({
            [name]: type === 'checkbox' ? checked : value
        })
    };

    showData = (e) => {
        const {...rest} = this.state;
        for (let restKey in rest) {
            console.log('On click', restKey, ':', rest[restKey]);
        }
    }

    doSubmit = (e) => {
        e.preventDefault();
        const {name, ...rest} = this.state

        if (name.length < 5) {
            this.setState({
                error: true,
                errorMsg: 'Too short'
            });
            return;
        }

        this.setState({
            error: true,
            errorMsg: ''
        });
    };

    render() {

        const {gender, country, agree, email, name, description, error, errorMsg} = this.state;

        return <div className={"App"}>
            <header className={"App-header"}>
                <form onSubmit={this.doSubmit}>
                    <label>
                        Name: <input onChange={this.doChange} name="name" type='text' value={name}/>
                    </label>
                    {error && <div>
                        <i>{errorMsg}</i>
                    </div>}
                    <hr/>
                    <label>
                        Email: <input onChange={this.doChange} name="email" type='email' value={email}/>
                    </label>
                    <hr/>
                    <label>
                        Description: <input onChange={this.doChange} name="description" type='txt' value={description}/>
                    </label>
                    <hr/>
                    <label>
                        {/*value={this.state.country}*/}
                        Country: <select onChange={this.doChange} name="country" value={country}>
                        <option value="us">U.S.A.</option>
                        <option value="canada">Canada</option>
                        <option value="ukraine">Ukraine</option>
                    </select>
                    </label>
                    <hr/>
                    <label>
                        Gender: <div>
                        <input onChange={this.doChange} name="gender" type={"radio"} value={"male"} checked={gender === 'male'} /><label>Male</label>
                        <input onChange={this.doChange} name="gender" type={"radio"} value={"female"} checked={gender === 'female'} /><label>Female</label>
                        <input onChange={this.doChange} name="gender" type={"radio"} value={"android"} checked={gender === 'android'} /><label>Android</label>
                    </div>
                    </label>
                    <hr/>
                    <label>
                        Agree: <input onChange={this.doChange} name="agree" type={"checkbox"} value={agree}/>
                    </label>
                    <br/>
                    <br/>
                    <div>
                        <button onClick={this.showData}>Submit</button>
                    </div>
                </form>
            </header>
        </div>
    }
}

export default SimpleForm;