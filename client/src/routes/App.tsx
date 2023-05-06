import React from 'react';
import routerMap from '../routerMap';
import { Header, Main, Palette, Tile, TileDesc, TileHead } from './IndexStyle';

class App extends React.Component {

  renderPalette() {
    return routerMap.slice(1).map((tile) => {
      return (
        <Tile to={tile.path} key={tile.path}>
          <TileHead>{tile.name}</TileHead>
          <TileDesc>{tile.desc}</TileDesc>
        </Tile>
      )
    })
  }

  render() {
    return (
      <Main>
        <Header>PYARKA`s experiments</Header>
        <Palette>
          {this.renderPalette()}
        </Palette>
      </Main>
    )
  }
}

export default App;
