import React from 'react';
import './App.css';
import axios from 'axios';
import TeamList from './components/team_list';
import ArretList from './components/arrets_list';
import ArretDetail from './components/arret_detail';


class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {teams : [{id:1,name:'Nice', mj:16, g:12,n:3,pts:39},
    {id:3,name:'Monaco', mj:16, g:11,n:3,pts:36},
    {id:4,name:'PSG', mj:16, g:11,n:2,pts:35},
    {id:5,name:'Rennes', mj:16, g:8,n:3,pts:27},
    {id:6,name:'Lyon', mj:16, g:8,n:3,pts:25}],
    arrets: [],
    lignes: []    };

    this.exlorerArrets();
    };

    videoSearch(term)  {
       var THIS = this ;
      axios.get('http://open_preprod.tan.fr/ewp/tempsattente.json/' + term)
      .then(function (response) {
        THIS.setState({lignes:response.data});
        console.log(THIS.state.lignes);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    exlorerArrets() {
       var THIS = this ;
      axios.get('http://open_preprod.tan.fr/ewp/arrets.json')
      .then(function (response) {
        THIS.setState({arrets:response.data});
      })
      .catch(function (error) {
        console.log(error);
      });
    }
render() {

  const videoSearch = (term) => {this.videoSearch(term)}; 
  return(
      //<TeamList teams= {this.state.teams} />
      <div>
          <ArretList  onArretSelect= {videoSearch} arrets={this.state.arrets} />
           <ArretDetail lines={this.state.lignes} />
      </div>
  );
}
}

export default App;
