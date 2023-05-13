import Collapsible from '@/components/Collapsible/CollapsibleMenu';
import styler from './AccountScreen.module.css';

function AccountScreen() {
  return (
    <>
      <div className={styler.MainContainer}>
        <head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:700" />
        </head>
        <a href='/'>
          <div className={styler.Button}>X</div>
        </a>
        <img src='/images/blue_text.svg' alt='Areas' className={styler.Image} />
        <p className={styler.Text}>Account</p>
        
        
      </div>
    </>
  );
}

export default AccountScreen;
