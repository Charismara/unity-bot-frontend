import {CSSProperties} from "react";

interface Properties {
    style?: CSSProperties
}

export function LoadingSpinner(properties: Properties) {
    return <div className={"loader"}/>
}