import React from 'react';
import reactDom from 'react-dom'

type Props = {
    children : React.ReactNode;
}

export default function ModalPortal({children} : Props) {
    // 브라우저 환경이 아니면
    if(typeof window === 'undefined') {
        return null;
    }

    const node = document.getElementById('portal') as Element;
    return reactDom.createPortal(children, node)
}
