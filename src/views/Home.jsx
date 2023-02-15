<Window>
  <Grid noGap={true} columns={12}>
    <Col columnSize={{sm: 8}}>
      <ItemList 
        items={this.state.productList} 
        subtotal={InterfaceService.formatMoney(this.state.subtotal)}
        discount={InterfaceService.formatMoney(this.state.discount)}
        total={InterfaceService.formatMoney(this.state.total)}
      />
    </Col>
    <Col columnSize={{sm: 4}}>
      <ItemFeeder
        loading={this.state.loading}
        operatorMessage={this.state.operatorMessage}
        item={this.state.lastProduct}
        onAddButtonClick={this.showInputModal}
        onPaymentButtonClick={this.goToPayment}
        value={this.state.inputValue}
        onChange={(inputValue) => {this.setState({inputValue})}} 
        add={this.addProductDelay}
        fill={this.fillProduct}
      />
    </Col>
  </Grid>
</Window>
