import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { Test } from './UserList.styles';

const UserList = (props) => (
  <div className="UserListWrapper">
    <h1 className="tc">My Data</h1>
      <div class="pa1">
      <div class="overflow-auto">
      <table class="f6 w-100 mw8 center" cellspacing="0">
      <thead>
        <tr>
          <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Name</th>
          <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Username</th>
          <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Email</th>
          <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">ID</th>
          <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">
          <a class="f6 f5-l link dib pa3 ph4-l" href="/adduser">Add User</a>
          </th>
        </tr>
      </thead>
      <tbody class="lh-copy">
        <tr>
          <td class="pv3 pr3 bb b--black-20">Hassan Johnson</td>
          <td class="pv3 pr3 bb b--black-20">@hassan</td>
          <td class="pv3 pr3 bb b--black-20">hassan@companywithalongdomain.co</td>
          <td class="pv3 pr3 bb b--black-20">14419232532474</td>
          <td class="pv3 pr3 bb b--black-20">14419232532474</td>
        </tr>
        <tr>
          <td class="pv3 pr3 bb b--black-20">Taral Hicks</td>
          <td class="pv3 pr3 bb b--black-20">@hicks</td>
          <td class="pv3 pr3 bb b--black-20">taral@companywithalongdomain.co</td>
          <td class="pv3 pr3 bb b--black-20">72326219423551</td>
          <td class="pv3 pr3 bb b--black-20">14419232532474</td>
        </tr>
        <tr>
          <td class="pv3 pr3 bb b--black-20">Tyrin Turner</td>
          <td class="pv3 pr3 bb b--black-20">@tt</td>
          <td class="pv3 pr3 bb b--black-20">ty@companywithalongdomain.co</td>
          <td class="pv3 pr3 bb b--black-20">92325170324444</td>
        </tr>
        <tr>
          <td class="pv3 pr3 bb b--black-20">Oliver Grant</td>
          <td class="pv3 pr3 bb b--black-20">@oli</td>
          <td class="pv3 pr3 bb b--black-20">oliverg@companywithalongdomain.co</td>
          <td class="pv3 pr3 bb b--black-20">71165170352909</td>
        </tr>
        <tr>
          <td class="pv3 pr3 bb b--black-20">Dean Blanc</td>
          <td class="pv3 pr3 bb b--black-20">@deanblanc</td>
          <td class="pv3 pr3 bb b--black-20">dean@companywithalongdomain.co</td>
          <td class="pv3 pr3 bb b--black-20">71865178111909</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
  </div>
);

UserList.propTypes = {
  // bla: PropTypes.string,
};

UserList.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList);
