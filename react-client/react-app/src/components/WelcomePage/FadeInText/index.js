import React from "react";
import { Text, TextContainer } from './styled/index'
import { Fade } from "react-bootstrap";

class FadeInText extends React.Component {
    constructor(props) {
        super();
        console.log(props)
    }

    render = () => {
        return (
            <Text delay={this.props.delay}>
                    {this.props.children}
            </Text>
        );
    };
}

FadeInText.defaultProps = {
    delay: 0
}

export default FadeInText;

// class FadeInTextInner extends React.Component {
//     constructor(props) {
//         super();
//         console.log(props)
//     }
    
//     componentDidUpdate(props){
//         if(this.props.isVisible !== props.isVisible)
//         {
//             console.log('updating')
//             this.forceUpdate();
//         }
//     }

//     render = () => {
//         return (
//             <Text>
//                 {this.props.children}
//             </Text>
//         );
//     };
// }
