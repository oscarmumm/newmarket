import newmarket_logo from '../../images/logo/newmarket_logo.png';
import './Logo.css';

const Logo = () => {
  return (
    <div>
      <img className='main-logo' src={newmarket_logo} alt="logo" />
    </div>
  )
}

export default Logo;