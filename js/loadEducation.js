const educationData = {
    "education": [
        {
            "degree": "Dual Ph.D. in Mechanical Engineering and Kinesiology",
            "date": "2015 - 2020",
            "organization": "Michigan State University, East Lansing, MI, U.S.A",
            "description": [
                "Dissertation: Haptic Assistance Strategies to Enhance Motor Learning.",
                "Activities: Cricket Michigan State, Lansing Capoeira.",
                "GPA: 3.92/4.0"
            ],
            "topics": ["Dynamical Systems", "Control Theory", "Movement Neuroscience", "Statistical Methods"]
        },
        {
            "degree": "B.Sc. in Mechanical Engineering",
            "date": "2011 - 2015",
            "organization": "National Institute of Technology Karnataka, India",
            "description": [
                "Capstone Project: Development of a Novel Dehusking Mechanism for Arecanuts.",
                "Activities: Suspension subsystem lead, Formula Student Team; Convener, Corporate Hospitality, Cultural Festival, 2015.",
                "GPA: 9.14/10.0"
            ],
            "topics": ["Mechatronics", "Control Theory", "Machine Design", "Mechanical Vibrations"]
        }
    ]
};

function loadEducation() {
    const educationPanel = document.getElementById('education');
    
    // Clear existing content
    educationPanel.innerHTML = '';
    
    // Create and append education items
    educationData.education.forEach(edu => {
        const educationItem = createEducationItem(edu);
        educationPanel.appendChild(educationItem);
    });
}

function createEducationItem(edu) {
    const educationItem = document.createElement('div');
    educationItem.className = 'education-item';
    
    educationItem.innerHTML = `
        <div class="education-header">
            <span class="degree">${edu.degree}</span>
            <span class="date">${edu.date}</span>
        </div>
        <div class="education-details">
            <p class="organization">${edu.organization}</p>
            <ul class="education-description">
                ${edu.description.map(item => `<li>${item}</li>`).join('')}.
            </ul>
            ${edu.topics ? `
                <div class="education-topics">
                    <strong>Concentrations:</strong> ${edu.topics.join(', ')}.
                </div>
            ` : ''}
        </div>
    `;
    
    return educationItem;
}

document.addEventListener('DOMContentLoaded', loadEducation);