import InterfaceService from '../services/InterfaceService'
export default class PaymentPanel {

    componentDidMount(){
        Array.from(InterfaceService.getAllElements('[data-cy=payment-options] .touchable>div')).map(elm => {
            elm.setAttribute('style', 'min-width: 120px; min-height: 120px;')
        })

        InterfaceService.setElementStyle('ame-solid', 'background-color: rgb(228, 13, 91); min-width: 120px; min-height: 120px;')
    }
}
