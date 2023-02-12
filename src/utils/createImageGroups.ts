function getColumnsByViewWidth(viewWidth: number) {
    if (viewWidth < 769) {
        return 1
    } 
    if (viewWidth >= 768 && viewWidth <= 1024) {
        return 3
    }
    if (viewWidth > 1024){
        return Math.ceil(viewWidth / 300)
    }
}

export default getColumnsByViewWidth