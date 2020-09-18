import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Logo from "../../assets/computador.PNG";
import api from "../../services/api";
import { login } from "../../services/auth";

import { Form, Container } from "./styles";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/sessions", { email, password });
        login(response.data.token);
        this.props.history.push("/app");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignIn}>
          {this.state.error && <p class="error">{this.state.error}</p>}
          <h2>orange</h2>
          <label>Email</label>
          <div class="input">
            <input
              type="email"
              placeholder="seunome@email.com"
              onChange={e => this.setState({ email: e.target.value })}
            />
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
          </div>
          <label>Password</label>
          <div class="input">
            <input
              type="password"
              placeholder="Password"
              onChange={e => this.setState({ password: e.target.value })}
            />
            <i class="fa fa-lock" aria-hidden="true"></i>
          </div>

          <div class="section-check">
            <input
              class="check"
              type="checkbox"
              value="Bike"
            />
            <label class="label-check">Mostrar a senha.</label>
          </div>
          <p><strong>Problemas para acessar sua conta?</strong></p>
          <button type="submit">Acessar</button>
          <div class="lines">
            <span></span>
            <p>ou</p>
            <span></span>
          </div>
          <Link to="/signup">Cadastrar</Link>
          <p>Termos de uso  •  Política de privacidade</p>
        </Form>
        <img src={Logo} alt="Computador" />
      </Container>
    );
  }
}

export default withRouter(SignIn);
