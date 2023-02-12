function getColumnsByViewWidth(viewWidth: number) {
    if (viewWidth < 769) {
        return 1
    } else if (viewWidth >= 768 && viewWidth <= 1024) {
        return 3
    } else {
        return 4
    }
}

export default getColumnsByViewWidth