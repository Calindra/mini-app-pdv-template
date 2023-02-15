<Touchable onClick={()=>{this.props.onClick(this.props.label)}}>
    <View padding='micro'>
        <View paddingVertical='medium' backgroundColor={this.props.backgroundColor} borderRadius='micro'>
            <Text textAlign='center' color={this.props.color} fontWeight='bold'>{this.props.label}</Text>
        </View>
    </View>
</Touchable>
