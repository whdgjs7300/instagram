import dynamic from 'next/dynamic'
import React from 'react'

// next js가 똑똑해 미리 정적인 ui를 렌더링함으로써 오류가 발생함
// 그래서 lazy하게 import를 해 사전에 렌더링 오류를 방지
const GridLoader = dynamic(
    ()=> import('react-spinners').then(lib => lib.GridLoader),
    {
        ssr : false,
    }
)

type Props = {
    color?:string,

}

export default function GridSpinner({color = 'red'} : Props) {
    return (
        <GridLoader color={color} />
    )
}
