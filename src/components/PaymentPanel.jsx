<View
  direction='column'
  justify='start'
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
    this.props.stage !== 'finish' ? (
      <View
        direction='row'
        dataCy='payment-options'
        flexWrap='wrap'
        justify='start'
        marginTop='nano'
        borderWidth='hairline'
        borderColor='neutral-300'
        borderRadius='micro'
      >
        <PaymentOption label="Dinheiro" loading={this.props.stage === 'cash'} disabled={this.props.stage === 'ame'} onClick={() => { this.props.onPaymentStartPress('cash') }} color='positive-300' icon='money-outline' />
        {/* <PaymentOption label="Débito" onClick={() => { this.props.onPaymentStartPress('debit')}} color='support-01' icon='credit-card-outline' /> */}
        {/* <PaymentOption label="Crédito" onClick={() => { this.props.onPaymentStartPress('credit')}} color='warning-700' icon='credit-card-solid' /> */}
        <PaymentOption label="Ame Digital" loading={this.props.stage === 'ame'} disabled={this.props.stage === 'cash'} onClick={() => { this.props.onPaymentStartPress('ame') }} color='support-01' icon='ame-solid' />
      </View>
    ) : null
  }

  {
    this.props.stage === 'cash' ? (
      <View direction='row' dataCy='payment-options' flexWrap='wrap' justify='between'>
        <Calc onAdd={this.props.onAddMoney} />
      </View>
    ) : null
  }

  {
    this.props.stage === 'buttons' ? (
      <View marginTop="nano">
        <Button variant='secondary' size='small' label='Voltar' onClick={this.props.onBackPress} />
      </View>
    ) : null
  }

  {
    this.props.QRCode ? (
      <View padding='nano' direction='column' align='center' justify='center'>
        <View marginBottom='nano' marginTop='nano'>
          <Text fontSize='large' lineHeight='medium'>Pagamento com Ame</Text>
        </View>
        <View marginBottom='nano'>
          <Text fontSize='small' lineHeight='medium'>Peça ao cliente para apontar o pagamento Ame neste QRCode</Text>
        </View>
        <QRCode value={this.props.QRCode} />
      </View>
    ) : null
  }

  {
    this.props.awaitingNF ? (
      <View padding='nano' direction='column' align='center' justify='center'>
        <View marginBottom='nano' marginTop='nano'>
          <Text fontSize='large' lineHeight='medium'>Gerando Nota Fiscal</Text>
        </View>
        <View marginBottom='nano'>
          <Text fontSize='small' lineHeight='medium'>Aguarde enquanto realizamos a comunicação para emissão.</Text>
        </View>
        <Loading width='120px' />
      </View>
    ) : null
  }

  {
    this.props.invoiceGenerated ? (
      <View padding='nano' direction='column' align='center' justify='center'>
        <View marginBottom='nano' marginTop='nano'>
          <Text fontSize='large' lineHeight='medium'>Sucesso</Text>
        </View>
        <View marginBottom='nano'>
          <Text fontSize='small' lineHeight='medium'>Nota fiscal gerada.</Text>
        </View>
      </View>
    ) : null
  }
</View>
