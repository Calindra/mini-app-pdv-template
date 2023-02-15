import InterfaceService from '../services/InterfaceService'

export default class ItemDetails {
    componentDidMount(){
        InterfaceService.setElementStyle('itemDetails', 'flex: 1;')
    }
}
