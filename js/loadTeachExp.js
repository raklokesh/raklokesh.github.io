const teachingData = {
    "experiences": [
        {
            "position": "Teaching Assistant",
            "course": "BIOL5601 - Multidisciplinary Approaches to Motor Control",
            "date": "Spring 2025",
            "organization": "Northeastern University, Boston, MA",
            "responsibilities": [
                "Designed exams and assignments to address ChatGPT usage and accommodate increased course enrollment.",
                "Managed student learning and communication via the Canvas LMS platform.",
                "Delivered lectures in the absence of the primary instructor."
            ]
        },
        {
            "position": "Instructor",
            "course": "KIN330 - Biomechanics of Human Movements",
            "date": "Fall 2016 - Spring 2019",
            "organization": "Michigan State University, East Lansing, MI",
            "responsibilities": [
                "Lectured on biomechanical principles and measurement techniques.",
                "Demonstrated biomechanical data analysis using Tracker software.",
                "Managed student learning and evaluation via the Desire2Learn platform."
            ]
        },
        {
            "position": "Lab Instructor",
            "course": "KIN251 - Principles of Human Movement",
            "date": "Fall 2018 - Spring 2019",
            "organization": "Michigan State University, East Lansing, MI",
            "responsibilities": [
                "Explained the principles of human movement with a focus on measurement techniques and practical applications.",
                "Demonstrated the use of accelerometers, force plates, and load cells to quantify human motion and biomechanical forces.",
            ]
        }
        ,
        {
            "position": "Lab Instructor",
            "course": "ME451 - Control Systems Laboratory",
            "date": "Fall 2015 - Spring 2017",
            "organization": "Michigan State University, East Lansing, MI",
            "responsibilities": [
                "Supervised laboratory sessions focused on vibration measurement, dynamic system modeling, and controller design.",
                "Designed and implemented laboratory experiments using National Instruments Data Acquisition Systems and LabVIEW.",
            ]
        }
    ]
};

function loadTeaching() {
    const teachingPanel = document.getElementById('teaching');
    
    // Clear existing content
    teachingPanel.innerHTML = '';
    
    // Create and append teaching items
    teachingData.experiences.forEach(experience => {
        const teachingItem = createTeachingItem(experience);
        teachingPanel.appendChild(teachingItem);
    });
}

function createTeachingItem(experience) {
    const teachingItem = document.createElement('div');
    teachingItem.className = 'teaching-item';
    
    teachingItem.innerHTML = `
        <div class="teaching-header">
            <span class="position">${experience.position}</span>
            <span class="date">${experience.date}</span>
        </div>
        <div class="teaching-details">
            <p class="course">${experience.course}</p>
            <p class="organization">${experience.organization}</p>
            <div class="teaching-responsibilities">
                <ul>
                    ${experience.responsibilities.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    return teachingItem;
}

document.addEventListener('DOMContentLoaded', loadTeaching);