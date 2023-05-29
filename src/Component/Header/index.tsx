import React from "react";
import { useDispatch } from "react-redux";
import actionType from "../../store/action/actionType";

const Head = () => {
  const dispatch = useDispatch();
  const handlelogout = () => {
    dispatch({
      type: actionType.LOGOUT,
    });
  };

  return (
    <div className="div">
      <nav className="navbar" style={{ backgroundColor: "#e3f2fd" }}>
        <form className="container-fluid justify-content-end">
          <button
            className="btn btn-outline-success me-2"
            type="button"
            onClick={handlelogout}
          >
            Signout
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Head;
