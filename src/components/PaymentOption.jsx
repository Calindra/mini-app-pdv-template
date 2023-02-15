<Touchable onClick={() => { 
    if(!this.props.disabled){
        this.props.onClick()
    } 
    }
    }>
    <View
        backgroundColor={this.props.disabled ? 'neutral-300' : this.props.color}
        paddingVertical='nano'
        borderRadius='micro'
        borderWidth='hairline'
        borderColor='neutral-300'
        direction='column'
        align='center'
        justify='center'
        margin='nano'
        dataCy={this.props.icon}
    >
        {
            this.props.loading ? (
                <Loading />
            ) : (
                <>
                    <Icon icon={this.props.icon} colorIcon='neutral-100' />
                    <Text textAlign='center' color='neutral-100'>{this.props.label}</Text>
                </>
            )
        }
    </View>
</Touchable>

