import InterfaceService from "../services/InterfaceService";
export default class ItemList {

    timeout = null

    componentDidMount(){
        InterfaceService.setElementStyle('grid', 'overflow-y: hidden; height: calc(100vh - 260px)')
        InterfaceService.setElementStyle('noproduct', 'height: calc(100vh - 220px)')
        this.timeout = setInterval(()=> {
            const items = InterfaceService.getAllElements('[data-cy=grid]>.grid')
            if(items.length){
                const item = InterfaceService.setElementStyleBySelector('[data-cy=grid]>div:last-child')
                item.scrollIntoView()
            }
            
        }, 200)
    }

    componentWillUnmount(){
        clearInterval(this.timeout)
    }
}
