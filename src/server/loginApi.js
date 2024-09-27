export const login = (email, password) => {
  console.log(email, password);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "user@example.com" && password === "password") {
        resolve({ token: "fake-jwt-token" });
      } else {
        reject(new Error("Invalid Email or Password"));
      }
    }, 1000);
  });
};
