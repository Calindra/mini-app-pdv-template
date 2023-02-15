<Modal
  show={this.props.show}
  position='center'
  closeModalCallback={this.props.onClose}
>
  <View direction='column' padding='nano' align='center' backgroundColor='neutral-100'>
    <View marginBottom='nano'>
      <Text textAlign='center' fontSize='medium'>Ler produto</Text>
    </View>
    <Text textAlign='center'>Aperte no ícone de teclado para preencher automaticamente</Text>
    <View padding='nano' direction='row' align='center' justify='center' marginTop='nano'>
      <Input
        id='inputEAN'
        type='text'
        value={this.props.value}
        placeholder='Digite o código EAN'
        onChange={this.props.onChange}
        autoFocus
      />
      <Touchable onClick={this.props.fill}>
        <View paddingX='nano' backgroundColor='primary' borderRadius='micro'>
          <Icon icon="tecnico-Informatica-solid" colorIcon='neutral-100' />
        </View>
      </Touchable>
    </View>
    <View marginBottom='nano' direction='row' justify='center'>
      <Hint show type='negative'>{this.state.message}</Hint>
    </View>
    <View direction='row'>
      <View marginRight='nano' justify='end'>
        <Button label='Cancelar' variant='secondary' onClick={this.props.cancel} />
      </View>
      <View justify='start'>
        <Button label='Adicionar' onClick={this.checkCode} />
      </View>
    </View>
  </View>
</Modal>
