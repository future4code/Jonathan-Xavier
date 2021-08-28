import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <div>
        <div />
        <div className="showcase">
          <div className="showcase-container">
            <h2>Labefy Music</h2>
            <p>
              Qualquer música do planeta, na palma da sua mão
            </p>
            <div className="buttons">
              <button onClick={this.props.irCadastro} className="btn-primary">
                Nova Playlist
              </button>
              <button onClick={this.props.irPlaylist} className="btn-primary">
                Ouvir músicas
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
