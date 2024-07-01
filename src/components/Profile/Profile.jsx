import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.avatar}>
        <img className={s.img} src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p className={s.address}>@{tag}</p>
        <p className={s.address}>{location}</p>
      </div>

      <ul className={s.list}>
        <li className={s.item}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
