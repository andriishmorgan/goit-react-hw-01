import css from "./Profile.module.css"

export const Profile = ({ userData: { username, tag, location, avatar, stats } }) => {
  return (
    <div className={css.profileContainer}>
<div>
<img
src={avatar}
alt={username}
className={css.profileImage}
/>
<p className={css.profileName}>{username}</p>
<p className={css.profileTag}>@{tag}</p>
<p className={css.profileTag}>{location}</p>
</div>

<ul className={css.list}>
<li className={css.listItem}>
<span className={css.listItemTitle}>Followers</span>
<span className={css.listItemAmount}>{stats.followers}</span>
</li>
<li className={css.listItem}>
<span className={css.listItemTitle}>Views</span>
<span className={css.listItemAmount}>{stats.views}</span>
</li>
<li className={css.listItem}>
<span className={css.listItemTitle}>Likes</span>
<span className={css.listItemAmount}>{stats.likes}</span>
</li>
</ul>
</div>
  )
}