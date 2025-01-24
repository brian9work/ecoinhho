import React from 'react'

function H1({ className ="" , children = "Heading 1" }) {
    return (
        <h1 className={className}>
            {children}
        </h1>
    )
}

function H2({ className ="" , children = "Heading 2" }) {
    return (
        <h2 className={`${className} `}>
            {children}
        </h2>
    )
}
function H3({ className ="" , children = "Heading 3" }) {
    return (
        <h3 className={`${className}  text-center text-lg`}>
            {children}
        </h3>
    )
}
function H4({ className ="" , children = "Heading 4" }) {
    return (
        <h4 className={`${className} `}>
            {children}
        </h4>
    )
}
function H5({ className ="" , children = "Heading 5" }) {
    return (
        <h5 className={className}>
            {children}
        </h5>
    )
}
function H6({ className ="" , children = "Heading 6" }) {
    return (
        <h6 className={className}>
            {children}
        </h6>
    )
}
function P({ className ="" , children = "texto type p" }) {
    return (
        <p className={`${className} `}>
            {children}
        </p>
    )
}

export { H1, H2, H3, H4, H5, H6, P }
