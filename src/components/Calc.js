import InterfaceService from "../services/InterfaceService";

export default class Calc {

    state = {
        visor: '0'
    }

    getVisor = () => {
        return `R$ ${(this.state.visor / 100).toFixed(2).replace(/\./g, ',')}`
    }

    componentDidMount() {
        const calc = InterfaceService.setElementStyle('calc', 'width: 100%')
        Array.from(window.document.querySelectorAll('[data-cy=calc] .touchable')).map(item => item.setAttribute('style', 'flex: 1'))
    }

    setValue = (value) => {
        const { visor } = this.state
        if(/\d/g.test(value)){
            if(visor === '0'){
                this.setState({visor: value})
            }
            const newVisor = `${visor}` + value
            this.setState({visor: newVisor})
        }

        if(value === 'Apagar'){
            if(visor !== '0'){
                const newVisor = visor.substring(0, visor.length - 1)
                this.setState({visor: newVisor})
            }
        }

        if(value === 'Pagar'){
            this.props.onAdd(this.state.visor)
        }
    }
}
