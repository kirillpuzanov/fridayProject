import {useEffect} from 'react';
import ReactDOM from 'react-dom';


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

