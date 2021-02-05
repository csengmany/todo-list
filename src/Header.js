import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ title, logo }) => {
    return (
        <div className="header">
            <FontAwesomeIcon className="logo" icon={logo} />
            <h1>{title}</h1>
        </div>
    );
};
export default Header;
