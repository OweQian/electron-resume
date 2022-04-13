import React from 'react'
import './index.less'
interface ITitle {
    /**
     * @description 标题
     * */
    text: string;
    /**
     * @description 样式
     * */
    styles?: React.CSSProperties;
}

const Title = ({text, styles}: ITitle) => {
    return (
        <div style={styles} styleName="title">{text}</div>
    )
}

export default Title