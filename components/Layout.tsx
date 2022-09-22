function Layout(props) {
    return (
        <>
            {props.children}
            <style jsx global>{`
                .main-content {
                  max-width: clamp(320px, 768px, 95vw);
                  margin-inline: auto;
                }

                .unstyled-list {
                    position: relative;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .unstyled-list li {
                    transition: 200ms linear all;
                }
                
                // 1. This is not going to work in Firefox, unless behind a flag but is nice to play 
                // with and will hopefully work across the board before the end of the year
                .unstyled-list:has(li:hover):not(:focus-within) li:not(:hover) { // [1]
                    opacity: 0.7; 
                }
            `}
            </style>
        </>
    )
}

export default Layout;