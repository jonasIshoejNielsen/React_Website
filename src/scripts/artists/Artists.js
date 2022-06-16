import React, {Component} from 'react';
import ArtistButton from "./ArtistButton";
import AlertBox from "../alert/AlertBox";
import Loading from "./Loading";

const url = 'https://syst-api.azurewebsites.net/marktramp/artists';

class Artists extends Component {
    constructor() {
        super();
        this.state = {
            size: 0,
            selectedArtists: [],
            artists: [],
            warning : "",
            isLoading: true
        };
        this.validateSelection = this.validateSelection.bind(this);
        this.isMaxArtists      = this.isMaxArtists.bind(this);
        this.retrieveArtists();
    }

    retrieveArtists() {
        this.setState({isLoading: true});
        this.getData()
            .then(artist => this.setState({artists: artist.sort(), isLoading: false}))
            .catch(() => console.log("Error in retrieving artists"));

    }

    async getData() {
        return await fetch(url)
            .then(data => data.json());
    }

    validateSelection(changeToActive, artist) {
        if(!changeToActive) {
            if(this.isMaxArtists()) return false;
            return this.updateArtist(true, artist);
        } else return this.updateArtist(false, artist);
    }

    updateArtist(add, artist) {
        let artists = this.state.selectedArtists;
        if(add) {
            artists[artist] = artist;
            this.setState({
                size : this.state.size + 1,
                selectedArtists: artists
            });
        } else {
            delete artists[artist];
            this.setState({
                size : this.state.size - 1,
                selectedArtists: artists
            });
        }
        return true;
    }

    isMaxArtists() {
        return this.state.size >= 3;
    }

    validate() {
        if(!this.isMaxArtists()) {
            this.setState({warning: "Du skal vælge 3 kunstnere!"});
            return false;
        }
        this.setState({warning: ""});
        this.props.getData("artists", this.getSelectedArtistArray());
        return true;
    }
    
    isArtistInArray(artist) {
        if(this.state.selectedArtists[artist]) return true;
        return false;
    }

    getSelectedArtistArray() {
        let artist = ["", "", ""];
        Object.keys(this.state.selectedArtists).forEach(function (key, index) { artist[index] = key;});
        return artist;
    }

    render () {
        if(!this.props.isValidated) {
            return  <div>
                        <div className="row"><p>Du har valgt {this.state.size} af 3 kunstnere</p></div>
                        <div className="rightColumn flex-row">
                            <Loading isLoading={this.state.isLoading} />
                            {this.state.artists.map(artist => (<ArtistButton key={artist}
                                                                        isActive={this.isArtistInArray(artist)}
                                                                        title={artist}
                                                                        validateSelection={this.validateSelection}
                                                                        isMaxArtists={this.isMaxArtists()}
                                                                        confirm={false}/>))}
                        </div>
                        <AlertBox title={this.state.warning} />
                    </div>
        } else {
            return  <div className="rightColumn flex-row">
                        <Loading isLoading={this.state.isLoading} />
                        {this.getSelectedArtistArray().map(artist => (<ArtistButton key={artist}
                                                                                    isActive={false}
                                                                                    title={artist}
                                                                                    validateSelection={this.validateSelection}
                                                                                    isMaxArtists={this.isMaxArtists()}
                                                                                    confirm={true}/>))}
                    </div>
        }
    }
}

export default Artists;
