<View dataCy='calc'>
    <View padding='nano' marginBottom='nano'>
        <Text fontWeight='bold' fontSize='medium'>{this.getVisor()}</Text>
    </View>
    <Grid>
        <Col columnSize={{ sm: 4 }}><CalcButton label='7' onClick={this.setValue} backgroundColor='neutral-300' color='neutral-700' /></Col>
        <Col columnSize={{ sm: 4 }}><CalcButton label='8' onClick={this.setValue} backgroundColor='neutral-300' color='neutral-700' /></Col>
        <Col columnSize={{ sm: 4 }}><CalcButton label='9' onClick={this.setValue} backgroundColor='neutral-300' color='neutral-700' /></Col>
    </Grid>
    <Grid>
        <Col columnSize={{ sm: 4 }}><CalcButton label='4' onClick={this.setValue} backgroundColor='neutral-300' color='neutral-700' /></Col>
        <Col columnSize={{ sm: 4 }}><CalcButton label='5' onClick={this.setValue} backgroundColor='neutral-300' color='neutral-700' /></Col>
        <Col columnSize={{ sm: 4 }}><CalcButton label='6' onClick={this.setValue} backgroundColor='neutral-300' color='neutral-700' /></Col>
    </Grid>
    <Grid>
        <Col columnSize={{ sm: 4 }}><CalcButton label='1' onClick={this.setValue} backgroundColor='neutral-300' color='neutral-700' /></Col>
        <Col columnSize={{ sm: 4 }}><CalcButton label='2' onClick={this.setValue} backgroundColor='neutral-300' color='neutral-700' /></Col>
        <Col columnSize={{ sm: 4 }}><CalcButton label='3' onClick={this.setValue} backgroundColor='neutral-300' color='neutral-700' /></Col>
    </Grid>
    <Grid>
        <Col columnSize={{ sm: 4 }}><CalcButton label='Apagar' onClick={this.setValue} backgroundColor='negative-700' color='neutral-100' /></Col>
        <Col columnSize={{ sm: 4 }}><CalcButton label='0' onClick={this.setValue} backgroundColor='neutral-300' color='neutral-700' /></Col>
        <Col columnSize={{ sm: 4 }}><CalcButton label='Pagar' onClick={this.setValue} backgroundColor='positive-300' color='neutral-100' /></Col>
    </Grid>
</View>
