import PropTypes from 'prop-types';
import css from './FriendList.module.css'

export const FriendList = ({ friends }) => {
  return (
      <ul className={css.friend_list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={css.item }key={id}>
              <span className={`${css.status} ${css[isOnline]}`}></span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
