const placesFileUrl = "places.json";
const placeList = document.getElementById("place-list");

async function loadPlaces() {
    try {
        const response = await fetch(placesFileUrl);
        if (!response.ok) {
            throw new Error(`Cannot read ${placesFileUrl} (status ${response.status})`);
        }
        const placesData = await response.json();

        for (const place of placesData.results) {
            const { lat, lng } = place.geometry.location;
            const listItem = document.createElement("li");

            const placeName = document.createElement("div");
            placeName.className = "place-name";
            placeName.textContent = `name = ${place.name}`;

            const placeLocation = document.createElement("div");
            placeLocation.className = "place-location";
            placeLocation.textContent = `location = ${lat} ${lng}`;

            listItem.append(placeName, placeLocation);
            placeList.appendChild(listItem);
        }
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

loadPlaces();
