const projects = [
    {
        title: "Mechanical Impedance and Stability when Manipulating Complex Objects",
        text: `Manipulating complex objects is ubiquitous in daily activities, such as donning a jacket or carrying a cup of coffee. 
        A key feature of these interactions is mechanical impedance of the human limbs at the interaction port.
        My postdoctoral research with Dr. Dagmar Sternad at the 
        <a href="https://actionlab.sites.northeastern.edu/" class="publication-wrapper-link" target="_blank" rel="noopener noreferrer">Action Lab</a> (Northeastern University, Massachusetts, U.S.A) 
        focused on understanding the relevance of mechanical impedance during complex dynamical interactions. 
        Humans increased their arm impedance to accommodate increased uncertainty in dynamics, 
        while the net force applied on the cup remained the same. These findings were supported by stochastic open-loop optimal control (SOOC) 
        simulations that employed a human-inspired impedance controller. The simulations further revealed that preparation and 
        interaction strategies were selected to optimize mechanical impedance.`,
        videoPath: "assets/videos/graphabstract_complexobjectimped_ploscompbio.mp4",
        publicationLink: "https://doi.org/10.1371/journal.pcbi.1013797",
        publicationText: "Publication Link",
        pdfLink: "",
        pdfText: "",
        supplementLink: "assets/documents/manuscript_supplementary_dynamicstability_ploscompbio2025.pdf",
        supplementText: "Supplementary File"
    },
    {
        title: "Human Control of Objects Having Complex Dynamics",
        text: `Humans manipulate objects like a cup of coffee or a piece of cloth, with remarkable ease. 
        Take the example of carrying a cup of coffee, the coffee can potentially behave unpredictably due to nonlinear dynamics. 
        Furthermore, the coffee can only be indirectly controlled by applying forces to the cup 
        (i.e., underactuated dynamics). My postdoctoral research with Dr. Dagmar Sternad at the 
        <a href="https://actionlab.sites.northeastern.edu/" class="publication-wrapper-link" target="_blank" rel="noopener noreferrer">Action Lab</a> (Northeastern University, Massachusetts, U.S.A) 
        focused on understanding how humans manipulate objects exhibiting such complex dynamics. 
        We highight that humans prepare the kinematic state of the object and choose interaction frequencies 
        to ensure stability of the object dynamics. Interestingly, humans flexibly and nonlinearly covary object preparation and 
        interaction strategy confirming to the stable manifolds of the object dynamics.`,
        videoPath: "assets/videos/graphabstract_humanscomplexobj_ieeetmrb.mp4",
        publicationLink: "https://ieeexplore.ieee.org/abstract/document/10798481",
        publicationText: "Publication Link",
    },
    {
        title: "The Roles of Visual and Haptic Feedback of a Partner During Collaborative Tasks Between Humans",
        text: `From shaking hands to dancing with a partner, human interpersonal interactions are ubiquitous. 
        These interactions are typically mediated by visual and haptic (i.e., physical contact) 
        feedback of each other. My postdoctoral research with Dr. Joshua Cashaback at 
        the <a href="https://joshcashaback.weebly.com/" class="publication-wrapper-link" target="_blank" rel="noopener noreferrer">Cashaback Lab</a>  (University of Delaware, Delaware, U.S.A) 
        focused on understanding the role of sensory feedback during human-human sensorimotor interactions. 
        We developed a computational model to explain mechanical sensorimotor interactions between 
        two humans mediated by multimodal sensory feedback. Our complementary experiments revealed that visual accuracy 
        is more important than haptic speed for sensorimotor collaboration between humans. Furthermore, we 
        highlighted the need to consider mechanical effects when augmenting haptic feedback.`,
        videoPath: "assets/videos/graphabstract_hapticspeedvisioncollab_jnp.mp4",
        publicationLink: "https://doi.org/10.1152/jn.00053.2023",
        publicationText: "Publication Link",
        pdfLink: "assets/documents/manuscript_visualaccuracy_jnp2023.pdf",
        pdfText: "Manuscript",
        supplementLink: "assets/documents/manuscript_supplementary_visualaccuracy_jnp2023.pdf",
        supplementText: "Supplementary File"
    },
    {
        title: "Sensorimotor Decision-Making During Competitive Interactions Between Humans",
        text: `We often acquire sensory information from another person’s actions to decide
        how to move, such as when walking through a crowded hallway. Decision-making 
        research mostly focuses on cognitive tasks that do not allow sensory information exchange between 
        humans prior to a decision. My postdoctoral research with Dr. Joshua Cashaback at 
        the <a href="https://joshcashaback.weebly.com/" class="publication-wrapper-link" target="_blank" rel="noopener noreferrer">Cashaback Lab</a>  (University of Delaware, Delaware, U.S.A) 
        investigated humans decision-making during competitive interactions. Surprisingly, aligned with a ‘paralysis-by-analysis’ phenomenon, 
        we found that humans often waited too long to accumulate sensory evidence and failed to make a decision. We captured
        the decision-making process using a evidence accumulation model supplemented by a Bayesian partner model.`,
        videoPath: "assets/videos/graphabstract_sensoryevidencecompete_natscrep.mp4",
        publicationLink: "https://doi.org/10.1038/s41598-022-12662-y",
        publicationText: "Publication Link",
        pdfLink: "assets/documents/manuscript_hhicompetition_natscrep2021.pdf",
        pdfText: "Manuscript",
        supplementLink: "assets/documents/manuscript_supplementary_hhicompetition_natscrep2021.pdf",
        supplementText: "Supplementary File"
    }
    ,
    {
        title: "Tailoring Haptic Assistance to Enhance Motor Learning",
        text: `Robotic assistance is widely advocated to help individuals recover from neurological disabilities. While
        assisting affected individuals maximally improves motor performance it can also lead to 'learned helplessness' i.e., 
        inability to maintain performance without robot assistance. Robotic intervention should instead be as-needed and tailored to the individual. My doctoral research with 
        Dr. Rajiv Ranganathan at the <a href="https://sites.google.com/site/motrelab/home/" class="publication-wrapper-link" target="_blank" rel="noopener noreferrer">MOTRE Lab</a>  (Michigan State University, Michigan, U.S.A) 
        focused on performance adaptive robotic assistance. Our results showed that robot mediated haptic assistance 
        can enhance motor learning when tailored to individual performance. Importantly, we developed a novel method to evaluate
        the dynamics between changes in performance and assistance levels to better characterize motor learning.`,
        videoPath: "assets/videos/graphabstract_hapticassist_unpublished.mp4",
        publicationLink: "https://www.proquest.com/openview/67b326174c19db2c708f9f4feb51e995/1?pq-origsite=gscholar&cbl=18750&diss=y",
        publicationText: "Dissertation Link"
    }
];

function createProjectHTML(project) {
    return `
        <div class="project-container">
            <div class="project-text">
                <h2>${project.title}</h2>
                <p>${project.text}</p>
                <div class="publication-link-wrapper">
                    <a href="${project.publicationLink}" class="publication-link" target="_blank" rel="noopener noreferrer">
                        <i class="ai ai-doi"></i>
                        <span>${project.publicationText}</span>
                    </a>
                    ${project.pdfLink ? `
                    <a href="${project.pdfLink}" class="publication-link" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-file-pdf"></i>
                        <span>${project.pdfText}</span>
                    </a>` : ''}
                    ${project.supplementLink ? `
                    <a href="${project.supplementLink}" class="publication-link" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-file-pdf"></i>
                        <span>${project.supplementText}</span>
                    </a>` : ''}
                </div>
            </div>
            <div class="project-video">
                <div class="video-wrapper">
                    <video width="100%">
                        <source src="${project.videoPath}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div class="play-button">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function loadProjects(targetId='projects-wrapper') {
    const projectsWrapper = document.getElementById(targetId);
    projects.forEach(project => {
        projectsWrapper.innerHTML += createProjectHTML(project);
    });

    // Load video control script
    const script = document.createElement('script');
    script.src = 'js/play_video.js';
    document.body.appendChild(script);
}