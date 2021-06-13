import React from 'react'
import './Hugo.css';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player/vimeo'








function Hugo() {




    return (
    <div className="Hugo">
        <img className="master-image" src={process.env.PUBLIC_URL + '/assets/hugo/master.png'} alt="master of hugo"/>
        <div className= 'container'>
            <div className='text-title'>Hugo</div>
            <div className='text-explanation'>communication accelerating conversational agent for people from a foreign culture</div>
            <p className = 'text-body'><br/>Hugo is an Al speaker and application that enable users to have deeper-quality conversations through a news-sharing experience. It works as a ‘Communication Accelerator’ to whom only superficial dialog took place in between.</p>
        </div>



        <div className='container' style={{marginTop:180}}>
            <Grid container spacing={3} direction='row' justify="flex-start" alignItems="flex-start">
                <Grid item xs ={6} sm={4} style={{marginBottom: 30}}>
                    <div className='text-subtitle'>Output</div>
                    <div className='text-body'>UI/UX Design<br/>Product Design<br/>Branding</div>
                </Grid>
                <Grid item xs ={6} sm={4} style={{marginBottom: 30}}>
                    <div className='text-subtitle'>Contribution</div>
                    <div className='text-body'>Team Project(25%)<br/>User Research<br/>UX Design<br/>High-fi Prototyping</div>
                </Grid>
                <Grid item xs ={6} sm={4} style={{marginBottom: 30}}>
                    <div className='text-subtitle'>Duration</div>
                    <div className='text-body'>4 months (2019.09 - 2019.12)</div>
                </Grid>
            </Grid>
        </div>



        <div className='containter'>
            <div className='player-wrapper' >
                <ReactPlayer className='react-player' url='https://vimeo.com/559621239' playing= {false} width='100%' height='100%'/>
            </div>    
        </div>

        

        
        <div className='container' style={{marginTop:300, marginBottom:55}}>
            <div className='text-subtitle'>Desk Research</div>
            <div className='text-body'>This project started to explore and solve ‘Imbalance of Information’. Based on this big subject, researched to find opportunity we might help solve.</div>
        </div>
        <div className='container' style={{maxWidth: 353, marginTop: 55, marginBottom:0}}>
            <img className='master-image'  src={process.env.PUBLIC_URL + '/assets/hugo/desk.png'} alt="Imbalance of information"/>
        </div>
        <div className='container' style={{maxWidth: 960, marginTop: 30}}>
            <Grid container spacing={10} direction='row' justify="flex-start" alignItems="flex-start">
                <Grid item xs={12} sm={6}>
                    <img className='master-image'  src={process.env.PUBLIC_URL + '/assets/hugo/desk-1.png'} alt="Secondary Research"/>
                    <div className='text-desk'>We collected information about ‘Imbalance of Infromation’ on the Internet, which became the basis of background research.</div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img className='master-image'  src={process.env.PUBLIC_URL + '/assets/hugo/desk-2.png'} alt="Interviews"/>
                    <div className='text-desk'>Conductes two interviews with Professor Park, who conduct researches in media in general, and editor of KAIST Herald.</div>
                </Grid>
            </Grid>
        </div>

        
        
        <div className='container' style={{marginTop: 250, marginBottom: 65}}>
            <div className='text-subtitle'>Design Opportunity</div>
            <div className='text-body'>Through the process of affinity diagramming, we found the design opportunity consists of ‘Target, Problem and How’.</div>
            <img className='master-image' style={{marginTop: 55}} src={process.env.PUBLIC_URL + '/assets/hugo/opportunity.png'} alt="affinity diagram"/>
        </div>
        


        <div className='container' style={{marginTop: 250, marginBottom: 0}}>
            <div className='text-subtitle'>Primary Research</div>
            <div className='text-body'>Conducted interviews with three international student in KAIST, and found painpoint of them while communicating with local students.</div>
            <img className='master-image' style={{marginTop: 40}} src={process.env.PUBLIC_URL + '/assets/hugo/primary.png'} alt="interview of international student at KAIST"/>
        </div>

        

        <div className='container' style={{marginTop: 250, marginBottom: 0}}>
            <div className='text-subtitle'>Design Goal</div>
        </div>
        <div className='container' style={{maxWidth: 900, marginTop: 0, marginBottom:0}}>
            <img className='master-image' src={process.env.PUBLIC_URL + '/assets/hugo/goal.png'} alt="as-is and to-be"/>
        </div>


        <div className='container' style={{marginTop: 250, marginBottom: 0}}>
            <div className='text-subtitle'>Service Touchpoints</div>
        </div>
        <div className='container' style={{maxWidth: 1120, marginTop: 50, marginBottom:0}}>
            <img className='master-image' src={process.env.PUBLIC_URL + '/assets/hugo/touchpoint.png'} alt="service touchpoint"/>
        </div>



        <div className='container' style={{marginTop: 250, marginBottom: 0}}>
            <div className='text-subtitle'>Journey Map</div>
            <img className='master-image' style={{marginTop: 50}} src={process.env.PUBLIC_URL + '/assets/hugo/journeymap.png'} alt="journey map of hugo"/>
        </div>


        
        


        <div className='container' style={{marginTop: 250, marginBottom: 0}}>
            <div className='text-subtitle'>Usability Test</div>
            <div className='text-body'>Using the Wizard of Oz (WoZ) method, conducted usability tests on speaker VUI design and UX design. Two pairs of Korean student and an international student participated in this test.</div>
            <img className='master-image' style={{marginTop: 30}} src={process.env.PUBLIC_URL + '/assets/hugo/usability.png'} alt="usability test"/>
        </div>


        <div className='container' style={{marginTop: 250, marginBottom: 0}}>
            <div className='text-subtitle'>High-fidelity Prototyping</div>
            <div className='text-body'>Built working prototype using small bluetooth speaker and cloud services.</div>
            <img className='master-image' style={{marginTop: 30}} src={process.env.PUBLIC_URL + '/assets/hugo/prototyping.png'} alt="prototype structure"/>
        </div>


        
        <div className='container' style={{marginTop: 375, maxWidth: 1305}}>
            <img className='master-image'  src={process.env.PUBLIC_URL + '/assets/hugo/output.png'} alt="output of hugo"/>
        </div>


            <div className='container' style={{marginTop:250, marginBottom: 0 ,paddingBottom: 250}}>
                <div className='text-subtitle'>Branding</div>
                <div className='text-branding-hugo' style={{marginTop:50}} >Communication accelerator<br/>for people in different cultural background</div>
                <Grid container spacing={3} style={{marginTop: 25}} direction='row' justify="flex-start" alignItems="flex-start">
                    <Grid item xs={12} sm ={4} >
                        <img className='master-image'  src={process.env.PUBLIC_URL + '/assets/hugo/branding-1.png'} alt="naming of hugo"/>
                    </Grid>
                    <Grid item xs={12} sm ={4} >
                        <img className='master-image'  src={process.env.PUBLIC_URL + '/assets/hugo/branding-2.png'} alt="logo of hugo"/>
                    </Grid>
                    <Grid item xs={12} sm ={4} >
                        <img className='master-image'  src={process.env.PUBLIC_URL + '/assets/hugo/branding-3.png'} alt="color of hugo"/>
                    </Grid>
                </Grid>
            </div>


        
       
            <div className='copy-project'>Copyright 2021. Sooyeon Park all rights reserved.</div>

        
    </div>);
}

export default Hugo;