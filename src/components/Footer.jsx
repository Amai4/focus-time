import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer>
            <div>
            <Link to="/">
                <button className="footer-button">Home</button>
            </Link>
            </div>
            <div>
            {location.pathname === "/focus" && (
                <Link to="/prefocus">
            <button className="footer-button">Settings</button>
            </Link>
            )}
            </div>
        </footer>
    )
}