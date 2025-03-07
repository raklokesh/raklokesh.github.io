const projectsData = {
    "projects": [
        {
            "position": "Postdoctoral Fellow",
            "date": "Aug. 2023 - Present",
            "organization": "Northeastern University, Boston, MA, U.S.A",
            "description": [
                `Researching motor control principles underlying human interactions with 
                <a href='https://ieeexplore.ieee.org/abstract/document/10798481' target='_blank' 
                // rel='noopener noreferrer' title='Journal Paper'>complex dynamical systems</a>.`,
                "Characterizing human arm impedance using a grip force measurement device."
            ],
            "topics": ["Dynamical Systems Theory", "Nonlinear Systems", "Impedance Control"],
            "skills": ["Time Series Analysis", "Frequency Domain Analysis", "Python"]
        },
        {
            "position": "Postdoctoral Fellow",
            "date": "July 2020 - June 2023",
            "organization": "University of Delaware, Newark, DE, U.S.A",
            "description": [
                "Researched sensorimotor interactions between humans in virtual reality-based tasks.",
                `Used computational modeling to predict human 
                <a href='https://doi.org/10.1038/s41598-022-12662-y' target='_blank' rel='noopener noreferrer' title='Journal Paper'>decision-making</a> 
                 and <a href='https://doi.org/10.1152/jn.00053.2023' target='_blank' rel='noopener noreferrer' title='Journal Paper'>movement</a> behaviors.`,
            ],
            "topics": ["Human-Human Interaction", "Optimal Control", "Game Theory", "Bayesian Inferencing"],
            "skills": ["Computational Modeling", "Python"]
        },
        {
            "position": "Graduate Research Assistant",
            "date": "Feb. 2016 - May 2020",
            "organization": "Michigan State University, East Lansing, MI, U.S.A",
            "description": [
                "Researched robot-mediated <a href='https://doi.org/10.1109/TNSRE.2020.2990129' target='_blank' rel='noopener noreferrer' title='Journal Paper'>haptic assistance strategies</a> to enhance movement skill acquisition.",
                "Developed a symbolic dynamical approach to characterize changes in assistance levels and motor performance."
            ],
            "topics": ["Haptic Assistance Design", "Uncontrolled Manifolds", "Symbolic Dynamics"],
            "skills": ["MATLAB/Simulink", "R"]
        },
        {
            "position": "Research Intern",
            "date": "May 2014 - Dec 2014",
            "organization": "Indian Institute of Technology Delhi, New Delhi, India",
            "description": [
                `Developed a 3D model-based software 
                <a href='http://www.roboanalyzer.com/mechanalyzer.html' target='_blank' rel='noopener noreferrer' title='MechAnalyzer Website'>MechAnalyzer</a> 
                to aid students in <a href='https://www.sksaha.com/sites/default/files/upload_data/documents/iNaCoMM2015.pdf' 
                target='_blank' rel='noopener noreferrer' title='Conference Paper'>visualizing and plotting</a> machine mechanisms.`,
                "Revamped the backend using Object Oriented Programming."
            ],
            "topics": ["Machine Kinematics", "Software Development"],
            "skills": ["Visual C#"]
        },
        {
            "position": "Subsystem Engineer",
            "date": "April 2012 - May 2014",
            "organization": "NITK Racing, Surathkal, India",
            "description": [
                `Designed, manufactured and assembled suspension, steering and braking subsystem 
                components for a <a href='https://www.facebook.com/nitkracing/photos/pb.100063596655502.-2207520000/473365706016984/?type=3'
                //  target='_blank' rel='noopener noreferrer' title='NITKRacing Facebook Page'>formula 
                student-style car</a>.`
            ],
            "topics": ["Vehicle Dynamics", "Vehicle Design"],
            "skills": ["Manufacturing", "ADAMS", "CATIA", "ANSYS"]
        },
        {
            "position": "Research Intern",
            "date": "Dec. 2013",
            "organization": "Robert Bosch Engineering and Business Solutions, Bangalore, India",
            "description": [
                "Conducted vibration resonance analysis of a Engine Control Unit (ECU) to identify potential failure modes.",
                "Created a model of the ECU in ANSYS and simulated the vibration resonance data in MeScope."
            ],
            "topics": ["Vibration Resonance Analysis"]
        },
        {
            "position": "Summer Intern",
            "date": "May 2012 - July 2012",
            "organization": "Toyota Kirloskar Motors, Bangalore, India",
            "description": [
                "Proposed and implemented maintenance and safety standards for machines in the TKM plant paint shop."
            ],
            "topics": ["Machine Safety Standards"]
        }
    ]
};

function loadProjects() {
    const researchPanel = document.getElementById('research');
    
    // Clear existing content
    researchPanel.innerHTML = '';
    
    // Create and append project items
    projectsData.projects.forEach(project => {
        const projectItem = createProjectItem(project);
        researchPanel.appendChild(projectItem);
    });
}

function createProjectItem(project) {
    const projectItem = document.createElement('div');
    projectItem.className = 'project-item';
    
    projectItem.innerHTML = `
        <div class="project-header">
            <span class="position">${project.position}</span>
            <span class="date">${project.date}</span>
        </div>
        <div class="project-details">
            <p class="organization">${project.organization}</p>
            <ul class="project-description">
                ${project.description.map(item => `<li>${item}</li>`).join('')}
            </ul>
            ${project.topics ? `
                <div class="project-topics">
                    <strong>Topics:</strong> ${project.topics.join(', ')}.
                </div>
            ` : ''}
            ${project.skills ? `
                <div class="project-skills">
                    <strong>Skills:</strong> ${project.skills.join(', ')}.
                </div>
            ` : ''}
        </div>
    `;
    
    return projectItem;
}

// Call loadProjects when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadProjects);