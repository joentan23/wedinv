document.getElementById("weddingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const groomName = document.getElementById('groomName').value;
  const brideName = document.getElementById('brideName').value;
  const weddingLocation = document.getElementById('weddingLocation').value;
  const weddingDate = document.getElementById('weddingDate').value;
  const weddingTime = document.getElementById('weddingTime').value;
  const attire = document.getElementById('attire').value;

  const preview = `
    <div class="invitation">
      <h3>${groomName} & ${brideName}</h3>
      <p>Location: ${weddingLocation}</p>
      <p>Date: ${weddingDate}</p>
      <p>Time: ${weddingTime}</p>
      <p>Attire: ${attire}</p>
    </div>
  `;


});

