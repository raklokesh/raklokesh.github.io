const links = [
    {
        url: "assets/documents/RakshithLokesh_CV.pdf",
        icon: "ai ai-cv",  // PDF icon
        title: "Curriculum Vitae"
    },
    {
        url: "https://scholar.google.com/citations?user=nopmUNwAAAAJ",
        icon: "ai ai-google-scholar",
        title: "Google Scholar"
    },
    {
        url: "https://github.com/raklokesh",
        icon: "fab fa-github",
        title: "GitHub"
    },
    {
        url: "https://www.linkedin.com/in/rakshith-lokesh-719b3268/",
        icon: "fab fa-linkedin",
        title: "LinkedIn"
    }
];

function loadLinks(targetId='links') {
    const linksSection = document.getElementById(targetId);
    const ul = document.createElement('ul');
    ul.className = 'icons';

    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const i = document.createElement('i');

        a.href = link.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.title = link.title;

        i.className = link.icon;

        a.appendChild(i);
        li.appendChild(a);
        ul.appendChild(li);
    });

    linksSection.appendChild(ul);
}