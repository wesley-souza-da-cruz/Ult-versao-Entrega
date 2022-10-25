// Codigo para visualizar os Clientes da tabela - informacoes basicas
import React, { Component } from "react";
import ClienteService from "../services/Clienteservice";
class ViewClienteComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      cliente: {},
    };
  }
  componentDidMount() {
    ClienteService.getClienteById(this.state.id).then((res) => {
      this.setState({ cliente: res.data });
    });
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> Dados do Cliente</h3>
          <div className="card-body">
            <div className="row">
              <label> Primeiro nome: </label>
              <div> {this.state.cliente.primeiroNome}</div>
            </div>
            <div className="row">
              <label> Ultimo nome: </label>
              <div> {this.state.cliente.ultimoNome}</div>
            </div>
            <div className="row">
              <label> Email: </label>
              <div> {this.state.cliente.emailId}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ViewClienteComponent;
