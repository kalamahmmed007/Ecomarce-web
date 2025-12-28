// src/components/auth/LoginForm/SocialLogin.jsx
const SocialLogin = () => (
    <div className="mt-4 space-y-2">
        <p className="text-center text-gray-500">Or login with</p>
        <div className="flex justify-center gap-4">
            <button className="rounded border px-4 py-2 transition hover:bg-gray-100">Google</button>
            <button className="rounded border px-4 py-2 transition hover:bg-gray-100">Facebook</button>
            <button className="rounded border px-4 py-2 transition hover:bg-gray-100">GitHub</button>
        </div>
    </div>
);

export default SocialLogin;
