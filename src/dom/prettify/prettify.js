const prettify = (document) => {
    const divElements = document.querySelectorAll('div')
    divElements.forEach(div => {
        const children = Array.from(div.childNodes)
        children.forEach(child => {
            console.log(child.nodeName)
            if (child.nodeName === '#text') {
                const newNode = document.createElement('p')
                newNode.textContent = child.textContent
                child.replaceWith(newNode)
            }
        })

    })
}

prettify(document)

// export default prettify