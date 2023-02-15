<View
  direction='column'
  justify='between'
  align='center'
  dataCy='itemFeeder'
  margin='nano'
  padding='nano'
  backgroundColor='neutral-100'
  borderColor='neutral-300'
  borderWidth='hairline'
  borderRadius='micro'
>
  <OperatorMessage message={this.props.operatorMessage} />
  {
    !this.props.loading ? (
      <>
        <ItemDetails item={this.props.item} />
      </>
    ) : (
      <View direction='column' align='center' justify='center' dataCy='itemDetails'>
        <Loading />
      </View>
    )
  }

  <View direction='column'>
    <View display={this.props.loading ? 'none' : 'flex'} paddingVertical='nano' direction='row' align='center' justify='center' marginTop='nano'>
      <Touchable onClick={this.props.fill}>
        <View paddingX='nano' backgroundColor='primary' borderRadius='micro'>
          <Icon icon="conversion" colorIcon='neutral-100' />
        </View>
      </Touchable>
      <Input
        id='inputEAN'
        type='text'
        value={this.props.value}
        placeholder='Digite o código EAN'
        onChange={this.props.onChange}
        onSubmit={this.props.fill}
        autoFocus
      />
      <Touchable onClick={this.props.add}>
        <View paddingX='nano' backgroundColor='primary' borderRadius='micro'>
          <Icon icon="sum" colorIcon='neutral-100' />
        </View>
      </Touchable>
    </View>
    <Touchable onClick={this.props.onPaymentButtonClick}>
      <View
        backgroundColor='primary'
        borderRadius='micro'
        color='neutral-100'
        paddingVertical='medium'
      >
        <Text
          fontSize='small'
          textAlign='center'
          color='neutral-100'
        >Pagamento</Text>
      </View>
    </Touchable>
  </View>

</View>
