import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, serverTimestamp, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCiWgD8FV5K5VWKSGXeGfiaI4EqjefcF_s",
    authDomain: "teachingquiz-wcupa.firebaseapp.com",
    projectId: "teachingquiz-wcupa",
    storageBucket: "teachingquiz-wcupa.firebasestorage.app",
    messagingSenderId: "687539739477",
    appId: "1:687539739477:web:64cefa21b92d110defeddc",
    measurementId: "G-F1RYJ2MYEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Check for admin view param
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('surveyForm');
    
    // Check if user has already submitted
    const hasSubmitted = localStorage.getItem('quizSubmitted');
    
    if (hasSubmitted) {
        // Show message that user already submitted
        showAlreadySubmittedMessage();
    } else if (form) {
        // Reset form on page load
        form.reset();
        
        // Add submit event listener
        form.addEventListener('submit', handleSubmit);
    }
    
    const urlParams = new URLSearchParams(window.location.search);
    const accessCode = urlParams.get('access');
    
    // Check if trying to access admin view with passcode
    if (accessCode) {
        // Change this to your desired passcode
        const correctPasscode = "wcupa2025"; 
        
        if (accessCode === correctPasscode) {
            showAllResponses();
        } else {
            showAccessDenied();
        }
    }
});

function showAlreadySubmittedMessage() {
    const container = document.querySelector('.form-container');
    
    // Save the original content in case we want to provide a reset option
    const originalContent = container.innerHTML;
    
    // Replace with message
    container.innerHTML = `
        <div class="submission-complete">
            <h2>You've Already Submitted</h2>
            <p>Our records show you've already completed this quiz.</p>
            <p>Thank you for your participation!</p>
            <button id="resetSubmission" class="submit-btn">Reset (For Testing Only)</button>
        </div>
    `;
    
    // Reset option available for testing (Remove this in production)
    document.getElementById('resetSubmission').addEventListener('click', () => {
        localStorage.removeItem('quizSubmitted');
        container.innerHTML = originalContent;
        location.reload();
    });
}

async function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const form = document.getElementById('surveyForm');
    const userName = form.userName.value.trim();
    const activitySelected = form.querySelector('input[name="activity"]:checked');
    
    // Validation
    let isValid = true;
    let errorMessage = "";
    
    // Check if username is entered
    if (!userName) {
        isValid = false;
        errorMessage += "Please enter your initials. ";
        
        // Highlight the input field
        const userNameInput = form.querySelector('#userName');
        userNameInput.classList.add('input-error');
        userNameInput.addEventListener('input', function() {
            this.classList.remove('input-error');
        }, { once: true });
    }
    
    // Check if activity is selected
    if (!activitySelected) {
        isValid = false;
        errorMessage += "Please select an option for Question 1.";
        
        // Highlight the radio button container
        const radioContainer = form.querySelector('.options');
        radioContainer.classList.add('input-error');
        
        // Remove highlight when a radio is selected
        const radios = form.querySelectorAll('input[name="activity"]');
        radios.forEach(radio => {
            radio.addEventListener('change', function() {
                radioContainer.classList.remove('input-error');
            }, { once: true });
        });
    }
    
    // If validation fails, show error and return
    if (!isValid) {
        // Create or update error message element
        let errorElement = document.getElementById('formError');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.id = 'formError';
            errorElement.className = 'error-message';
            form.prepend(errorElement);
        }
        
        errorElement.textContent = errorMessage;
        return;
    }

    if (isValid) {
        try {
            // Create response object
            const response = {
                userName: userName,
                activity: activitySelected.value,
                timestamp: serverTimestamp()
            };
            
            // Save to Firebase
            await saveResponse(response);
            
            // Mark as submitted in localStorage
            localStorage.setItem('quizSubmitted', 'true');
            
            // Show success message
            // ...
        } catch (error) {
            console.error("Error saving response:", error);
        }
    }
    
    // Continue with form submission if valid
    const activity = activitySelected.value;
    
    // Create response object
    const response = {
        userName: userName,
        activity: activity,
        timestamp: serverTimestamp()
    };
    
    try {
        // Save to Firebase
        await saveResponse(response);
        
        // Display individual response
        const responseDetails = document.getElementById('responseDetails');
        if (responseDetails) {
            responseDetails.innerHTML = `
                <p><strong>Name:</strong> ${userName}</p>
                <p><strong>Activity frequency:</strong> ${activity}</p>
                <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
            `;
        }
        
        // Hide form, show response
        form.style.display = 'none';
        const responseElement = document.getElementById('response');
        if (responseElement) {
            responseElement.style.display = 'block';
        } else {
            alert("Response saved successfully!");
        }
    } catch (error) {
        console.error("Error saving response:", error);
        alert("There was an error saving your response. Please try again.");
    }
    
    return false;
}

async function saveResponse(response) {
    try {
        const docRef = await addDoc(collection(db, "quizResponses"), response);
        console.log("Document written with ID: ", docRef.id);
        return docRef;
    } catch (error) {
        console.error("Error adding document: ", error);
        throw error;
    }
}

async function showAllResponses() {
    try {
        // Get responses from Firestore
        const q = query(collection(db, "quizResponses"), orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);
        
        // Create responses display
        const container = document.querySelector('.form-container');
        container.innerHTML = `
            <h1>All Survey Responses</h1>
            <p>Total responses: ${querySnapshot.size}</p>
            <div class="button-group">
                <button id="downloadCSV" class="download-btn">Download as CSV</button>
                <button onclick="window.location.href='teachingquiz.html'" class="submit-btn">Back to Survey</button>
            </div>
            <div id="allResponses"></div>
        `;
        
        // Set up download button
        document.getElementById('downloadCSV').addEventListener('click', () => {
            downloadResponses(querySnapshot);
        });
        
        // Rest of your existing code...
    } catch (error) {
        console.error("Error getting responses:", error);
    }
}

// Access denied message when trying to access data without correct passcode
function showAccessDenied() {
    const container = document.querySelector('.form-container');
    container.innerHTML = `
        <div class="access-denied">
            <h2>Access Denied</h2>
            <p>Invalid access code. Please contact the administrator.</p>
            <button onclick="window.location.href='teachingquiz.html'" class="submit-btn">Back to Survey</button>
        </div>
    `;
}

function downloadResponses(querySnapshot) {
    // CSV header
    let csvContent = "Name,Activity,Timestamp\n";
    
    // Add each response as a row
    querySnapshot.forEach(doc => {
        const data = doc.data();
        const userName = data.userName || 'Anonymous';
        const activity = data.activity || 'Not specified';
        
        // Format timestamp
        let timestamp = 'N/A';
        if (data.timestamp && data.timestamp.toDate) {
            timestamp = data.timestamp.toDate().toLocaleString();
        }
        
        // Escape fields that might contain commas
        const escapedName = `"${userName.replace(/"/g, '""')}"`;
        const escapedActivity = `"${activity.replace(/"/g, '""')}"`;
        const escapedTimestamp = `"${timestamp.replace(/"/g, '""')}"`;
        
        // Add row to CSV
        csvContent += `${escapedName},${escapedActivity},${escapedTimestamp}\n`;
    });
    
    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    // Set up download link
    link.setAttribute('href', url);
    link.setAttribute('download', `survey_responses_${new Date().toISOString().slice(0,10)}.csv`);
    link.style.visibility = 'hidden';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Make functions available globally for HTML onclick handlers
window.handleSubmit = handleSubmit;