// Cria a classe de servico Clienteervice para realizar as chamadas HTTP REST via Axios
import axios from 'axios';
const Cliente_API_BASE_URL = "http://localhost:8080/api/v1/clientes";
class ClienteService {
 getClientes(){
 return axios.get(CLIENTE_API_BASE_URL);
 }
 createCliente(cliente){
 return axios.post(CLIENTE_API_BASE_URL, cliente);
 }
 getClienteyId(clienteId){
 return axios.get(Cliente_API_BASE_URL + '/' + clienteId);
 }
 updateCliente(cliente, clienteId){
 return axios.put(CLIENTE_API_BASE_URL + '/' + clienteId, cliente);
 }
 deleteCliente(clienteId){
 return axios.delete(CLIENTE_API_BASE_URL + '/' + clienteId);
 }
}
export default new ClienteService()
