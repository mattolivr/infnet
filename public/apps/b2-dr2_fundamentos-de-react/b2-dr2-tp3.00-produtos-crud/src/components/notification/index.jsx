import "./styles.css";

export default function Notification({ message, type = "success" }) {
    if (!message) return null;

    return (
        <div className={`notification notification-${type}`}>
            {message}
        </div>
    );
}
