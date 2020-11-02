import React from 'react';
import './Step2.scss'

//images
import { IMAGES }from '../../../../const/images';

//components
import ImageDiv from '../Parts/ImageDiv';

const step2 = (props) => {
    let cake = {
        spange: {
            'spangeRed': {
                divSize: 's4',
                imageClass: 'img-spange',
                imageSrc: `${IMAGES.spangeRed}`,
                imageParagraf: 'Strawbery',
            },
            'spangeBrown': {
                divSize: 's4',
                imageClass: 'img-spange',
                imageSrc: `${IMAGES.spangeBrown}`,
                imageParagraf: 'Chocolate',
            },
            'spangeYellow': {
                divSize: 's4',
                imageClass: 'img-spange',
                imageSrc: `${IMAGES.spangeYellow}`,
                imageParagraf: 'Vanila',
            },
        },
        icing: {
            'icingBlue': {
                divSize: 's2',
                imageClass: 'img-icing',
                imageSrc: `${IMAGES.icingBlue}`,
                imageParagraf: false,
            },
            'icingRed': {
                divSize: 's2',
                imageClass: 'img-icing',
                imageSrc: `${IMAGES.icingRed}`,
                imageParagraf: false,
            },
            'icingGreen': {
                divSize: 's2',
                imageClass: 'img-icing',
                imageSrc: `${IMAGES.icingGreen}`,
                imageParagraf: false,
            },
            'icingGray': {
                divSize: 's2',
                imageClass: 'img-icing',
                imageSrc: `${IMAGES.icingGray}`,
                imageParagraf: false,
            },
            'icingYellow': {
                divSize: 's2',
                imageClass: 'img-icing',
                imageSrc: `${IMAGES.icingYellow}`,
                imageParagraf: false,
            },
            'icingOrange': {
                divSize: 's2',
                imageClass: 'img-icing',
                imageSrc: `${IMAGES.icingOrange}`,
                imageParagraf: false,
            },
        },
        filling: {
            'fillingBrown': {
                divSize: 's3',
                imageClass: 'img-icing',
                imageSrc: `${IMAGES.fillingBrown}`,
                imageParagraf: 'Chocolate',
            },
            'fillingPink': {
                divSize: 's3',
                imageClass: 'img-icing',
                imageSrc: `${IMAGES.fillingPink}`,
                imageParagraf: 'Strawbery',
            },
            'fillingWhite': {
                divSize: 's3',
                imageClass: 'img-icing',
                imageSrc: `${IMAGES.fillingWhite}`,
                imageParagraf: 'Vanilla',
            },
            'fillingPurple': {
                divSize: 's3',
                imageClass: 'img-icing',
                imageSrc: `${IMAGES.fillingPurple}`,
                imageParagraf: 'Berry'
            },
        }
    }
    const spange = Object.keys(cake.spange).map(key=>(
        <ImageDiv
            key = {key}
            divSize = {cake.spange[key].divSize}
            imageClass = {`img-spange ${props.spange===key?'border padding5':' '}`}
            imageSrc = {cake.spange[key].imageSrc}
            imageAlt = {key}
            imageParagraf = {cake.spange[key].imageParagraf}
            imageOnClick = {()=>props.changeValueHandler('spange', key)}
        />
    ));
    const icing = Object.keys(cake.icing).map(key=>(
        <ImageDiv
            key = {key}
            divSize = {cake.icing[key].divSize}
            imageClass = {`img-icing ${props.spange===key?'border':' '}`}
            imageSrc = {cake.icing[key].imageSrc}
            imageAlt = {key}
            imageParagraf = {cake.icing[key].imageParagraf}
            imageOnClick = {()=>props.changeValueHandler('icing', key)}
        />
    ));
    const filling = Object.keys(cake.filling).map(key=>(
        <ImageDiv
            key = {key}
            divSize = {cake.filling[key].divSize}
            imageClass = {`img-icing ${props.filling===key?'border':' '}`}
            imageSrc = {cake.filling[key].imageSrc}
            imageAlt = {key}
            imageParagraf = {cake.filling[key].imageParagraf}
            imageOnClick = {()=>props.changeValueHandler('filling', key)}
        />
    ));

    return (
        <div className='Step2'>
            <div className='container'>
                <div className='row'>
                    <h5>Choose cake spange</h5>
                    {spange}
                </div>
                <div className='row'>
                    <h5>Choose icing color</h5>
                    {icing}
                </div>
                <div className='row'>
                    <h5>Choose filling</h5>
                    {filling}
                </div>
            </div>
        </div>
    )
}
export default step2;