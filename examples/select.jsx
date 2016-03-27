import React from 'react';
import Select from '../src/select.js';

const OPTIONS = [
    {value: '1', name: '19'},
    {value: '2', name: '20'},
    {value: '3', name: '21'}
]

export default class Simple extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
    }

    state = {
        name: '1'
    }

    onChangeName(value) {
        console.log(value);
        this.setState({
            name: value
        });
    }

    render() {
        return (
            <form>
                <div>
                    <label>姓名</label>
                    <Select
                        onChange={this.onChangeName}
                        value={this.state.name}
                        options={OPTIONS}
                        mySize='large'
                    />
                    <Select
                        onChange={this.onChangeName}
                        value={this.state.name}
                        options={OPTIONS}
                    />
                    <Select
                        onChange={this.onChangeName}
                        value={this.state.name}
                        options={OPTIONS}
                        mySize='small'
                    />
                    <Select
                        onChange={this.onChangeName}
                        value={this.state.name}
                        options={OPTIONS}
                        disabled
                    />
                </div>
            </form>
        );
    }
}
