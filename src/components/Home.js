import React, { Fragment } from 'react';

import User from './User';

import { concatName } from '../utils/helpers';

const Home = ({ users }) => (
  <Fragment>
    {users.map(
      ({
        email,
        gender,
        name: { title, first, last },
        picture: { thumbnail },
      }) => (
        <User
          key={email}
          gender={gender}
          email={email}
          name={concatName(...[title, first, last])}
          photo={thumbnail}
        />
      ),
    )}
  </Fragment>
);

export default Home;
