import InterfaceService from "../services/InterfaceService"

export default class ItemFeeder {

    timeout = null

    onKeyPress = (evt) => {
        if(evt.code === "Enter"){
            this.props.add()
        }
    }

    componentDidMount() {
        InterfaceService.setElementStyle('itemFeeder', 'align-items: stretch; width: 100%;')
        InterfaceService.setElementStyle('paymentButton', 'width: 100%;')
        window.document.querySelector('#inputEAN').setAttribute('style', 'border-bottom: none;')
        window.document.querySelector('.input').setAttribute('style', 'flex: 1; margin-left: 8px; margin-right: 8px;')
        this.timeout = setInterval(() => {
            window.document.querySelector('#inputEAN').focus({ focusVisible: true });
        }, 500)
        window.document.querySelector('.input').addEventListener('keydown', this.onKeyPress)
    }

    componentWillUnmount() {
        clearInterval(this.timeout)
        window.document.querySelector('.input').removeEventListener('keydown', this.onKeyPress)
    }
}
