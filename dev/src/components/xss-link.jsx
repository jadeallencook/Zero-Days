import React, { Component } from 'react';

class XSSLink extends Component {
    render() { 
        const data = this.props.data;
        let link = data.url;
        link = link.replace('{{inject}}', data.inject);
        link = encodeURI(link);
        if (data.encoding === 'doubleURI') {
            link = encodeURI(link);
        }
        console.log(this.props);
        return (<a target="_blank" href={link}>{link.substring(0, 65)}...</a>);
    }
}
 
export default XSSLink;