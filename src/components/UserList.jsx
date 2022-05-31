import UserItem from './UserItem'
import PropTypes from 'prop-types'

const UserList = ({ users }) => {

  return (
    <>
      {users.map(user => {
        return <UserItem
          key={user.name}
          {...user} />
      })}
    </>
  )
}

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ).isRequired
}
export default UserList
