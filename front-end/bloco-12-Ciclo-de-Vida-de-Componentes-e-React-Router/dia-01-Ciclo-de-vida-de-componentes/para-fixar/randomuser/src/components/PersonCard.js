import React from 'react'

class PersonCard extends React.Component {
  render() {
    const { person: { name, email, age, image } } = this.props;

    return (
      <section>
        <p>{name}</p>
        <p>{email}</p>
        <p>{age}</p>
        <img src={image} alt={name} />
      </section>
    )
  }
}

export default PersonCard;