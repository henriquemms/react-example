import React from 'react';
import MyInputText from '../MyInputText'


class Calculator extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      valueOne: 0,
      valueTwo: 0,
      result: ""
    }

    this.onChange = this.onChange.bind(this);
    this.sum = this.sum.bind(this);
  }


  //comentário para fazer anotações
  onChange(e) {
    e.persist()
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.value)
    console.log(e.target.name)
  }

  sum() {
    let value1 = this.state.valueOne;
    let value2 = this.state.valueTwo;

    this.setState({ result: parseFloat(value1) + parseFloat(value2) })
  }



  render() {
    return (
      <form>
        <h3>{this.props.title}</h3>
        <MyInputText label="Valor 1"
          inputTyper="text"
          name="valueOne"
          value={this.state.valueOne}
          onChange={this.onChange} />

        <MyInputText label="Valor 2"
          inputTyper="text"
          name="valueTwo"
          value={this.state.valueTwo}
          onChange={this.onChange}/>
        <br />
        <button type="button"
          onClick={this.sum}>Calcular</button>
        <br />
        {this.state.result !== "" && <span>O resultado é: {this.state.result}</span>}
      </form>


    );
  }
}

export default Calculator;
