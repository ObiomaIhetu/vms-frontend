import React from "react";
import Popup from "./Popup";

const Register = ({ close }) => {
  return (
    <Popup close={close}>
      <div className="bg-white w-[500px] h-[400px] rounded-xl">
        <form>
          <div>
            <label>Name</label>
            <input className="focus:outline-none" />
          </div>
        </form>
      </div>
    </Popup>
  );
};

export default Register;
