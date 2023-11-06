import './App.css';

function App() {
  return (
    <nav className={`nav`}>
        <img
            alt = 'Netflix logo'
            src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
            className = 'nav__logo'
            onClick = {() => window.location.reload()}
            />
        <img 
            alt = 'User logged'
            src="https://help.nflxext.com/7c146f12-decd-4a82-94d1-f3f7d53f05d7_hello_kitty_happiness_parade_appicon_en.png"
            className = 'nav__avatar'
            />
    </nav>  
    
  );
}

export default App;
