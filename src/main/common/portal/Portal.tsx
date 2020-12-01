import {useEffect} from 'react';
import ReactDOM from 'react-dom';

// class Portal extends Component {
//
//   el = document.createElement('div');
//
//   componentDidMount() {
//     document.body.appendChild(this.el);
//   }
//
//   componentWillUnmount() {
//     document.body.removeChild(this.el);
//   }
//
//   render() {
//     const { children } = this.props;
//
//     return ReactDOM.createPortal(children, this.el);
//   }
// }
//
// export default Portal;

const Portal = (props: any) => {


    let el = document.createElement('div');

    useEffect(() => {
        document.body.appendChild(el);
        return () => {
            document.body.removeChild(el);
        };
    }, [el]);


    const {children} = props;

    return ReactDOM.createPortal(children, el);
};


export default Portal;

