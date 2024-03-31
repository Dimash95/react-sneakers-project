import { NavLink } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { Switch } from "antd";
import styles from "./header.module.css";
import { ThemeContext } from "../../context";
import { useContext } from "react";
import classNames from "classnames";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const setActivePage = ({ isActive }: { isActive: boolean }) =>
    isActive ? styles.activeLink : styles.link;

  const onChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
    localStorage.setItem("theme", checked ? "dark" : "light");
  };

  return (
    <div
      className={classNames(
        theme === "dark" ? styles.wrapperDark : styles.wrapperLight,
        styles.wrapper
      )}
    >
      <FaReact className={styles.logo} />
      <ul className={styles.list}>
        <li>
          <NavLink to="/react-full-pet-project/" className={setActivePage}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/react-full-pet-project/catalog/1" className={setActivePage}>
            Catalog
          </NavLink>
        </li>
        <li>
          <NavLink to="/react-full-pet-project/about" className={setActivePage}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/react-full-pet-project/contacts" className={setActivePage}>
            Contacts
          </NavLink>
        </li>
      </ul>
      <div className={styles.icons}>
        <NavLink to="/react-full-pet-project/cart" className={setActivePage}>
          <TiShoppingCart className={styles.cart} />
        </NavLink>

        <Switch defaultChecked={theme === "dark" ? true : false} onChange={onChange} />
      </div>
    </div>
  );
};

export default Header;
