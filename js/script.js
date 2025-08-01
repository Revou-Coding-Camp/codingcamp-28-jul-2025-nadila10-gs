document.addEventListener("DOMContentLoaded", function () {
  const welcomeText = document.getElementById("welcome-text");
  welcomeText.textContent = "Hi, Welcome to Website";

  const imgs = document.querySelectorAll(".circle-img");
  imgs.forEach((el, index) => {
    el.style.backgroundImage = `url('https://picsum.photos/100?random=${index + 1}')`;
    el.style.backgroundSize = "cover";
    el.style.backgroundPosition = "center";
  });

  // Form submit handler
  const form = document.getElementById("contact-form");
  const output = document.getElementById("form-output");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("name").value.trim();
    const dob = document.getElementById("dob").value;
    const pesan = document.getElementById("message-text").value.trim();
    const genderEls = document.getElementsByName("gender");

    let gender = "";
    genderEls.forEach((g) => {
      if (g.checked) gender = g.value;
    });

    // Validasi
    if (!nama || !dob || !gender || !pesan) {
      alert("Harap lengkapi semua kolom!");
      return;
    }

    const time = new Date().toString();

    output.innerHTML = `
      <b>Current time :</b> ${time}<br><br>
      <b>Nama :</b> ${nama}<br>
      <b>Tanggal Lahir :</b> ${dob}<br>
      <b>Jenis Kelamin :</b> ${gender}<br>
      <b>Pesan :</b> ${pesan}
    `;
  });
});
