function searchCity() {
  const city = document.getElementById("searchInput").value.trim();
  if (city) {
    window.location.href = `city.html?city=${city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()}`;
  } else {
    alert("Please enter a city or state name!");
  }
}
