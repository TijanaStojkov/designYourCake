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
                divSize: 's3',
                imageClass: 'img-icing',
                imageSrc: `${IMAGES.icingBlue}`,
                imageParagraf: false,
            },
            'icingRed': {
                divSize: 's3',
                imageClass: 'img-icing',
                imageSrc: `${IMAGES.icingRed}`,
                imageParagraf: false,
            },
            'icingGreen': {
                divSize: 's3',
                imageClass: 'img-icing',
                imageSrc: `${IMAGES.icingGreen}`,
                imageParagraf: false,
            },
            'icingGray': {
                divSize: 's3',
                imageClass: 'img-icing',
                imageSrc: `${IMAGES.icingGray}`,
                imageParagraf: false,
            },
            'icingYellow': {
                divSize: 's3',
                imageClass: 'img-icing',
                imageSrc: `${IMAGES.icingYellow}`,
                imageParagraf: false,
            },
            'icingOrange': {
                divSize: 's3',
                imageClass: 'img-icing',
                imageSrc: `${IMAGES.icingOrange}`,
                imageParagraf: false,
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
            imageOnClick = {()=>props.changeSpangeHandler(key)}
        />
    ))
    const icing = Object.keys(cake.icing).map(key=>(
        <ImageDiv
            key = {key}
            divSize = {cake.icing[key].divSize}
            imageClass = {`img-icing ${props.spange===key?'border':' '}`}
            imageSrc = {cake.icing[key].imageSrc}
            imageAlt = {key}
            imageParagraf = {cake.icing[key].imageParagraf}
            imageOnClick = {()=>props.changeIcingHandler(key)}
        />
    ))
    return (
        <div className='Step2'>
            <div className='container'>
                <div className='row'>
                    <h5>Coose cake spange</h5>
                    {spange}
                </div>
                <div className='row'>
                    <h5>Choose icing color</h5>
                    {icing}
                </div>
            </div>
        </div>
    )
}
export default step2;