
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  if (!user) {
    alert('please login')
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
