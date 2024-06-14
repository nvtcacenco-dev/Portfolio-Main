export function handleSectionClick(section: string) {
    if(section === 'about me'){
        section = 'about'
    }
    const sectionID = section.toLowerCase();
    
    const element = document.getElementById(sectionID);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        })
    }

}