function createPublicationHTML(publication) {
    return `
    <li>
        <span class="authors">${highlightAuthor(publication.authors)}</span>
        <span class="year">(${publication.year}).</span>  
        <span class="title">${publication.title}.</span>
        <span class="journal">${publication.journal}.</span>
        <a href="${publication.doi}" target="_blank" class="doi-link">
            <i class="ai ai-doi"></i> <span>Link</span>
        </a>
    </li>`;
}

function loadPublications(targetId='publications') {
    const publicationsList = document.getElementById(targetId);
    publications.forEach(pub => {
        publicationsList.innerHTML += createPublicationHTML(pub);
    });
}

function highlightAuthor(authors, highlightName = "Lokesh, R.") {
    return authors.replace(new RegExp(highlightName, 'gi'), `<strong>${highlightName}</strong>`);
}

const publications = [
        {
        authors: "Lokesh, R., and Sternad, D.",
        title: "Dynamical stability and mechanical impedance are optimized when manipulating uncertain dynamically complex objects",
        journal: "PLoS Computational Biology",
        year: "2025",
        doi: "https://doi.org/10.1371/journal.pcbi.1013797"
    },
        {
        authors: "Sullivan, S.R., Lokesh, R., Calalo, J.A., Ngo, T.T., Buggeln, J.H., Roth, A.M., Peters, C., Kurtzer, I.L., Carter, M.J. and Cashaback, J.G.",
        title: "Indecision under time pressure arises from suboptimal switching behavior",
        journal: "Journal of Neurophysiology",
        year: "2025",
        doi: "https://doi.org/10.1152/jn.00563.2024"
    },
        {
        authors: "Calalo, J.A., Ngo, T.T., Sullivan, S.R., Strand, K., Buggeln, J.H., Lokesh, R., Roth, A.M., Carter, M.J., Kurtzer, I.L. and Cashaback, J.G.",
        title: "Online movements reflect ongoing deliberation",
        journal: "Journal of Neuroscience",
        year: "2025",
        doi: "https://doi.org/10.1523/JNEUROSCI.1913-24.2025"
    },
        {
        authors: "Kiafar, B., Kullu, P., Lokesh, R., Chaudhari, A., Wang, Q., Sharmin, S., Doshi, S.M., Bakhshipour, E., Thostenson, E., Cashaback, J. and Barmaki, R.L.",
        title: "Feasibility of immersive virtual reality and customized robotics with wearable sensors for upper extremity training",
        journal: "Proceedings of Machine Learning Research",
        year: "2025",
        doi: "https://raw.githubusercontent.com/mlresearch/v287/main/assets/kiafar25a/kiafar25a.pdf"
    },
    {
        authors: "Lokesh, R., & Sternad, D.",
        title: "Human Control of Underactuated Objects: Adaptation to Uncertain Nonlinear Dynamics Ensures Stability",
        journal: "IEEE Transactions on Medical Robotics and Bionics",
        year: "2024",
        doi: "https://ieeexplore.ieee.org/abstract/document/10798481"
    },
    {
        authors: `Roth, A., Buggeln, J., Hoh, J. E., Wood, J. M., Sullivan, S., Ngo, T., Calalo, J.,
         Lokesh, R., Morton, S. M., Grill, S., Jeka, J. J., Carter, M. J., & Cashaback, J. G. A.`,
        title: `Roles and interplay of reinforcement-based and error-based processes during reaching and gait
         in neurotypical adults and individuals with Parkinson's disease`,
        journal: "PLOS Computational Biology",
        year: "2024",
        doi: "https://doi.org/10.1371/journal.pcbi.1012474"
    },
    {
        authors: `Roth, A., Lokesh, R., Tang, J., Buggeln, J., Smith, C., Calalo, J.,
         Sullivan, S., Ngo, T., St. Germain, L., Carter, M.J., & Cashaback, J. G. A.`,
        title: `Punishment leads to greater sensorimotor learning but 
        less movement variability compared to reward`,
        journal: "Neuroscience",
        year: "2024",
        doi: "https://doi.org/10.1016/j.neuroscience.2024.01.004"
    },
    {
        authors: `Chaudhari, A., Lokesh, R., Cheang, V., Doshi, S.,
         Barmaki, R. L., Cashaback, J. G. A., & Thostenson, E.`,
        title: `Characterizing the sensing response of carbon nanocomposite-based wearable
         sensors on elbow joint using an end point robot and virtual reality`,
        journal: "Sensors",
        year: "2024",
        doi: "https://doi.org/10.3390/s24154894"
    },
    {
        authors: `Lokesh, R., Sullivan, S., St. Germain, L., Roth, A., Calalo, J., Buggeln, J.
        , Ngo, T., Marchhart, V., Carter, M., & Cashaback, J. G. A.`,
        title: `Visual acuity dominates over haptic speed for state estimation of a partner 
        during collaborative sensorimotor interactions`,
        journal: "Journal of Neurophysiology",
        year: "2023",
        doi: "https://doi.org/10.1152/jn.00053.2023"
    },
    {
        authors: `Calalo, J., Roth, A., Lokesh, R., Sullivan, S.,
         Wong, J., Semrau, J., & Cashaback, J. G. A.`,
        title: `The sensorimotor system modulates muscular co-contraction relative to 
        visuomotor feedback responses to regulate movement variability`,
        journal: "Journal of Neurophysiology",
        year: "2023",
        doi: "https://doi.org/10.1152/jn.00472.2022"
    },
    {
        authors: `Roth, A., Calalo, J., Lokesh, R., Sullivan, S., Grill, S., Jeka,
         J.J., van der Kooij, K. Carter, M.J., & Cashaback, J. G. A.`,
        title: `Reinforcement-based processes actively regulate motor exploration along redundant solution manifolds`,
        journal: "Proceedings of the Royal Society B",
        year: "2023",
        doi: "https://doi.org/10.1098/rspb.2023.1475"
    },
    {
        authors: `Chheang, V., Lokesh, R., Chaudhari, A., Wang, Q., Baron, L., Doshi, S.,
         Thostenson, E., Cashaback, J.G.A.,& Barmaki, R.L.`,
        title: `Immersive virtual reality and robotics for upper extremity rehabilitation`,
        journal: "arXiv",
        year: "2023",
        doi: "https://doi.org/10.48550/arXiv.2304.11110"
    },
    {
        authors: `Ranganathan, R., Cone, S., Shin, N., Lokesh, R., & Fox, B.`,
        title: `A test of the variability vs. specificity hypotheses in the retention 
        of a motor skill: A registered report`,
        journal: "Journal of Sport and Exercise Psychology",
        year: "2023",
        doi: ""
    },
    {
        authors: `Lokesh, R., Sullivan, S., Calalo, J., Roth, A., 
        Carter, M. J., & Cashaback, J. G. A.`,
        title: `Humans utilize sensory evidence of others’ intended action to make online decisions`,
        journal: "Nature Scientific Reports",
        year: "2022",
        doi: "https://doi.org/10.1038/s41598-022-12662-y"
    },
    {
        authors: `Ranganathan, R., Tomlinson, A. D., Lokesh, R., Lin, T. H., & Patel, P.`,
        title: `Motor variability prior to learning does not facilitate the ability
         to adopt new movement solutions`,
        journal: "Neuroscience",
        year: "2021",
        doi: "https://doi.org/10.1016/j.neuroscience.2021.10.021"
    },
    {
        authors: `Ranganathan, R., Tomlinson, A. D., Lokesh, R., Lin, T. H., & Patel, P.`,
        title: `A tale of too many tasks: Task fragmentation in
         motor learning and a call for model task paradigms`,
        journal: "Experimental Brain Research",
        year: "2021",
        doi: "https://link.springer.com/article/10.1007/s00221-020-05908-6"
    },
    {
        authors: `Lokesh, R., & Ranganathan, R.`,
        title: `Haptic assistance that restricts the use of 
        redundant solutions is detrimental to motor learning`,
        journal: "IEEE Transactions on Neural Systems and Rehabilitation Engineering",
        year: "2020",
        doi: "https://doi.org/10.1109/TNSRE.2020.2990129"
    },
    {
        authors: `Lokesh, R., & Ranganathan, R.`,
        title: `Differential control of task and null space variability in response to
         changes in task difficulty when learning a bimanual steering task`,
        journal: "Experimental Brain Research",
        year: "2019",
        doi: "https://doi.org/10.1007/s00221-019-05486-2"
    }
];
