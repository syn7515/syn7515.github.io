import React from 'react'
import './StickIt.css';
import Grid from '@material-ui/core/Grid';

function StickIt() {

    return (
    <div className="StickIt">

        <div className= 'container'>
            <Grid container spacing={3} direction='row' justify="center" alignItems="flex-start">
                <Grid item xs ={12} sm={6} style={{marginBottom: 30}}>
                    <div className='text-title'>Deliverable</div>
                    <div className='text-explanation'>sticker set for designer</div>
                </Grid>
                <Grid item xs ={12} sm={6} style={{marginBottom: 30}}>
                    <div className = 'text-body'style={{marginTop: 0}}>Stick-it is an adhesive toolkit for designers. It consists of modular stickers for three different purposes; measurement, guidance, and informativeness. Designers can make up their own sticker set according to their needs.</div>
                </Grid>
            </Grid>
        </div>

        <div className='container' style={{marginTop:100}}>
            <Grid container spacing={3} direction='row' justify="flex-start" alignItems="flex-start">
                <Grid item xs ={6} sm={4} style={{marginBottom: 30}}>
                    <div className='text-subtitle'>Output</div>
                    <div className='text-body'>Graphic Design</div>
                </Grid>
                <Grid item xs ={6} sm={4} style={{marginBottom: 30}}>
                    <div className='text-subtitle'>Contribution</div>
                    <div className='text-body'>Personal Project(100%)</div>
                </Grid>
                <Grid item xs ={6} sm={4} style={{marginBottom: 30}}>
                    <div className='text-subtitle'>Duration</div>
                    <div className='text-body'>2 weeks (2021.01)</div>
                </Grid>
            </Grid>
        </div>

        <div className= 'container' style={{marginTop:150}}>
            <img className="master-image" src={process.env.PUBLIC_URL + '/assets/stickit/master.png'} alt="master of stick-it"/>
        </div>

        <div className='container' style={{marginTop:150}}>
            <img className='master-image'src={process.env.PUBLIC_URL + '/assets/stickit/overview.png'} alt="overview of stickit"/>
        </div>

        
        
        <div className='container' style={{marginTop:300, marginBottom: 0}}>
            <div className='text-subtitle'>Idea</div>
            <div className='text-body'>People often attach stickers to their laptops for aesthetics or individuality expression. Stick-it was inspired from the idea that stickers can serve a more useful function if it provides information that is either frequently looked, or only meaningful in a physical form.</div>
        </div>
        <div className='container' style={{marginTop: 60, maxWidth: 905}} >
            <img className='master-image'  src={process.env.PUBLIC_URL + '/assets/stickit/idea.jpg'} alt="inspiration"/>
        </div>


        <div className='container' style={{marginTop:250}}>
            <div className='text-subtitle'>Contents</div>
            <div className='text-body'>Three different categories of sticker content were gathered through the interview of neighbor designers.</div>
            <Grid container spacing={4} style={{marginTop: 40}} direction='row' justify="flex-start" alignItems="flex-start">
                <Grid item xs ={12} sm={4}>
                    <img className='master-image'  src={process.env.PUBLIC_URL + '/assets/stickit/content-1.png'} alt="measurement"/>
                </Grid>
                <Grid item xs ={12} sm={4}>
                    <img className='master-image'  src={process.env.PUBLIC_URL + '/assets/stickit/content-2.png'} alt="guidance"/>
                </Grid>
                <Grid item xs ={12} sm={4}>
                    <img className='master-image'  src={process.env.PUBLIC_URL + '/assets/stickit/content-3.png'} alt="information"/>
                </Grid>
            </Grid>
        </div>


        <div className='container' style={{marginTop:250, marginBottom: 0}}>
            <div className='text-subtitle'>Modularization</div>
            <div className='text-body'>Based on the size of 16-inch Mackbook Pro, the sticker was modularized into three different size. Then, according to the contents, 9 kinds of modular stickers were designed.</div>
            <img className='master-image' style={{marginTop: 20}} src={process.env.PUBLIC_URL + '/assets/stickit/modularization.gif'} alt="module"/>
            <img className='master-image' style={{marginTop: 100}} src={process.env.PUBLIC_URL + '/assets/stickit/module.png'} alt="module result"/>
        </div>

        <div className='container' style={{marginTop:250, marginBottom: 250}}>
            <div className='text-subtitle'>Customization</div>
            <div className='text-body'>Designer can make up their own stickers set on A5 size paper according to their needs.</div>
            <div className='text-body' style={{marginTop: 55}}>1. Graphic Designer : Font size + Artboard size + Rounding + pt size + Angle + Ruler (mm)</div>
            <img className='master-image' style={{marginTop: 10}} src={process.env.PUBLIC_URL + '/assets/stickit/output-1.png'} alt="stick-it for graphic designer"/>
            <div className='text-body' style={{marginTop: 85}}>2.  UI / UX  Designer : Artboard size + Shortcut + pt size + Angle + Ruler (mm)</div>
            <img className='master-image' style={{marginTop: 10}} src={process.env.PUBLIC_URL + '/assets/stickit/output-2.png'} alt="stick-it for UI/UX designer"/>
        </div>
        


        <div className='copy-project'>Copyright 2021. Sooyeon Park all rights reserved.</div>

    </div>);
}

export default StickIt;