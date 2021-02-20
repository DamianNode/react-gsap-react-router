import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { gsap } from 'gsap';

import 'reset-css';
import './App.scss';

import About from './pages/about';
import Home from './pages/home';
import Header from './components/header';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about', name: 'About', Component: About },
]

const App = () => {

  const onEnter = node => {
    gsap.from([node.children[0].firstElementChild, node.children[0].lastElementChild], {
      duration: .6,
      y: 30,
      delay: .6,
      ease: 'power3.InOut',
      opacity: 0,
      stagger: {
        amount: .6
      }
    })
  }

  const onExit = node => {
    gsap.to([node.children[0].firstElementChild, node.children[0].lastElementChild], {
      duration: .6,
      y: -30,
      ease: 'power3.InOut',
      stagger: {
        amount: .6
      }
    })
  }

  return (
    <>
    <Header />
      <div className="container">
        {routes.map(({path, name, Component}) => (
            <Route key={name} path={path} exact>
              {({match}) => (
                <CSSTransition 
                  in={match !== null} 
                  timeout={1200} 
                  classNames="page" 
                  unmountOnExit
                  onEnter={onEnter}
                  onExit={onExit}>
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
      </div>
    </>
  );
}

export default App;
