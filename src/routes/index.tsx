import { SignIn } from '../pages/SignIn';
 import { Routes,Route } from 'react-router-dom';
import { Painel } from '../pages/Painel';
import { Integracao } from '../pages/Integracao';
import { Configuracao } from '../pages/configuracao';
import { ConexaoCliente } from '../pages/configuracao/conexaoCliente';
import { CreateConexaoCliente } from '../pages/configuracao/conexaoCliente/createConexaoCliente';
import { Users } from '../pages/Painel/usuarios';
import { CreateUsers } from '../pages/Painel/usuarios/createUsuarios';
import { Motivo } from '../pages/Painel/motivo';
import { CreateMotivos } from '../pages/Painel/motivo/createMotivos';
import { UsersLogados } from '../pages/Painel/usuariosLogados';
import { CreateTipoMotivos } from '../pages/Painel/tipoMotivo';
import { SubGrupos } from '../pages/entradas/subgrupo';
import { Expedicao } from '../pages/expedicao';
import { Fornecedores } from '../pages/Painel/fornecedores';
import { Grupos } from '../pages/entradas/grupo';
import { Entradas } from '../pages/entradas/entradas';
import { Regiao } from '../pages/expedicao/regiao';
import { Rotas } from '../pages/expedicao/rotas';
import { CreateClientes } from '../pages/expedicao/clientes/createClientes';
import { Vendedores } from '../pages/expedicao/vendedores';
import { Transportadoras } from '../pages/expedicao/transportadoras';
import { CreateTransportadoras } from '../pages/expedicao/transportadoras/createTransportadoras';
import { VeiculoTransportadoras } from '../pages/expedicao/veiculostransportadoras';
import { CreateVeiculoTransportadoras } from '../pages/expedicao/veiculostransportadoras/createTransportadoras';
import { Movimentacao } from '../pages/movimentacao';
import { Gestao } from '../pages/gestao';
import { Auditoria } from '../pages/auditoria';
import { Cadastro } from '../pages/Cadastro';
import { Consulta } from '../pages/consulta';
import { Recepcao } from '../pages/recepcao';
import { Licencas } from '../pages/configuracao/licenca';

export default function RoutesApp(){
    return(
        
            <Routes>

                <Route path="/" element={<SignIn />} />
                
                <Route path="/painel" element={<Painel />} />
                <Route path="/painel/motivo" element={<Motivo />} />
                <Route path="/painel/motivo/create" element={<CreateMotivos />} />
                <Route path="/painel/motivo/tipo-motivo" element={<CreateTipoMotivos />} />
                <Route path="/painel/motivUsersLogadoso/create" element={<CreateMotivos />} />
                <Route path="/painel/usuarios-logado" element={<UsersLogados />} />
                
                <Route path="/integracao" element={<Integracao />} />
                
                <Route path="/configuracao" element={<Configuracao />} />
                <Route path="/configuracao/licenca" element={<Licencas />} />
                <Route path="/configuracao/conexao-cliente" element={<ConexaoCliente />} />
                <Route path="/configuracao/conexao-cliente/create" element={<CreateConexaoCliente />} />
                <Route path="/configuracao/usuarios" element={<Users />} />
                <Route path="/configuracao/usuarios/create" element={<CreateUsers />} />


                <Route path="/entradas" element={<Entradas />} />
                <Route path="/entradas/grupos" element={<Grupos />} />
                <Route path="/entradas/subgrupos" element={<SubGrupos />} />
                 <Route path="/entradas/fornecedores" element={<Fornecedores />} />


                <Route path="/expedicao" element={<Expedicao />} />
                <Route path="/expedicao/regiao" element={<Regiao />} />
                <Route path="/expedicao/rotas" element={<Rotas />} />
                <Route path="/expedicao/clientes" element={<CreateClientes />} />
                <Route path="/expedicao/vendedores" element={<Vendedores />} />
                <Route path="/expedicao/transportadoras" element={<Transportadoras />} />
                <Route path="/expedicao/transportadoras/create" element={<CreateTransportadoras />} />
                <Route path="/expedicao/veiculotransportadoras" element={<VeiculoTransportadoras />} />
                <Route path="/expedicao/veiculotransportadoras/create" element={<CreateVeiculoTransportadoras />} />


                <Route path="/movimentacao" element={<Movimentacao />} />

                <Route path="/gestao" element={<Gestao />} />
                          
                <Route path="/auditoria" element={<Auditoria />} />


                <Route path="/cadastro" element={<Cadastro />} />

                <Route path="/consulta" element={<Consulta />} />

                <Route path="/recepcao" element={<Recepcao />} />

        
            </Routes>
     )
}