import { navigate } from '@reach/router';
import { useEffect } from 'react';

const Redirect = props => {
    useEffect(() => {
        navigate(props.to)
    }, [])
    return (
        ''
    )
}

export default Redirect
