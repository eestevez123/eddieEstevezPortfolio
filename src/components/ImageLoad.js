import React from 'react';
import Image from "react-bootstrap/Image"
import Spinner from "react-bootstrap/Spinner"

class ImageLoad extends React.Component { 

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }
    componentDidMount() {
        console.log("Image has not loaded")
    }

    handleImageLoading() {
        console.log("Image had been loaded");
        this.setState({
            loading: true
        });
    }

    render(){
        return(<>
        <Image id={this.props.id} alt={this.props.imgAlt} src={this.props.src} rounded className={this.props.className} style={{display: (this.state.loading)?"block":"none"}} onLoad={this.handleImageLoading.bind(this)} />
        <Spinner annimation="border" style={{display: (this.state.loading)?"none":"block"}} />
        </>
        )
    }
}

export default ImageLoad;