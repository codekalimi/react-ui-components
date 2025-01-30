const UserCard = ({ username, email }) => {
    return (
        <div>
            <h2>{username}</h2>
            <p>{email}</p>
        </div>
    );
}

export default UserCard;