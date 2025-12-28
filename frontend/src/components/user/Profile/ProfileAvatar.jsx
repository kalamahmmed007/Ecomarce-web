// src/components/user/Profile/ProfileAvatar.jsx
const ProfileAvatar = ({ avatar }) => (
    <div className="flex items-center space-x-4">
        <img src={avatar} alt="Profile" className="h-24 w-24 rounded-full border" />
        <button className="rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
            Change Avatar
        </button>
    </div>
);

export default ProfileAvatar;
