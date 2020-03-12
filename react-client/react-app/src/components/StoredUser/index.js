import React from "react";

class StoredUser extends React.Component {
  constructor(props) {
    super();
    console.log('su props', props)
  }

  render = () => {
    const { profile } = this.props;

    return (
    <p>{profile.display_name}</p>
    );
  };
}

export default StoredUser;
