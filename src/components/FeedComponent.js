import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import { imageUrls } from '../shared/ImageUrl';

function RenderCard( {image} ) {
    return(
        <FadeTransform in 
            transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
            <Card>
                {/* {alert(image.src)} */}
                <CardImg src={image.src} alt="buildings"  height="200px"/>
                <CardBody>
                    <CardTitle>Demo Building</CardTitle>
                    <CardText>Construction is in process.</CardText>
                </CardBody>
            </Card>
        </FadeTransform>
    );
}

class Feed extends React.Component {
    

    constructor(props) {
        super(props);
    }
    
    
    render() {
        console.log(imageUrls);
        var counter = 0;
        const feeds = imageUrls.map((image) => {
            counter = counter + 1;
            return (
                <div key={counter} className="col-12 col-md-6 col-lg-4 mb-2 mt-2">
                    <RenderCard image={image} />
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    <h4>Buildings</h4>
                    <hr />
                    {feeds}
                </div>
            </div>
        );
    }
    
}


export default Feed;