import React, { Component } from 'react';

const SIZES = {
    'large': 'input-lg',
    'small': 'input-sm'
}

export default class Select extends Component {
    static propTypes = {
        options: React.PropTypes.oneOfType([
            React.PropTypes.object,
            React.PropTypes.array
        ]),
    }

    static defaultProps = {
        options: []
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event.target.value);
    }

    render() {
        let { options } = this.props;
        let tmp = [];

        if (!Array.isArray(options)) {
            for (let value of Object.keys(options)) {
                tmp.push({
                    name: options[value],
                    value: value
                });
            }
        } else {
            tmp = options.slice();
        }

        return (
            <select
                {...this.props}
                {...this.attributes}
                className={`${this.props.clasName ? this.props.className : ''} form-control ${this.props.mySize !== '' ? SIZES[this.props.mySize] : ''}`}
                onChange={this.handleChange}
                value={this.props.value}
            >
                {
                    tmp.map((item, index) => {
                        return (
                            <option
                                value={item.value}
                                key={item.value}
                            >
                                {item.name}
                            </option>
                        );
                    })
                }
            </select>
        );
    }
}
