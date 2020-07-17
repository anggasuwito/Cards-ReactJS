import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
class CardComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listdata: []
        }
    }

    handleChangeInput = (event) => {
        let name = event.target.name
        this.setState({ ...this.state, [name]: event.target.value })
    }

    handleSubmit = () => {

        if (this.state.name == "" || this.state.name == undefined) {
            alert('Name form is empty !!!')
        } else if (this.state.address == "" || this.state.address == undefined) {
            alert('Address form is empty !!!')
        } else if (this.state.age == "" || this.state.age == undefined) {
            alert('Age form is empty !!!')
        } else if (this.state.email == "" || this.state.email == undefined) {
            alert('Email form is empty !!!')
        } else {
            this.state.listdata.push({ name: this.state.name, address: this.state.address, age: this.state.age, email: this.state.email });

            this.setState({
                name: this.state.name,
                address: this.state.address,
                age: this.state.age,
                email: this.state.email,
            });
        }
    }

    deletebyIndex = (index) => {
        this.state.listdata.splice(index, 1);
        this.setState({
            listdata: this.state.listdata
        });
    }

    render() {
        let result

        result = this.state.listdata.map((data, index) =>
            <div>
                <div className="card-deck">
                    <div className="card border-info mb-3" style={{ width: '18rem' }}>
                        <div className="card-header">
                            <h4>{data.name}</h4>
                        </div>
                        <div className="card-body text-dark">
                            <p className="card-text">Address : {data.address}</p>
                            <p className="card-text">Age : {data.age}</p>
                            <p className="card-text">Email : {data.email}</p>
                        </div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="input-group-append" id="button-addon4">
                                    <button className="btn btn-outline-secondary" onClick={() => this.deletebyIndex(index)} type="button">Remove</button>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        )

        return (
            <div>
                <div className="container">
                    <form>
                        <br />
                        <input className="form-control" placeholder="Name" type="text" name="name" value={this.state.name} onChange={this.handleChangeInput} />
                        <br />
                        <input className="form-control" placeholder="Address" type="text" name="address" value={this.state.address} onChange={this.handleChangeInput} />
                        <br />
                        <input className="form-control" placeholder="Age" type="text" name="age" value={this.state.age} onChange={this.handleChangeInput} />
                        <br />
                        <input className="form-control" placeholder="Email" type="text" name="email" value={this.state.email} onChange={this.handleChangeInput} />
                        <br />
                        <div className="App">
                            <button className="btn btn-outline-primary" type="button" onClick={this.handleSubmit}>Add</button>
                        </div>
                    </form>
                    <br /><br />

                </div>
                <div className="container">
                    <div className="row justify-content-around">
                        {result}
                    </div>
                </div>
            </div>
        )
    }
}
export default CardComponent;