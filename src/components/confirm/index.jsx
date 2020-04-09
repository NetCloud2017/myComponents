import React , {Component} from 'react'
import ReactDOM from 'react-dom';
let wrapper = document.body.appendChild(document.createElement('div'));
class Alart extends Component {
    cancel = () => {
        this.props.reject(false)
        this.removeWrapper();
    }
    confirm = () => {
        this.props.resolve(true)
        this.removeWrapper()
    }
    removeWrapper = () => {
        ReactDOM.unmountComponentAtNode(wrapper);
        if (document.body.contains(wrapper)) {
            document.body.removeChild(wrapper)
        }
    }
    componentDidMount() {
        console.log('afdsd');
    }
    render () {
        let {msg} = this.props
        return (
            <div>
                <div>
                    {msg}
                </div>
                <div>
                    <button onClick={this.cancel}>取消</button>
                    <button onClick={this.confirm}>确定</button>
                </div>
            </div>
        )
    }
}
function confirm (msg) {
    const promise =  new Promise((resolve, reject) => {
        try {
            ReactDOM.render(
            <Alart
                reject={reject}
                resolve={resolve}
                msg={msg}
            />, wrapper)
        } catch (e) {
            throw new Error(e);
        }
    })
    promise.then((res) => {
        return res;
    }, (res) => {
       return res
    }).catch(err => {
        console.log(err);
    })
    return promise;
}
export default confirm;