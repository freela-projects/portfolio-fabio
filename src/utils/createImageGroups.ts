function getImageGroupsByViewWidth(viewWidth: number) {
    if (viewWidth < 769) {
        return 1
    } else if (viewWidth >= 768 && viewWidth <= 1024) {
        return 3
    } else {
        return 4
    }
}

function createImageGroups(viewWidth: number, images: any[]){
    const imageGroups = []
    const imageGroupsByViewWidth = getImageGroupsByViewWidth(viewWidth)
    const imagesPerGroup = Math.ceil(images.length / imageGroupsByViewWidth)
    for(let i = 0; i < imageGroupsByViewWidth; i++){
        const imageGroup = images.slice(i * imagesPerGroup, (i + 1) * imagesPerGroup)
        imageGroups.push(imageGroup)
    }
    return imageGroups
}

export default createImageGroups