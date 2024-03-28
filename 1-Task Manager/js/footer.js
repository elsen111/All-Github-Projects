// To change the date content in the footer as year changes 

const handleDate = () => {
    const footerCopyElement = document.querySelector('.copyright > p > a');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    let copyrightText = footerCopyElement.textContent;
    let year = copyrightText.match(/\d+/g);
    footerCopyElement.textContent = footerCopyElement.textContent.replace(year,currentYear);
}

window.addEventListener('load', handleDate);