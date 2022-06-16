import React, {Component} from 'react';
import '../../styles/artist.css';

class ArtistButton extends Component {
    constructor(props) {
        super();
        this.state = {
            isActive: props.isActive
        }
    }

    onClick() {
        if(this.props.validateSelection(this.state.isActive, this.props.title)) {
            this.setState({isActive: !this.state.isActive});
        }
    }

    getClassName() {
        let styles = "artistButton";
        if(this.props.confirm) return styles += " confirm";
        if(this.props.isMaxArtists && !this.state.isActive) return styles += " disabled";
        if(this.state.isActive) return styles += " active";
        return styles;
    }

    render() {
        if(!this.props.confirm) {
            return  <div className={this.getClassName()} onClick={() => this.onClick()}>
                        <div className="artistTitle">{this.props.title}</div>
                    </div>
        } else {
            return  <div className={this.getClassName()}>
                        <div className="artistTitle">{this.props.title}</div>
                    </div>
        }
    }
}

export default ArtistButton;