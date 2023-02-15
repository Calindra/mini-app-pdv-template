import Ame from "ame-super-app-client-web";
import InterfaceService from "../services/InterfaceService";
import ProductService from "../services/ProductService";

export default class PDV {

    state = {
        productList: [],
        lastProduct: null,
        subtotal: 0,
        discount: 0,
        total: 0,
        inputValue: 0,
        showModal: false,
        operatorMessage: 'Utilize o leitor óptico para começar'
    }

    showInputModal = () => {
        console.log('Show input modal')
        this.setState({ showModal: true })
    }

    hideInputModal = () => {
        console.log('Hide input modal')
        this.setState({ showModal: false })
    }

    fillProduct = () => {
        this.setState({ inputValue: 7898113811971 })
    }

    addProductDelay = () => {
        this.setState({
            loading: true,
            showModal: false
        }, () => {
            setTimeout(this.addProduct, Math.random() * 800 + 200)
        })
    }

    addProduct = (product) => {
        console.log('Add product')
        let { subtotal, productList } = this.state
        if (product || `${this.state.inputValue}` === "7898113811971") {
            const productToInsert = product ? product : ProductService.getProduct()
            subtotal += productToInsert.price
            productList.push(productToInsert)
            this.setState({
                loading: false,
                productList,
                lastProduct: productToInsert,
                subtotal,
                inputValue: 0,
                showModal: false,
                operatorMessage: product ? 'Utilize o leitor óptico para começar' :'Produto adicionado',
                total: subtotal - this.state.discount
            }, () => {
                Ame.storage.setItem("productList", JSON.stringify(this.state.productList))
            })
            
        } else {
            this.setState({
                loading: false,
                inputValue: 0,
                operatorMessage: `Código ${this.state.inputValue} não reconhecido.`
            })
        }

    }

    goToPayment = () => {
        const { productList, subtotal, discount, total } = this.state;
        if (productList.length) {
            // Insira aqui as funções de pagamento
        } else {
            this.setState({
                operatorMessage: 'Inclua ao menos um produto para prosseguir'
            })
        }
    }

    async componentDidMount() {
        InterfaceService.setElementStyleBySelector('.window', 'height: 100vh; display: flex;')
        const storageProductList = await Ame.storage.getItem("productList");
        if (storageProductList) {
            try {
                const productList = JSON.parse(storageProductList)
                for (let index = 0; index < productList.length; index++) {
                    const element = productList[index];
                    this.addProduct(element)
                }
            } catch (error) {
                console.log('Não foi possível recuperar os produtos', error)
            }
        }
    }

}
