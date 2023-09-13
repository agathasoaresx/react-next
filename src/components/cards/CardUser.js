import './CardUser.css'

const CardUser = ({user}) => {
  return (
    <div className="card-user">
    <img src={user.photo} alt={user.name} />
    <div>
      <h4>{user.name}</h4>
      <p>{user.email}</p>
    </div>
  </div>
  )
}

export default CardUser