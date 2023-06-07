import { Route, Navigate, Routes } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Routes>
    <Route
      {...rest}
      element={
        isAuthenticated ? (
          <Component />
        ) : (
          <Navigate to="/login" replace />
        )
      }
    />
    </Routes>
  );
};

export default ProtectedRoute;