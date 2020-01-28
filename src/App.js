import React from 'react';
import logo from './images/rick-and-morty.png';
import './App.css';
import Loader from './components/Loader'

//import data from './data/data.json';
import logo_192 from  './images/logo192.png';

function CharacterCard(props){
  const {character}=props;
  return(
    <div  className="CharacterCard"
      style={{backgroundImage:`url(${character.image})`}}>
      <div className="Character__name-container text-truncate">
          {character.name}   
        </div>
    </div>
  )
}


class App extends React.Component{
  state={
    nextPage:[],
    loading:true,
    error:null,
    data:{
      results:[],
    },
  }
  componentDidMount(){
    this.fetchCharacters()
  }
  fetchCharacters=async ()=>{
    this.setState({loading:true, error:null})
    try{
    //const response = await fetch('https://rickandmortyapi.com/api/character/'  ) //promesa asyncrona osea hay que esperar por la respuesta
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`  ) //promesa asyncrona osea hay que esperar por la respuesta
    const data = await response.json();

    this.setState({
      loading:false,
      data:{
        info:data.info,
        results:[].concat(
          this.state.data.results,
          data.results
        )
      },
      nextPage:this.state.nextPage + 1,
    })
  }catch(error){
    this.setState({
      loading:false,
      error:error
    })
  }
  }
  render(){
    if(this.state.error){
      return `Error: ${this.state.error.message}`
  }
  return (
   
  <div className="background">  
  <div className="container">
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
      <ul className="row">
        {this.state.data.results.map(character=>(
        <li className="col-6 col-md-3" key={character.id}>
          <CharacterCard character={character}/>
        </li>
       ))}
      </ul>
      {this.state.loading &&(
        <div className="loader">
          <Loader />
        </div>
      )}

      {!this.state.loading &&(
        <button onClick={()=>this.fetchCharacters()} style={{width:"100%"}} >Load more</button>
      )}
    </div>
    </div>
    </div>
  );
}
}

export default App;
