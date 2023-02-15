<View direction='column'>
    <View direction='row' justify='between' paddingVertical='nano'
        borderBottomWidth='hairline'
        borderColor='neutral-300'>
        <Text>Subtotal</Text>
        <Text textAlign='right'>R$ {this.props.subtotal}</Text>
    </View>
    <View direction='row' justify='between' paddingVertical='nano'
        borderBottomWidth='hairline'
        borderColor='neutral-300'>
        <Text>Desconto</Text>
        <Text textAlign='right'>R$ {this.props.discount}</Text>
    </View>
    <View direction='row' justify='between' paddingVertical='nano'
        borderBottomWidth='hairline'
        borderColor='neutral-300'>
        <Text fontSize='large'>Total</Text>
        <Text fontSize='large' textAlign='right'>R$ {this.props.total}</Text>
    </View>
</View>
