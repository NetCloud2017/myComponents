import React, {Component} from 'react'
import PropTypes from 'prop-types'
require('../../font/iconfont.css');
require('./input.css')
class InputNumber extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            _value: '',
            isControl: false,
        }
    }

    static propTypes = {
		value: PropTypes.number,
		onChange: PropTypes.func,
        step:PropTypes.number,
        min: PropTypes.number,
        max: PropTypes.number,
	}

	static defaultProps = {
		onChange: () => {

        }
	}
    get step() {
        return ('step' in this.props) ? this.props.step : 1
    }
	get isControl(){
		return 'value' in this.props
	}

	get value() {
		if(this.isControl){
			return this.props.value
		} else {
			return this.state._value
		}
    }
    plus = () => {
        let {step, value} = this
        let {max} = this.props;
        value = +(value + step);
        if (max) {
            value =  value > max ? max : value
            this.inputNum(value);
            return
        }
        this.inputNum(value);
    }
    reduce = () => {
        let {step, value} = this
        let {min} = this.props;
        value = value - step;
        if (min) {
            value = value < min ? min : value;
            this.inputNum(value);
            return
        }
        this.inputNum(value)
    }

    inputNum = (num) => {
        num = num ? num : 0;
        if(!this.isControl){
            this.setState({
                _value: num,
            })
        }
        this.props.onChange(num)
    }
    render () {
        return (
            <div>
                <span className="iconfont icon-jian" onClick={this.reduce}></span>
                <input 
                    value={this.value}
                    onChange={(e) => {
                        console.log(e.target.value, 'values');
                        
                        this.inputNum(isNaN(Number(e.target.value)) ? this.value : Number(e.target.value))
                    }}
                type="text"/>
                <span className="iconfont icon-jia" onClick={this.plus}></span>
            </div>
        )
    }
}
export default InputNumber;