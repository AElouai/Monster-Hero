import React , {PropTypes , Component} from 'react';

class Pages extends Component {
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}

Pages.propTypes = {
    children:PropTypes.object.isRequired
};

export default Pages;