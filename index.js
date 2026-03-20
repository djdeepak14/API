
const button = document.getElementById("btn");
const img = document.getElementById("dogImage");


button.addEventListener("click", getDogImage);

// Function to fetch dog image
async function getDogImage() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");


        if (!response.ok) {
            throw new Error("Error fetching the data");
        }


        const data = await response.json();


        img.src = data.message;
        img.classList.add("active");

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}