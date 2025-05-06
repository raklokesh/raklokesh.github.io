const awardsData = {
    "awards": [
        {
            "name": "Deans Postdoctoral Research Award",
            "date": "2024",
            "organization": "College of Science, Northeastern University, Boston, MA, U.S.A.",
            "description": "$25000 award to research the role of mechanical impedance for human interaction with objects having complex dynamics."
        },
        {
            "name": "Deans Postdoctoral Travel Award",
            "date": "2024",
            "organization": "College of Science, Northeastern University, Boston, MA, U.S.A.",
            "description": "Travel Award to present research work at Society for Neuroscience Annual Meeting, Chicago, U.S.A."
        },
        {
            "name": "Arctic Code Vault Contribution",
            "date": "2020",
            "organization": "GitHub",
            "description": "Repository included in the Arctic Code Vault, a long-term archive dedicated to preserving the world's open-source software projects."
        },
        {
            "name": "Dissertation Completion Fellowship",
            "date": "2019",
            "organization": "College of Engineering, Michigan State University, East Lansing, MI, U.S.A.",
            "description": "$7000 award to alleviate teaching responsibilities and complete the disseration."
        },
        {
            "name": "Conference Travel Award",
            "date": "2017",
            "organization": "Dept. of Kinesiology, Michigan State University, East Lansing, MI, U.S.A.",
            "description": "Travel award to present research work at the Society for Neuroscience Annual Meeting, Washington D.C., U.S.A."
        },
        {
            "name": "Research Fellowship",
            "date": "2016",
            "organization": "Dept. of Mechanical Eng., Michigan State University, East Lansing, MI, U.S.A.",
            "description": "$6000 award to support research work over the summer of 2017."
        },
        {
            "name": "NIT Merit Award",
            "date": "2011",
            "organization": "Central Government of India",
            "description": "Full tuition waiver to the top 0.2% of rank holders out of approximately 1,000,000 candidates in the All India Engineering Entrance Exam (AIEEE, now JEE Main), 2011."
        }
    ]
};

function loadAwards() {
    const awardsPanel = document.getElementById('awards');
    
    // Clear existing content
    awardsPanel.innerHTML = '';
    
    // Create and append award items
    awardsData.awards.forEach(award => {
        const awardItem = createAwardItem(award);
        awardsPanel.appendChild(awardItem);
    });
}

function createAwardItem(award) {
    const awardItem = document.createElement('div');
    awardItem.className = 'award-item';
    
    awardItem.innerHTML = `
        <div class="award-header">
            <span class="award-name">${award.name}</span>
            <span class="date">${award.date}</span>
        </div>
        <div class="award-details">
            <p class="organization">${award.organization}</p>
            <p class="award-description">${award.description}</p>
        </div>
    `;
    
    return awardItem;
}

document.addEventListener('DOMContentLoaded', loadAwards);