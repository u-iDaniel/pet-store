import { FC, ReactNode, useState } from "react";
import '@styles/Dropdown.css'

interface DropdownProps {
  name: string;
  children?: ReactNode;
}

const Dropdown: FC<DropdownProps> = (props) => {
  // TODO: Add ref to close dropdown menu when user clicks outside of dropdown
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow((show) => !show);
  }

  return (
    <div className="dropdown">
      <button onClick={toggleMenu}>
        { props.name } <>&nbsp;</>
        <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 -7.86804e-07L10.5 7.5L18 -1.31134e-07L21 1.5L10.5 12L-6.55671e-08 1.5L3 -7.86804e-07Z" fill="#737373"/>
        </svg>
      </button>

      {show && <div className="dropdown-menu">{ props.children }</div>}
    </div>
  )
}

export default Dropdown;