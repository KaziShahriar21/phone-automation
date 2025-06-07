function saveSettings() {
  const email = document.getElementById("userEmail").value;
  
  // Connect to Firebase (replace with your config)
  firebase.initializeApp({
    apiKey: "YOUR_API_KEY",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project"
  });

  // Save email to Firestore
  firebase.firestore().collection("users").add({
    email: email,
    createdAt: new Date()
  })
  .then(() => {
    document.getElementById("status").textContent = "Success! Check your Telegram.";
    startOAuthFlow(email); // Proceed to Step 2
  });
}
