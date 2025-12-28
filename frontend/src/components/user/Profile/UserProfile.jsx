// src/components/user/Profile/UserProfile.jsx
import ProfileAvatar from "./ProfileAvatar";
import ProfileForm from "./ProfileForm";

const UserProfile = ({ user, onUpdate }) => (
    <div className="mx-auto max-w-3xl space-y-6 rounded bg-white p-6 shadow">
        <h2 className="text-2xl font-semibold">My Profile</h2>
        <ProfileAvatar avatar={user.avatar} />
        <ProfileForm user={user} onUpdate={onUpdate} />
    </div>
);

export default UserProfile;
