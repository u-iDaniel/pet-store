import '@styles/Navbar.css'
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

const Navbar = () => {
  const numItems = 1; // TODO: make state tracking cart items

  return (
    <nav>
      <Link to={"/"}><h1>Pet Store</h1></Link>
      <ul className='left'>
        <Link to={"/"}><li>Home</li></Link>
        <li>
          <Dropdown name='Shop'>
            <Link to={"/shop/cats"}>Cats</Link>
            <Link to={"/shop/dogs"}>Dogs</Link>
            <Link to={"/shop/birds"}>Birds</Link>
          </Dropdown>
        </li>
      </ul>
      <ul className='right'>
        <li>
          <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: "6px"}}>
            <path d="M6.49976 6C7.29541 6 8.05847 5.68393 8.62108 5.12132C9.18369 4.55871 9.49976 3.79565 9.49976 3C9.49976 2.20435 9.18369 1.44129 8.62108 0.87868C8.05847 0.316071 7.29541 0 6.49976 0C5.70411 0 4.94104 0.316071 4.37844 0.87868C3.81583 1.44129 3.49976 2.20435 3.49976 3C3.49976 3.79565 3.81583 4.55871 4.37844 5.12132C4.94104 5.68393 5.70411 6 6.49976 6ZM8.49976 3C8.49976 3.53043 8.28904 4.03914 7.91397 4.41421C7.5389 4.78929 7.03019 5 6.49976 5C5.96932 5 5.46062 4.78929 5.08554 4.41421C4.71047 4.03914 4.49976 3.53043 4.49976 3C4.49976 2.46957 4.71047 1.96086 5.08554 1.58579C5.46062 1.21071 5.96932 1 6.49976 1C7.03019 1 7.5389 1.21071 7.91397 1.58579C8.28904 1.96086 8.49976 2.46957 8.49976 3ZM12.4998 11C12.4998 12 11.4998 12 11.4998 12H1.49976C1.49976 12 0.499756 12 0.499756 11C0.499756 10 1.49976 7 6.49976 7C11.4998 7 12.4998 10 12.4998 11ZM11.4998 10.996C11.4988 10.75 11.3458 10.01 10.6678 9.332C10.0158 8.68 8.78876 8 6.49976 8C4.20976 8 2.98376 8.68 2.33176 9.332C1.65376 10.01 1.50176 10.75 1.49976 10.996H11.4998Z" fill="#23A6F0"/>
          </svg>
          Login/Register
        </li>
        <li>Search</li>
        <li>Cart ({numItems})</li>
      </ul>
    </nav>
  )
}

export default Navbar;