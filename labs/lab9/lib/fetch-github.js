const usernameToFetch = "MONNNNNNNNNNN";
const githubApiUrl = `https://api.github.com/users/${usernameToFetch}`;
const profileContainer = document.getElementById("profile-container");

async function loadGithubProfile() {
    try {
        const response = await fetch(githubApiUrl);
        if (!response.ok) {
            throw new Error(`GitHub API error with status ${response.status}`);
        }
        const githubData = await response.json();

        const nameHeading = document.createElement("h1");

        const profileLink = document.createElement("a");
        profileLink.textContent = githubData.name || githubData.login;
        profileLink.href = githubData.html_url;
        profileLink.target = "_blank"; // เปิดลิงก์ในแท็บใหม่

        nameHeading.appendChild(profileLink);

        const avatarImage = document.createElement("img");
        avatarImage.src = githubData.avatar_url;
        avatarImage.alt = `${githubData.login}'s GitHub Avatar`;
        avatarImage.classList.add("avatar-img"); // กำหนด CSS class ให้กับรูปภาพ

        profileContainer.appendChild(nameHeading);
        profileContainer.appendChild(avatarImage);
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

loadGithubProfile();
