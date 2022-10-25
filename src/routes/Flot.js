import React from 'react'
import './Flot.css';
import Grid from '@material-ui/core/Grid';







function Flot() {




    return (
    <div className="Flot">

        <div className  = 'container' style={{marginTop:0, paddingTop:40}}>
            <img className="master-image" src={process.env.PUBLIC_URL + '/assets/flot/master.png'} alt="master of flot"/>
        </div>

        <div className= 'container-shrinked-2'>
            <Grid container spacing={3} direction='row' justify="center" alignItems="flex-start">
                <Grid item xs ={12} sm={6} style={{marginBottom: 30}}>
                    <div className='text-title'>Flot</div>
                    <div className='text-explanation'>online meeting service</div>
                </Grid>
                <Grid item xs ={12} sm={6} style={{marginBottom: 30}}>
                    <div className = 'text-body'style={{marginTop: 0}}>Online meeting became general communication tool in work place. Flot combines and packages essential technology for conducting meeting smoothly.  It focuses on making online meetings as efficient as offline meetings, centering taking meeting minute technology.</div>
                </Grid>
            </Grid>
        </div>

        <div className='container-shrinked-2' style={{marginTop:100}}>
            <Grid container spacing={3} direction='row' justify="flex-start" alignItems="flex-start">
                <Grid item xs ={6} sm={4} style={{marginBottom: 30}}>
                    <div className='text-subtitle'>Deliverable</div>
                    <div className='text-body'>UI/UX Design<br/>Branding</div>
                </Grid>
                <Grid item xs ={6} sm={4} style={{marginBottom: 30}}>
                    <div className='text-subtitle'>Contribution</div>
                    <div className='text-body'>Team Project(30%)<br/>Service Design<br/>UI Design<br/>Branding</div>
                </Grid>
                <Grid item xs ={6} sm={4} style={{marginBottom: 30}}>
                    <div className='text-subtitle'>Duration</div>
                    <div className='text-body'>4 months (2020.07 - 2020.11)</div>
                </Grid>
            </Grid>
        </div>

        

        <div className='container' style={{marginTop:150}}>
            <img className="master-image" src={process.env.PUBLIC_URL + '/assets/flot/overview.png'} alt="master of flot"/>
        </div>

        
        
        <div className='container' style={{marginTop:200}}>
            <div className='text-subtitle'>Background</div>
            <Grid container style={{marginTop: 50}} spacing={6} direction='row' justify="flex-start" alignItems="flex-start">
                <Grid item xs ={12} sm={12} style={{paddingTop: 0, paddingBottom: 0}}>
                    <hr style={{marginBottom: 27}}/>
                    <div className='text-background-regular'>The recent expansion of telecommuting has shifted the conference environment from offline to online.</div>
                    <div className='text-background-bold'>However, there is no online meeting service carefully considering the context of the online collaboration situation.</div>
                    <hr style={{marginTop: 27}}/>
                </Grid>
                <Grid item xs ={12} sm={4} style={{marginBottom: 10}}>
                    <div className='text-background-sub'>BACKGROUD</div>
                    <div className='text-background-bold-body' style={{marginBottom: 15}}>Expansion of Working from Home</div>
                    <div className='text-background-body' style={{minHeight: 57}}>Recently, due to the outbreak of Covid-19 and changes in the company's labor policy, more companies are encouraging people to work from home.</div>
                    <img className='master-image' style={{marginTop: 45}} src={process.env.PUBLIC_URL + '/assets/flot/background-1.png'} alt="reason of telecommuting"/>
                </Grid>
                <Grid item xs ={12} sm={4} style={{marginBottom: 10}}>
                    <div className='text-background-sub'>TREND</div>
                    <div className='text-background-bold-body' style={{marginBottom: 15}}>Growth of Online Meeting</div>
                    <div className='text-background-body' style={{minHeight: 57}}>As telecommuting expands, the usage of video conferencing functions such as video calls and screen sharing is also rapidly increasing.</div>
                    <img className='master-image' style={{marginTop: 45}} src={process.env.PUBLIC_URL + '/assets/flot/background-2.png'} alt="increase use of online meeting"/>
                </Grid>
                <Grid item xs ={12} sm={4} style={{marginBottom: 10}}>
                    <div className='text-background-sub'>NEEDS</div>
                    <div className='text-background-bold-body' style={{marginBottom: 15}}>Needs for better Online Meeting</div>
                    <div className='text-background-body' style={{minHeight: 57}}>However, existing services are just on the level of moving the environment of meetings from offline to online.</div>
                    <img className='master-image' style={{marginTop: 45}} src={process.env.PUBLIC_URL + '/assets/flot/background-3.png'} alt="comparing existing online meeting services"/>
                </Grid>
                <Grid item xs ={12} sm={12} style={{paddingTop: 0}}>
                    <hr/>
                </Grid>
            </Grid>
        </div>
        
        
        <div className='container' style={{marginTop: 250, marginBottom: 65}}>
            <div className='text-subtitle'>Problem</div>
            <div className='text-body'>We conducted Focus Group Interview (FGI) to investigate users’ needs and painpoint in using current online meeting service.</div>
            <img className='master-image' style={{marginTop: 55}} src={process.env.PUBLIC_URL + '/assets/flot/problem-1.png'} alt="problem analysis"/>
        </div>
        <div className='container' style={{maxWidth: 782, marginBottom: 65}}>
            <img className='master-image'  src={process.env.PUBLIC_URL + '/assets/flot/problem-2.png'} alt="problem analysis"/>
        </div>
        <div className='container' style={{marginTop: 250, marginBottom: 0}}>
            <div className='text-subtitle'>Solution</div>
        </div>
        <div className='container' style={{maxWidth: 816, marginTop: 55}}>
            <img className='master-image'  src={process.env.PUBLIC_URL + '/assets/flot/solution.png'} alt="key feature"/>
        </div>
        <div className='container' style={{marginTop: 250}}>
            <div className='text-subtitle'>User Scenario</div>
            <Grid container spacing={1} style={{marginTop: 55}} direction='row' justify="flex-start" alignItems="flex-start">
                <Grid item xs={6} sm ={4} md={2}>
                    <div className='text-user-scenario'>Meeting Setting</div>
                    <img className='master-image' style={{marginTop: 10}} src={process.env.PUBLIC_URL + '/assets/flot/story-1.png'} alt="story 1"/>
                    <div className='text-story' style={{marginTop: 20, marginBottom: 30}} >An emergency meeting was suddenly scheduled while working from home. When opening a meeting room, <u> selected an AR emoji in the camera setting</u> so that the other person can see my expression regardless of the camera quality.</div>
                </Grid>
                <Grid item xs={6} sm ={4} md={2}>
                    <div className='text-user-scenario'>Recording</div>
                    <img className='master-image' style={{marginTop: 10}} src={process.env.PUBLIC_URL + '/assets/flot/story-2.png'} alt="story 2"/>
                    <div className='text-story' style={{marginTop: 20, marginBottom: 30}} >Thanks to the STT technology built into the service,  <u>who said what is automatically recorded in the minutes.</u> <br/><br/>For other team members who couldn’t attend today's meeting, <u>we insert an important whiteboard screen link into the minutes.</u></div>
                </Grid>
                <Grid item xs={6} sm ={4} md={2}>
                    <div className='text-user-scenario'>Marking</div>
                    <img className='master-image' style={{marginTop: 10}} src={process.env.PUBLIC_URL + '/assets/flot/story-3.png'} alt="story 3"/>
                    <div className='text-story' style={{marginTop: 20, marginBottom: 30}} >Important parts of the meeting will be marked with favorites in advance for future summaries. <br/><br/>In addition, inaccuracies in the minutes recorded in STT are corrected by hand, bolded or underlined depending on the content.</div>
                </Grid>
                <Grid item xs={6} sm ={4} md={2}>
                    <div className='text-user-scenario'>Device Mirroring</div>
                    <img className='master-image' style={{marginTop: 10}} src={process.env.PUBLIC_URL + '/assets/flot/story-4.png'} alt="story 4"/>
                    <div className='text-story' style={{marginTop: 20, marginBottom: 30}} >To sketch ideas and show them, so <u>logged in to an app installed on my mobile</u> rather than using a mouse on the web. <br/><br/>Entering sketch mode, the white board currently working is mirrored.  Zoomed in on the part I want to sketch with my finger.</div>
                </Grid>
                <Grid item xs={6} sm ={4} md={2}>
                    <div className='text-user-scenario'>Sketchoing</div>
                    <img className='master-image' style={{marginTop: 10}} src={process.env.PUBLIC_URL + '/assets/flot/story-5.png'} alt="story 5"/>
                    <div className='text-story' style={{marginTop: 20, marginBottom: 30}} >I <u>quickly draw an idea sketch and show it.</u> Then, completed the required mood board with the post-it on the white board screen and wrap up the meeting.</div>
                </Grid>
                <Grid item xs={6} sm ={4} md={2}>
                    <div className='text-user-scenario'>Documentation</div>
                    <img className='master-image' style={{marginTop: 10}} src={process.env.PUBLIC_URL + '/assets/flot/story-6.png'} alt="story 6"/>
                    <div className='text-story' style={{marginTop: 20, marginBottom: 30}} >Minutes created during the meeting are <u>automatically saved to the cloud.</u> The decisions are summarised in the meeting summary card. <br/><br/><u>Send the meeting minutes link to other team members</u> so that they can know what was decided at the meeting.</div>
                </Grid>
            </Grid>
        </div>
        <div className='container' style={{marginTop: 250}}>
            <div className='text-subtitle'>Flow chart</div>
            <img className='master-image' style={{marginTop: 55}} src={process.env.PUBLIC_URL + '/assets/flot/flow-chart.png'} alt="flow chart"/>
        </div>
        <div className='container-shrinked-2' style={{marginTop: 250, marginBottom:55}}>
            <div className='text-subtitle'>Flow chart</div>
            <div className='text-body'>Using the square framed UI,  navigation areas, toolbar areas, and fast recording areas are designed to be clearly distinguished. Overall, card-type components were used to encourage users to take the initiative in organizing and summarizing the contents of long-breathed meetings.</div>
        </div>
        <div className='container' style={{marginTop: 55, maxWidth: 1403}}>
            <img className='master-image'  src={process.env.PUBLIC_URL + '/assets/flot/wire-frame.png'} alt="wire frame"/>
        </div>
        <div className ='gray-bg-flot' style={{marginTop: 200}}>
            <div className='container' style={{paddingTop: 100}}>
                <div className='output-name'>Meeting experience <br/>as smooth as on-site meetings</div>
            </div>
            <div className='container' style={{marginTop: 100, maxWidth: 1510}}>
                <img className='master-image'  src={process.env.PUBLIC_URL + '/assets/flot/output-1.png'} alt="service features"/>
            </div>
            <div className='container' style={{marginTop: 250}}>
                <div className='output-name' style={{textAlign: 'right'}}>Record and manage<br/>meeting minutes efficiently</div>
            </div>
            <div className='container' style={{marginTop: 100, maxWidth: 1170}}>
                <img className='master-image'  src={process.env.PUBLIC_URL + '/assets/flot/output-2.png'} alt="service features"/>
            </div>
            <div className='container' style={{marginTop:250, marginBottom: 0, paddingBottom: 10 }}>
                <div className='text-subtitle'>Branding</div>
                <Grid container spacing={6} style={{marginTop: 25, paddingBottom: 250}} direction='row' justify="flex-start" alignItems="flex-start">
                    <Grid item xs={12} sm ={6} >
                        <hr/>
                        <div className='text-branding'>NAMING</div>
                        <div className='container' style={{maxWidth: 360, marginTop: 15, marginBottom: 25}}>
                            <img className='master-image'  src={process.env.PUBLIC_URL + '/assets/flot/flot_naming.gif'} alt="naming motion graphic"/>
                        </div>
                        <div className='text-story'>Flot: flow with plot - meaning that it aims for a flexible collaboration process based on a clear context.</div>
                    </Grid>
                    <Grid item xs={12} sm ={6}>
                        <hr/>
                        <div className='text-branding'>LOGO</div>
                        <div className='container' style={{maxWidth: 376, marginTop: 15, marginBottom: 25}}>
                            <img className='master-image'  src={process.env.PUBLIC_URL + '/assets/flot/logo-flot.png'} alt="logo"/>
                        </div>
                        <div className='text-story' >Flot: flow with plot - it means that it aims for a flexible collaboration process based on a clear context.</div>
                    </Grid>
                    <Grid item xs={12} sm ={6}>
                        <hr/>
                        <div className='text-branding'>MAIN COLOR PALETTE</div>
                        <div className='container' style={{maxWidth: 530, marginTop: 50, marginBottom: 50}}>
                            <img className='master-image'  src={process.env.PUBLIC_URL + '/assets/flot/main-color.png'} alt="main color palette"/>
                        </div>
                        <div className='text-story'>As the main color, achromatic colors, such as white boards, were used to focus on the point colors used to distinguish colors.</div>
                    </Grid>
                    <Grid item xs={12} sm ={6}>
                        <hr/>
                        <div className='text-branding'>POINT COLOR PALETTE</div>
                        <div className='container' style={{maxWidth: 538, marginTop: 50, marginBottom: 50}}>
                            <img className='master-image'  src={process.env.PUBLIC_URL + '/assets/flot/point-color.png'} alt="point color palette"/>
                        </div>
                        <div className='text-story'>Pastel-tone colors with moderate saturation and high luminosity were used. It gives a creative impression, and it is easy to see and not get tired.</div>
                    </Grid>
                    <Grid item xs={12} sm ={6}>
                        <hr/>
                        <div className='text-branding'>TYPEFACE</div>
                        <div className='container' style={{maxWidth: 360, marginTop: 15, marginBottom: 30}}>
                            <img className='master-image'  src={process.env.PUBLIC_URL + '/assets/flot/typeface.png'} alt="nexa font"/>
                        </div>
                        <div className='text-story'>To give it a neat and tidy look, the Sansserif typeface was used to give it a geometric feel.</div>
                    </Grid>
                    <Grid item xs={12} sm ={6}>
                        <hr/>
                        <div className='text-branding'>ICONOGRAPHY</div>
                        <div className='container' style={{maxWidth: 387, marginTop: 15, marginBottom: 30}}>
                            <img className='master-image'  src={process.env.PUBLIC_URL + '/assets/flot/icon.png'} alt="iconography"/>
                        </div>
                        <div className='text-story'>To give a soft and modern impression, icons were designed around strokes with rounded edges, and some small areas were used with faces to enhance visibility.</div>
                    </Grid>
                </Grid>
                <div className='copy-project'>Copyright 2021. Sooyeon Park all rights reserved.</div>
            </div>
        </div>


        
       

        
    </div>);
}

export default Flot;