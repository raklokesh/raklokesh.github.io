const teachingData = {
    "experiences": [
        {
            "position": "Teaching Assistant",
            "course": "BIOL5601 - Multidisciplinary Approaches to Motor Control",
            "date": "Spring 2025",
            "organization": "Northeastern University, Boston, MA",
            "responsibilities": [
                "Designing exams and assignments to tackle the use of ChatGPT and increased course enrollment.",
                "Managed student learning and communication through the Canvas LMS platform.",
                "Lectured in the absence of primary instructor."
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
                "Managed student learning and evaluation through the Desire2Learn platform."
            ]
        },
        {
            "position": "Lab Instructor",
            "course": "KIN251 - Principles of Human Movement",
            "date": "Fall 2018 - Spring 2019",
            "organization": "Michigan State University, East Lansing, MI",
            "responsibilities": [
                "Explained principles of human movement from a measurement and application standpoint.",
                "Demonstrated the use of accelerometers, force plates, load cells to measure human movements.",
            ]
        }
        ,
        {
            "position": "Lab Instructor",
            "course": "ME451 - Control Systems Laboratory",
            "date": "Fall 2015 - Spring 2017",
            "organization": "Michigan State University, East Lansing, MI",
            "responsibilities": [
                "Supervised laboratory sessions on vibration measurement, system modeling, and controller design.",
                "Utilized National Instruments Data Acquisition Systems and Labview to setup laboratory experiments.",
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