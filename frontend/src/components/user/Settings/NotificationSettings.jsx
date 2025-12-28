// src/components/user/Settings/NotificationSettings.jsx
const NotificationSettings = ({ settings, onToggle }) => {
    const toggle = type => onToggle(type);

    return (
        <div className="mx-auto max-w-2xl space-y-4 rounded bg-white p-6 shadow">
            <h2 className="text-2xl font-semibold">Notification Settings</h2>
            <div className="space-y-2">
                {Object.keys(settings).map(key => (
                    <div key={key} className="flex items-center justify-between border-b py-2">
                        <span className="capitalize">{key.replace(/_/g, " ")}</span>
                        <input
                            type="checkbox"
                            checked={settings[key]}
                            onChange={() => toggle(key)}
                            className="h-5 w-5"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationSettings;
