async function fetchProfileData() {
  const url =
    "https://raw.githubusercontent.com/douglaswlc/my-portfolio/initial-project/data/profile.json";
  const response = await fetch(url);
  const profileData = await response.json();
  return profileData;
}
