function formatDate(date) {
  return new Date(date).toTimeString()
}

function Avatar(props) {
  return <img src={props.user.avatarUrl} alt={props.user.name} />
}

const UserInfo = (props) => {
  return (
    <div class='UserInfo'>
      <Avatar user={props.user} />
      <div className='UserInfo-name'>{props.user.name}</div>
    </div>
  )
}

function Comment(props) {
  return (
    <div class='Comment'>
      <UserInfo user={props.author} />
      <div className='Comment-text'>{props.text}</div>
      <div className='Comment-date'>{formatDate(props.date)}</div>
    </div>
  )
}

export default Comment
