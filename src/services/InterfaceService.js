export default class InterfaceService {
    static setElementStyle = ( dataCy, styleString) => {
        if(!dataCy){
            return
        }
        const elm = window.document.querySelector(`[data-cy=${dataCy}]`)
        if(elm){
            elm.setAttribute('style', styleString)
        }
        return elm;
    }

    static setElementStyleBySelector = ( selector, styleString) => {
        if(!selector){
            return
        }
        const elm = window.document.querySelector(selector)
        if(elm){
            elm.setAttribute('style', styleString)
        }
        return elm;
    }

    static getAllElements = ( selector) => {
        if(!selector){
            return
        }
        return window.document.querySelectorAll(selector)
    }

    static formatMoney = (value) => {
        return `${Number.parseFloat(`${value/100}`, 10).toFixed(2).replace(/\./g, ',')}`
    }
}
