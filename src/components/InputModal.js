import InterfaceService from '../services/InterfaceService'

export default class InputModal {

    state = {
        message: ''
    }

    checkCode = () => {
        if (this.props.value) {
            this.setState({ message: "" }, () =>{
                this.props.add()
            })
        } else {
            this.setState({ message: "Digite um número de EAN" })
        }
    }
    

    componentDidMount() {
        window.document.querySelector('#inputEAN').setAttribute('style', 'border-bottom: none')
    }
}
