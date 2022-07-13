import {CSSProperties} from "react";

interface Properties {
    style?: CSSProperties
}

export function UnityBotLogo(properties: Properties) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="2000" height="2000" viewBox="0 0 2000 2000" style={properties.style}>
            <g transform="translate(166.30697590079382,0)translate(856.2252822707546,999.5932365114337)rotate(0)translate(-856.2252822707546,-999.5932365114337) scale(7.95959229229633,7.95959229229633)"
               opacity="1">
                <defs className="defs">
                    <linearGradient id="linearGradient2125ca3c58f30889b6147497a300b7d4" className="linearGradient1"
                                    gradientTransform="translate(0.5,0.5) rotate(0) translate(-0.5,-0.5)" x1="50%"
                                    y1="0%" x2="50%" y2="100%">
                        <stop id="stop1" offset="0%" className="linearGradientColor1" stopColor="#04deed"/>
                        <stop id="stop2" offset="100%" className="linearGradientColor2" stopColor="#1c0076"/>
                    </linearGradient>
                </defs>
                <g>
                    <polygon fill="url(#linearGradient2125ca3c58f30889b6147497a300b7d4)"
                             points="44.132,82.747 107.571,46.89 171.011,82.747 107.571,118.604 &#9;"
                             className="color c1"/>
                    <path fill="url(#linearGradient2125ca3c58f30889b6147497a300b7d4)"
                          d="M176.527,168.253V93.78l-63.44,35.857v71.714l35.857-22.066l16.549,8.275l-55.165,35.857l-85.506-46.89&#10;&#9;&#9;v-49.648L0,111.074v79.244L107.571,251l107.571-63.44L176.527,168.253z M104.813,0L0,63.44v34.754l38.615,23.169v44.132&#10;&#9;&#9;l63.44,35.857v-72.762L26.203,84.126V78.61l79.989-46.89l84.126,48.269V150.6l24.824,14.895V63.44L104.813,0z"
                          className="color c1"/>
                </g>
            </g>
        </svg>
    )
}