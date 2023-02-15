<View
  direction='column'
  backgroundColor='neutral-100'
  borderColor='neutral-300'
  borderWidth='hairline'
  borderRadius='micro'
  padding='nano'
  margin='nano'
  marginRight='none'
>
  <View>
    <Grid noGap>
      <Col columnSize={{ sm: 8 }}>
        <ItemListLabel>
          <Text fontWeight='bold'>Produto</Text>
        </ItemListLabel>
      </Col>
      <Col columnSize={{ sm: 2 }}>
        <ItemListLabel>
          <Text textAlign='center' fontWeight='bold'>Quantidade</Text>
        </ItemListLabel>
      </Col>
      <Col columnSize={{ sm: 2 }}>
        <ItemListLabel>
          <Text textAlign='right' fontWeight='bold'>Preço</Text>
        </ItemListLabel>
      </Col>
    </Grid>
    <View dataCy='grid'>
      {
        this.props.items && this.props.items.length ? (
          this.props.items.map((item, idx) => (
            <Grid noGap key={idx}>
              <Col columnSize={{ sm: 8 }}>
                <ItemListLabel>
                  <View><Text>{item.ean}</Text></View>
                  <View><Text fontWeight='bold'>{item.name}</Text></View>
                </ItemListLabel>
              </Col>
              <Col columnSize={{ sm: 2 }}>
                <ItemListLabel>
                  <Text textAlign='center'>{item.quantity}</Text>
                </ItemListLabel>
              </Col>
              <Col columnSize={{ sm: 2 }}>
                <ItemListLabel>
                  <Text textAlign='right' fontWeight='bold'>{InterfaceService.formatMoney(item.quantity * item.price)}</Text>
                </ItemListLabel>
              </Col>
            </Grid>
          ))
        ) : (
          <View direction='row' align='center' justify='center' dataCy='noproduct' backgroundColor='neutral-300'>
            <Text fontSize='large' textAlign='center'>Caixa pronto para receber os produtos</Text>
          </View>
        )
      }
    </View>
    <Totalizer
      subtotal={this.props.subtotal}
      discount={this.props.discount}
      total={this.props.total}
    />
  </View>
</View>
