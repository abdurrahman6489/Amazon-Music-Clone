export const getFromLocalStorage = (item) => {
  try {
    return JSON.parse(localStorage.getItem(item));
  } catch {
    return null;
  }
};

export function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function shareOnTwitter(title, pageUrl) {
  let twitterUrl = `https://twitter.com/intent/tweet?text=`;
  let text = `Check out the ${title}
              ${pageUrl}`;
  window.open(`${twitterUrl}${text}`, "_blank");
}

export function shareOnFacebook(title, pageUrl) {
  let facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=`;
  let text = `Check out the ${title}
              ${pageUrl}`;
  window.open(`${facebookUrl}${text}`, "_blank");
}

export function copyToClipboard(data) {
  navigator.clipboard.writeText(data);
}

export function MAKE_COLORS(primaryColor, secondaryColor) {
  return { primaryColor, secondaryColor };
}

export function MAKE_DISPLAY(
  xs = "block",
  sm = "block",
  md = "block",
  lg = "block"
) {
  return {
    display: { xs, sm, md, lg },
  };
}

const nameValidation = (name) => {
  return name?.length > 3 ? "" : "Name must contain atleast 3 letters";
};

const emailValidation = (email) => {
  return email?.split("@")[0]?.length > 3 && email.includes("@")
    ? ""
    : "Please enter valid email";
};

export const passwordValidation = (password) => {
  return password?.length > 3 ? "" : "password must contain atleast 3 letters";
};

const emptyFieldError = () => "Please enter all fields";

export const validateCredentials = ({ name, email, password }) => {
  if (!name || !email || !password) {
    return {
      nameError: emptyFieldError(),
      emailError: emptyFieldError(),
      passwordError: emptyFieldError(),
    };
  }
  let nameError = nameValidation(name);
  let emailPasswordError = emailPasswordValidation({ email, password });
  if (!nameError && !emailPasswordError) return false;
  return {
    nameError,
    ...emailPasswordError,
  };
};

export const emailPasswordValidation = ({ email, password }) => {
  if (!email || !password) {
    return {
      emailError: emptyFieldError(),
      passwordError: emptyFieldError(),
    };
  }
  let emailError = emailValidation(email);

  let passwordError = passwordValidation(password);

  if (!emailError && !passwordError) return false;
  return {
    emailError,
    passwordError,
  };
};
