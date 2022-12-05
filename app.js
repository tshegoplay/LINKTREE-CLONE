const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

function copyText(e) {
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)


    try {
        navigator.clipboard.writeText(link)
        alert("Copied the text: " + link)
    } catch (err) {
        console.log(err)
    }
}

shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText))