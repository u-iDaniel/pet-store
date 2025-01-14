import { FC, ReactNode, useEffect, useRef, useState } from "react";
import '@styles/Dropdown.css'

interface DropdownProps {
  name: string;
  children?: ReactNode;
}

const Dropdown: FC<DropdownProps> = (props) => {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setShow(!show);
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setShow(false);
    }
  }

  // Set up event listeners to check if user clicked outside
  // This component basically never dismounts so we need to check the state
  useEffect(() => {
    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  });

  return (
    <div ref={dropdownRef} className="dropdown">
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