<View
            marginBottom='nano'
            borderRadius='micro'
            direction='column'
            dataCy='itemDetails'
            >
{
    this.props.item ? (
        <>
            <View padding='nano' backgroundColor='primary' borderRadius='micro' marginBottom='nano'>
                <Text color='neutral-100' fontSize='medium' textAlign='center'>{this.props.item.ean}</Text>
                <Text color='neutral-100' fontSize='medium' textAlign='center' fontWeight='bold' truncate={20}>{this.props.item.name}</Text>
            </View>
            <View padding='nano' borderRadius='micro'>
                <Text fontSize='medium' textAlign='right'>
                {this.props.item.quantity} X R${InterfaceService.formatMoney(this.props.item.price)}
                </Text>
                <Text fontSize='extra-large' textAlign='right' fontWeight='bold'>
                    R${InterfaceService.formatMoney(this.props.item.quantity * this.props.item.price)}
                </Text>
            </View>
        </>
    ) : (
        <View padding='nano'>
            <Text textAlign='center'></Text>
        </View>
    )
}
</View>
