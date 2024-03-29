const valid = ({ fullname, email, password, cf_password, passcode }) => {
  const err = {};

  if (!fullname) {
    err.fullname = "Please add your full name.";
  } else if (fullname.length > 25) {
    err.fullname = "Full name is up to 25 characters long.";
  }

  if (!email) {
    err.email = "Please add your email.";
  } else if (!validateEmail(email)) {
    err.email = "Email format is invalid.";
  }

  if (!passcode) {
    err.passcode = "Please add passcode.";
  }

  if (!password) {
    err.password = "Please add your password.";
  } else if (password.length < 6) {
    err.password = "Password must be at least 6 characters.";
  }

  if (password !== cf_password) {
    err.cf_password = "Confirm password did not match.";
  }

  return {
    errMsg: err,
    errLength: Object.keys(err).length,
  };
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export default valid;
