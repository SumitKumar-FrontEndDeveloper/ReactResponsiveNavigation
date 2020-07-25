import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './AddUsers.styles';

class AddUsers extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      username:'',
      email:'',
      gender: ''

    };
  }

  addUser() {
    alert("adding user");
  }

  onChangeEmail(e:any) {
    this.setState({email:e.target.value});
  }
  onChangeName(e:any) {
    this.setState({email:e.target.value});
  }
  onChangePassword(e:any) {
    this.setState({email:e.target.value});
  }
  componentWillMount = () => {
    console.log('AddUsers will mount');
  }

  componentDidMount = () => {
    console.log('AddUsers mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('AddUsers will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('AddUsers will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('AddUsers did update');
  }

  componentWillUnmount = () => {
    console.log('AddUsers will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="AddUsersWrapper">
        <main className="pa4 black-80">
      <form className="measure center">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0 center">Add User</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" for="email-address">Name</label>
        <input className="pa2 ba  w-100" type="email" name="email-address"  id="email-address" onChange={this.onChangeEmail.bind(this)} />
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
        <input className="pa2 ba  w-100" type="email" name="email-address"  id="email-address" />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" for="password">Gender</label>
        <select className="w-100 ph1 pv2 pr4 center b--light-blue">
          <option value="0">Select Gender</option>
          <option value="1">Male</option>
          <option value="2">Female</option>
        </select>
      </div>
    </fieldset>
    <div className="w-60 center">
      <input className="b ph3 w-100 pv2 input-reset ba b--light-blue  light-red grow pointer f6 dib center" type="button" onClick={this.addUser.bind(this)} value="Sign in" />
    </div>
    <div className="lh-copy mt3">
      
    </div>
  </form>
</main>
      </div>
    );
  }
}

AddUsers.propTypes = {
  // bla: PropTypes.string,
};

AddUsers.defaultProps = {
  // bla: 'test',
};

export default AddUsers;
