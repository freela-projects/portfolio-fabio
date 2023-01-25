import Container from "./styles"
import React from "react"

interface CollectionViewProps<T> {
    renderItem: (item: T) => React.ReactNode;
    items: T[];
}

function CollectionView <T extends unknown>(
    { renderItem, items }: CollectionViewProps<T>
) {
    return (
        <Container>
            {
                items.length > 0 ?
                    items.map((item, index) => <React.Fragment key={index}>{renderItem(item)}</React.Fragment>)
                    : <p>There are no items to display</p>
            }
        </Container>
    );
}


export default CollectionView;