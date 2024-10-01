import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Register = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="register-form">
      <h2>Register</h2>

      {/* Other form inputs can go here */}

      <div className="form-group">
        <label>Phone Number</label>
        <PhoneInput
          country={"us"} // Default country
          value={phone}
          onChange={(phone) => setPhone(phone)}
          inputStyle={{ width: "100%" }} // Customize input width or other styles
        />
      </div>

      {/* Submit button */}
      <button type="submit" className="register-btn">
        Register
      </button>
    </div>
  );
};

export default Register;
