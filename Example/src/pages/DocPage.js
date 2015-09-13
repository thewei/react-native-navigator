import React from 'react-native';
import docs from '../data/docs';
import DocIndex from './DocIndex';

export default class DocPage extends React.Component {
    render(){
        return (
            <DocIndex docs={docs} />
        )
    }
}
