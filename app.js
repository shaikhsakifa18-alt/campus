document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("userName") || "").trim();
    const email = String(data.get("email") || "").trim().toLowerCase();
    const role = String(data.get("role") || "student");
    if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter your name and a valid email address.");
      return;
    }
    if (role === "admin") {
      sessionStorage.setItem("chUser", JSON.stringify({ name, email, role: "admin" }));
      location.href = "pages/admin-dashboard.html";
      return;
    }
    const account = Store.getUsers().find((user) => user.email.toLowerCase() === email);
    if (!account) {
      alert("No student account was found for this email. Please create an account first.");
      return;
    }
    if (account.name.toLowerCase() !== name.toLowerCase()) {
      alert("The name does not match this demo account. Please check your name.");
      return;
    }
    sessionStorage.setItem("chUser", JSON.stringify({ name: account.name, email: account.email, role: "student" }));
    // Keep profile data aligned with the signed-in student without erasing saved skills.
    const profile = Store.getProfile();
    if (profile.email !== account.email) {
      Store.saveProfile({ name: account.name, email: account.email, course: account.course || "", year: "Third Year", phone: "", location: "", skills: "", about: "" });
    }
    location.href = "pages/student-dashboard.html";
  });
});
