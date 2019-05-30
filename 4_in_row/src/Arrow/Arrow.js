import React from 'react'

function Arrow(props) {
        return (
            <>
                {props.isVisible ? <div>Arrow will be here</div> : null}
            </>
        )
}

export default Arrow;