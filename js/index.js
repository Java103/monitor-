
const monitor = document.getElementById("monitor");


monitor.addEventListener("click", (event) => {
    const targetId = event.target.id;
//მონიტორის მთავარი გვერდის LEVELS ღილაკზე დაჭერისას
    if (targetId === "levelButton") {
        monitor.innerHTML = `
            <div id="feedback"></div>
            <div id="buttons">
                <button id="backLevelsButton">BACK</button>
            </div>
            <div id="levelButtons">
                <button id="oilButton">OIL</button>
                <button id="waterButton">WATER</button>
                <button id="batteryButton">BATTERY</button>
            </div>
        `;

        monitor.classList.add("second-page");
    } else if (targetId === "oilButton") {
        const oilInput = document.getElementById("oil");
        checkOilLevel(oilInput.value);  

    } else if (targetId === "waterButton") {
        const waterInput = document.getElementById("water");
        checkWaterLevel(waterInput.value);

    } else if (targetId === "batteryButton") {
        const batteryInput = document.getElementById("battery");
        checkBatteryLevel(batteryInput.value);

    } else if (targetId === "backLevelsButton") {
        monitor.innerHTML = `
            HAPPY DRIVE
            <div id="buttons">
                <button id="galleryButton">GALLERY</button>
                <button id="levelButton">LEVELS</button>
                <button id="musicButton">MUSIC</button>
                <button id="videoButton">VIDEO</button>
            </div>
        `;

        monitor.classList.remove("second-page", "photo-viewer");

        const buttons = document.getElementById("buttons");
        buttons.style.display = "flex";




//მონიტორის მთავარი გვერდის MUSIC ღილაკზე დაჭერისას
    } else if (targetId === "musicButton") {
        monitor.innerHTML = `
            <div id="audioPlayer">
                <audio controls>
                    <source src="audio/Future - Mask Off.mp3" type="audio/mp3">
                </audio>
            </div>
            <div id="buttons">
                <button id="backMusicButton">BACK</button>
            </div>
        `;

        monitor.classList.add("music-page");

    } else if (targetId === "backMusicButton") {
        monitor.innerHTML = `
            HAPPY DRIVE
            <div id="buttons">
                <button id="galleryButton">GALLERY</button>
                <button id="levelButton">LEVELS</button>
                <button id="musicButton">MUSIC</button>
                <button id="videoButton">VIDEO</button>
            </div>
        `;

        monitor.classList.remove("music-page", "photo-viewer");

        const buttons = document.getElementById("buttons");
        buttons.style.display = "flex";




//მონიტორის მთავარი გვერდის GALLERY ღილაკზე დაჭერისას
    } else if (targetId === "galleryButton") {
        showPhotoViewer();






//მონიტორის მთავარი გვერდის VIDEO ღილაკზე დაჭერისას
    } else if (targetId === "videoButton") {
        monitor.innerHTML = `
            <div id="feedback">This function is not available in demo version</div>
            <div id="buttons">
                <button id="backVideoButton">BACK</button>
            </div>
        `;

        monitor.classList.add("video-page");

    } else if (targetId === "backVideoButton") {
        monitor.innerHTML = `
            HAPPY DRIVE
            <div id="buttons">
                <button id="galleryButton">GALLERY</button>
                <button id="levelButton">LEVELS</button>
                <button id="musicButton">MUSIC</button>
                <button id="videoButton">VIDEO</button>
            </div>
        `;

    
        monitor.classList.remove("second-page", "music-page", "photo-viewer", "video-page");

        const buttons = document.getElementById("buttons");
        if (buttons) {
            buttons.style.display = "flex";
        }
    }
});



// ფუნქციების დასაწყისი


function checkOilLevel(oilLevel) {
    const feedback = document.getElementById("feedback");

    if (oilLevel.trim() === "") {
        feedback.textContent = "Please enter the oil level";
        return; 
    }

    oilLevel = parseInt(oilLevel);

    if (oilLevel >= 50 && oilLevel <= 100) {
        feedback.textContent = "Your oil level is normal";
    } else if (oilLevel >= 20 && oilLevel < 50) {
        feedback.textContent = "Your oil level is too low";
    } else if (oilLevel >= 0 && oilLevel < 20) {
        feedback.textContent = "CHECK ENGINE!!!";
    } else {
        feedback.textContent = "Enter a number from 0 to 100";
    }
}

 


function checkWaterLevel(waterLevel) {
    const feedback = document.getElementById("feedback");

    if (waterLevel.trim() === "") {
        feedback.textContent = "Please enter the water level";
        return; 
    }

    waterLevel = parseInt(waterLevel);

    if (waterLevel >= 50 && waterLevel <= 100) {
        feedback.textContent = "Your water level is normal";
    } else if (waterLevel >= 20 && waterLevel < 50) {
        feedback.textContent = "Your water level is too low";
    } else if (waterLevel >= 0 && waterLevel < 20) {
        feedback.textContent = "CHECK YOUR COOLANT SYSTEM";
    } else {
        feedback.textContent = "Enter a number from 0 to 100";
    }
} 





function checkBatteryLevel(batteryLevel) {
    const feedback = document.getElementById("feedback");

    if (batteryLevel.trim() === "") {
        feedback.textContent = "Please enter the battery level";
        return; 
    }

    batteryLevel = parseInt(batteryLevel);

    if (batteryLevel >= 12 && batteryLevel <= 14) {
        feedback.textContent = "Your battery voltage is normal";
    } else if (batteryLevel >= 9 && batteryLevel <= 11) {
        feedback.textContent = "Your battery voltage is too low";
    } else if (batteryLevel >= 0 && batteryLevel <= 8) {
        feedback.textContent = "REPLACE BATTERY";
    } else {
        feedback.textContent = "Enter a number from 0 to 14";
    }
}





function showPhotoViewer() {
    monitor.innerHTML = "";

    const photoContainer = document.createElement("div");
    photoContainer.classList.add("photo-container");

    const photoFolder = "photos/";
    let currentPhotoIndex = 1;
    const totalPhotos = 4;

    const image = document.createElement("img");
    image.src = `${photoFolder}photo${currentPhotoIndex}.jpg`;
    image.classList.add("photo-thumbnail");
    photoContainer.appendChild(image);

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.classList.add("next-button");
    nextButton.addEventListener("click", () => {
        currentPhotoIndex = (currentPhotoIndex % totalPhotos) + 1;
        image.src = `${photoFolder}photo${currentPhotoIndex}.jpg`;
    });
    photoContainer.appendChild(nextButton);

    const prevButton = document.createElement("button");
    prevButton.textContent = "Previous";
    prevButton.classList.add("prev-button");
    prevButton.addEventListener("click", () => {
        currentPhotoIndex = (currentPhotoIndex - 2 + totalPhotos) % totalPhotos + 1;
        image.src = `${photoFolder}photo${currentPhotoIndex}.jpg`;
    });
    photoContainer.appendChild(prevButton);

    monitor.appendChild(photoContainer);
 
    
    const backButton = document.createElement("button");
    backButton.textContent = "Back";
    backButton.classList.add("back-button");

    backButton.addEventListener("click", () => {
        monitor.innerHTML = `
            HAPPY DRIVE
            <div id="buttons">
                <button id="galleryButton">GALLERY</button>
                <button id="levelButton">LEVELS</button>
                <button id="musicButton">MUSIC</button>
                <button id="videoButton">VIDEO</button>
            </div>
        `;

        monitor.classList.remove("second-page", "photo-viewer");

        const buttons = document.getElementById("buttons");
        if (buttons) {
            buttons.style.display = "flex";
        }
    });
    monitor.appendChild(backButton);

    monitor.classList.add("photo-viewer");

    const buttons = document.getElementById("buttons");
    if (buttons) {
        buttons.style.display = "none";
    }
}

