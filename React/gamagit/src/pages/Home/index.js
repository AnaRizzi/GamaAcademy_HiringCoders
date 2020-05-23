import React, {useState} from 'react';
import axios from 'axios';
import * as S from './styled';
import {useHistory} from 'react-router-dom';

function App(props) {
  const history = useHistory();

  //definindo o estado:
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false);

  //consumindo dados de uma API - o usuario digitado completa o link
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
      const repositories = response.data;
      const repositoriesName=[];
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setErro(false);
      history.push('/repositories');
    })
    .catch(err => {
      setErro(true);
    });
  }

  return (
    <S.Container>
      <h1>{ props.title } </h1>
      <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/>
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      <p>{usuario} <br/></p>
      {erro ? <S.ErrorMsg><br/>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : ''}
    </S.Container>
  );
}

export default App;
