import React, { useContext } from "react";
import { Switch, Route, __RouterContext } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { Presentacion, Integrantes, Gracias, Navbah, Proyecto } from "./components";


const App = () => {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0%, 0)" },
    leave: { opacity: 0, transform: "translate(-50%, 0)" }
  });

  return (
    <>
      <Navbah />
      <main className="">
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route exact path="/" component={Presentacion} />
              <Route exact path="/integrantes" component={Integrantes} />
              <Route exact path="/proyecto" component={Proyecto} />
              <Route exact path="/gracias" component={Gracias} />
            </Switch>
          </animated.div>
        ))}
      </main>
    </>
  );
};

export default App;
