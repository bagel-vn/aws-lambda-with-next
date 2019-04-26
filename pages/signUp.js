import React, {Component} from 'react'
import Layout from '../components/layout'
import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js'

export default class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      'username':'',
      'email':'',
      'password1':'',
      'password2':''
    }
    
    this.handleUsername = this.handleUsername.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword1 = this.handlePassword1.bind(this);
    this.handlePassword2 = this.handlePassword2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(event){
    console.log(event.target.value);
    this.setState({
      username: event.target.value,
      password1: this.state.password1,
      password2: this.state.password2,
      email: this.state.email
    })
  }

  handleEmail(event){
    console.log(event.target.value);
    this.setState({
      username: this.state.username,
      password1: this.state.password1,
      password2: this.state.password2,
      email: event.target.value
    })
  }

  handlePassword1(event){
    console.log(event.target.value);
    this.setState({
      username: this.state.username,
      password1: event.target.value,
      password2: this.state.password2,
      email: this.state.email
    })
  }

  handlePassword2(event){
    console.log(event.target.value);
    this.setState({
      username: this.state.username,
      password1: this.state.password1,
      password2: event.target.value,
      email: this.state.email
    })
  }

  handleSubmit(){
    var poolData = { UserPoolId: "ap-southeast-1_3pEEiegFe", ClientId: "5vvda0mciv86ftasq89bgtjrm3"};
    console.log(poolData);
    var userPool = new CognitoUserPool(poolData);
    var attributeList = [];
    var dataEmail = {Name: 'email', Value: this.state.email};
    attributeList.push(new CognitoUserAttribute(dataEmail));
    attributeList.push(new CognitoUserAttribute({Name: 'given_name', Value: 'Test'}));
    attributeList.push(new CognitoUserAttribute({Name: 'family_name', Value: 'Lee'}));
    userPool.signUp(this.state.username, this.state.password1, attributeList, null, function(err, result){
      if(err){alert(JSON.stringify(err));}
      var cognitoUser = result.user;
      alert('username is'+ cognitoUser.getUsername());
      alert(cognitoUser);
    })

  }

  render() {
    return (
      <Layout>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" value={this.state.username} onChange={this.handleUsername}/>
          </label>
          <label>
            Email:
            <input type="text" value={this.state.email} onChange={this.handleEmail} />
          </label>
          <label>
            Password1:
            <input type="password" value={this.state.password1} onChange={this.handlePassword1} />
          </label>
          <label>
            Password2:
            <input type="password" value={this.state.password2} onChange={this.handlePassword2}/>
          </label>
          <input type="submit" value="Sign Up" />
        </form>
      </Layout>
    )
  }
}
