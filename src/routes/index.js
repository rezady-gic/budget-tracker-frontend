import * as React from "react";
import { Routes, Route} from "react-router-dom";
import { routes } from '../constants/routes'

function RouterComponent() {
  return (
    <Routes>
        {routes.map (route => (
            <Route path={route.path} element={route.element} />            
        ))}
    </Routes>
  );
}
export default RouterComponent