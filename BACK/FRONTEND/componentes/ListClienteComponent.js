// Componente para listar os Clientes
import React, { Component } from "react";
import ClienteService from "../services/ClienteService";
class ListClienteComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientes: [],
    };
    this.addCliente = this.addCliente.bind(this);
    this.editCliente = this.editCliente.bind(this);
    this.deleteCliente = this.deleteCliente.bind(this);
  }
  deleteCliente(id) {
    ClienteService.deleteCliente(id).then((res) => {
      this.setState({
        clientes: this.state.clientes.filter(
          (cliente) => cliente.id !== id
        ),
      });
    });
  }
  viewCliente(id) {
    this.props.history.push(`/view-cliente/${id}`);
  }
  editCliente(id) {
    this.props.history.push(`/add-cliente/${id}`);
  }
  componentDidMount() {
    ClienteService.getCliente().then((res) => {
      this.setState({ clientes: res.data });
    });
  }
  addCliente() {
    this.props.history.push("/add-cliente/_add");
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Lista de Clientes</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addCliente}>
            {" "}
            Inserir Cliente
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Primeiro Nome Cliente</th>
                <th> Ultimo nome Cliente</th>
                <th> Email Cliente</th>
                <th> Acoes</th>
              </tr>
            </thead>
            <tbody>
              {this.state.clientes.map((cliente) => (
                <tr key={cliente.id}>
                  <td> {cliente.primeiroNome}</td>
                  <td> {cliente.ultimoNome}</td>
                  <td> {cliente.emailId}</td>
                  <td>
                    <button
                      onClick={() => this.editCliente(cliente.id)}
                      className="btn btn-info"
                    >
                      Alterar{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteCliente(cliente.id)}
                      className="btn btn-danger"
                    >
                      Apagar{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewCliente(cliente.id)}
                      className="btn btn-info"
                    >
                      Visualizar{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ListClienteComponent;
