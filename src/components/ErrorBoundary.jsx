import { useRouteError } from "react-router-dom";

export function ErrorBoundary() {
    let error = useRouteError();
    console.error(error);
    // Uncaught ReferenceError: path is not defined
    return <div style={{textAlign:"center", fontSize:200}}>Server Under Constructions</div>;
  }