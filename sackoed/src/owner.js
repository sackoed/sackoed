import React from 'react';
import PropTypes from 'prop-types';

const Owner = ({
  firstName,
  lastName,
  leagueManager,
  ownerId,
  photoUrl,
  primaryOwner,
  userProfileId
}) => {
  return (
    <div>

    </div>
  );
};

Owner.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  leagueManager: PropTypes.bool,
  ownerId: PropTypes.number,
  primaryOwner: PropTypes.bool,
  userProfileId: PropTypes.number
};

Owner.defaultProps = {
  firstName: '',
  lastName: '',
  leagueManager: false,
  ownerId: 0,
  primaryOwner: false,
  userProfileId: 0
};

export default Owner;