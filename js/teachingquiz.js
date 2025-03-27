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
            fetchAllResponses();
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
    const choiceQ1 = form.querySelector('input[name="Q1"]:checked');
    const choiceQ2 = form.querySelector('input[name="Q2"]:checked');

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
    
    // Check if Q1 is answered
    if (!choiceQ1) {
        isValid = false;
        errorMessage += "Please select an option for Question 1. ";
        
        // Highlight the Q1 radio button container specifically
        const allOptionContainers = form.querySelectorAll('.options');
        const q1Container = allOptionContainers[0]; // Get the first options container
        
        if (q1Container) {
            q1Container.classList.add('input-error');
            
            // Remove highlight when a radio is selected
            const radios = form.querySelectorAll('input[name="Q1"]');
            radios.forEach(radio => {
                radio.addEventListener('change', function() {
                    q1Container.classList.remove('input-error');
                }, { once: true });
            });
        }
    }

    // Check if Q2 is answered
    if (!choiceQ2) {
        isValid = false;
        errorMessage += "Please select an option for Question 2.";
        
        // Highlight the Q2 radio button container specifically
        // This selects the second .options container in the form
        const allOptionContainers = form.querySelectorAll('.options');
        const q2Container = allOptionContainers[1]; // Get the second options container
        
        if (q2Container) {
            q2Container.classList.add('input-error');
            
            // Remove highlight when a radio is selected
            const radios = form.querySelectorAll('input[name="Q2"]');
            radios.forEach(radio => {
                radio.addEventListener('change', function() {
                    q2Container.classList.remove('input-error');
                }, { once: true });
            });
        }
    }
    
    // If validation fails, show error and return
    if (!isValid) {
        // Create or update error message element
        const submitBtn = form.querySelector('.submit-btn');
        
        // Create or update error message element
        let errorElement = document.getElementById('formError');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.id = 'formError';
            errorElement.className = 'error-message';
            
            // Insert before the submit button
            submitBtn.parentNode.insertBefore(errorElement, submitBtn);
        } else {
            // Move it if it exists but is not before the submit button
            submitBtn.parentNode.insertBefore(errorElement, submitBtn);
        }
        
        // Format errors as bullet points
        errorElement.innerHTML = `
            <p>Please correct the following errors:</p>
            <ul>
                ${errorMessage.split('. ').filter(msg => msg.trim() !== '').map(msg => `<li>${msg}</li>`).join('')}
            </ul>
        `;
        
        // Scroll to the error message
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
    }
    
    try {
        // Create response object
        const response = {
            userName: userName,
            Q1: choiceQ1.value,
            Q2: choiceQ2.value,
            timestamp: serverTimestamp()
        };
        
        // Save to Firebase
        await saveResponse(response);
        
        // Mark as submitted in localStorage
        localStorage.setItem('quizSubmitted', 'true');
        
        // Show success message
        showSuccessMessage(userName);
        
    } catch (error) {
        console.error("Error saving response:", error);
        alert("There was an error submitting your response. Please try again.");
    }
}

function showSuccessMessage(userName) {
    const container = document.querySelector('.form-container');
    container.innerHTML = `
        <div class="submission-complete">
            <h2>Thank You!</h2>
            <p>Your response has been recorded.</p>
            <p>Your initials: ${userName}</p>
        </div>
    `;
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

async function fetchAllResponses() {
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
                <button onclick="window.location.href='teachingquiz.html'" class="backsurvey-btn">Back to Survey</button>
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
    let csvContent = "Name,Q1,Q2,Timestamp\n";
    
    // Add each response as a row
    querySnapshot.forEach(doc => {
        const data = doc.data();
        const userName = data.userName || 'Anonymous';
        const choiceQ1 = data.Q1 || 'Not specified';
        const choiceQ2 = data.Q2 || 'Not specified';

        // Format timestamp
        let timestamp = 'N/A';
        if (data.timestamp && data.timestamp.toDate) {
            timestamp = data.timestamp.toDate().toLocaleString();
        }
        
        // Escape fields that might contain commas
        const escapedName = `"${userName.replace(/"/g, '""')}"`;
        const escapedQ1 = `"${choiceQ1.replace(/"/g, '""')}"`;
        const escapedQ2 = `"${choiceQ2.replace(/"/g, '""')}"`;
        const escapedTimestamp = `"${timestamp.replace(/"/g, '""')}"`;
        
        // Add row to CSV
        csvContent += `${escapedName},${escapedQ1},${escapedQ2},${escapedTimestamp}\n`;
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