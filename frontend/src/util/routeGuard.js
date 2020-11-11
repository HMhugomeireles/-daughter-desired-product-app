import {Fragment} from "react";
//import { Redirect } from "react-router-dom";
//import { AuthenticationContext } from "../services/context/AuthContext";

function RouterGuard({ children }) {
 /*  const { isAuthenticated } = React.useContext(AuthenticationContext);

  if (isAuthenticated()) {
} else {
    return <Redirect to="/" />;
} */
    return <Fragment>{children}</Fragment>
}
export default RouterGuard;