// src/components/auth/EmailVerification/EmailVerification.jsx
const EmailVerification = ({ onVerify, email }) => (
    <div className="mx-auto max-w-md space-y-4 rounded bg-white p-6 text-center shadow">
        <h2 className="text-2xl font-semibold">Verify Your Email</h2>
        <p className="text-gray-600">We sent a verification link to <strong>{email}</strong>.</p>
        <button
            onClick={onVerify}
            className="rounded bg-green-600 px-4 py-2 text-white transition hover:bg-green-700"
        >
            Resend Verification
        </button>
    </div>
);

export default EmailVerification;
