import React, {useState} from 'react';
import axios from 'axios';
import * as S from './styled';

function App(props) {
  //definindo o estado:
  const [usuario, setUsuario] = useState('');

  //consumindo dados de uma API - o usuario digitado completa o link
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
  }

  return (
    <S.Container>
      <h1>{ props.title } </h1>
      <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/>
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      <p>{usuario}</p>
    </S.Container>
  );
}

export default App;
