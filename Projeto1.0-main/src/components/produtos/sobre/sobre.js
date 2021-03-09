import React from 'react';
import './sobre.css'; 
import ifnmgPort from '../sobre/ifnmgPort.jpg';


const Sobre = () => {
    return (
        <div className="PagSobre">
            <h1>Sobre nós</h1>
            <img src={ifnmgPort} className="imgIF"/> 

            
            <p> 
                A plataforma foi desenvolvida através de uma parceria do IFNMG - Campus Porteirinha com a 
                Associação Aproqueijo. Para a realização da plataforma contamos com a colaboração 
                da empresa xxxxxxxxxx.
            </p>
            <p>

            </p>

            <table className="tabela">
                <tr>
                    <th>Nome</th>
                    <th>Papel</th>
                    <th>Email</th>
                </tr>
                <tr>
                    <td>Brenda Caroline</td>
                    <td>Desenvolvedora</td>
                    <td>bcsm@aluno.ifnmg.edu.br</td>
                </tr>
                <tr>
                    <td>Izaque Nunes</td>
                    <td>Desenvolvedor</td>
                    <td>idm1@aluno.ifnmg.edu.br</td>
                </tr>
                <tr>
                    <td>Joyce França</td>
                    <td>Coordenadora do projeto</td>
                    <td>joyce.franca@ifnmg.edu.br</td>
                </tr>
                <tr>
                    <td>Wesley Bruno</td>
                    <td>Colaborador</td>
                    <td>wbbs@aluno.ifnmg.edu.br</td>
                </tr>
                <tr>
                    <td>Leandro Pereira</td>
                    <td>Colaborador</td>
                    <td>lpds@aluno@ifnmg.edu.br</td>
                </tr>
                <tr>
                    <td>Márcio França</td>
                    <td>Colaborador</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Eduarda</td>
                    <td>Coordenadora da Associação</td>
                    <td></td>
                </tr>
            </table>
            
        </div>
        
    )
};

export default Sobre;