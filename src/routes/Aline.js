import React from 'react'
import './Aline.css';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player/vimeo'
import background from '../img/gradient.png'


function Aline() {



    return (
    <div className="Aline">
        <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/master.png'} alt="master of aline"/>
        <div className= 'container'>
            <div className='text-title'>Aline</div>
            <div className='text-explanation'>ESG Roobo-adviser service</div>
            <p className = 'text-body'><br/>Aline is a ESG Rovo-advisor based financial service focusing on individual’s governing value. In addition to earning profit through investment, users can help chaning the world positively by supporting corporates that are in align with their value.  </p>
        </div>
        <div className='container'>
            <Grid container spacing={3} direction='row' justify="center" alignItems="flex-start">
                <Grid item xs ={6} sm={3}>
                    <div className='text-subtitle'>Output</div>
                    <div className='text-body'>Service Design <br/>Mobile application</div>
                </Grid>
                <Grid item xs ={6} sm={3}>
                    <div className='text-subtitle'>Contribution</div>
                    <div className='text-body'>User Research<br/>GUI Design<br/>Video Editing</div>
                </Grid>
                <Grid item xs ={6} sm={3}>
                    <div className='text-subtitle'>Award</div>
                    <div className='text-body'>
                        <a href="https://ifworlddesignguide.com/search?q=nh%2Binvestment&search=nh%20investment#/pages/page/entry/310898-aline" target="_blank" rel="noopener noreferrer">IF Gold Award 2021</a><br/>
                        <a href="https://ifworlddesignguide.com/search?q=nh%2Binvestment&search=nh%20investment#/pages/page/entry/312630-aline" target="_blank" rel="noopener noreferrer">IF Award 2021</a></div>
                </Grid>
                <Grid item xs ={6} sm={3}>
                    <div className='text-subtitle'>Duration</div>
                    <div className='text-body'>4 months (2020.03 - 2020.06)</div>
                </Grid>
            </Grid>
        </div>
        <div className='containter'>
            <div className='player-wrapper' >
                <ReactPlayer className='react-player' url='https://vimeo.com/539719839' playing= {false} width='100%' height='100%'/>
            </div>    
        </div>
        <div className='containter'>
            <span>.</span>
        </div>
        <div className='container' style={{marginBottom : 36}}>
            <div className='text-subtitle'>Problem</div>
            <div className='text-body'>As interest in the environment and society grows, interest in sustainable investment is growing accordingly. However, it is difficult to practice sustainable investment through current financial products.</div>
        </div>
        <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/problem.png'} alt="problems"/>
        <div className='container' style={{marginTop: 220,  marginBottom : 80}}>
            <div className='text-subtitle'>Research</div>
            <div className='text-body'>We conducted a survey to find out about Millennial's interest in sustainable growth and in-depth thoughts. In addition, we conduncted focus group interview with a group of five Millennials to complete the persona and derive the painpoint.</div>
        </div>
        <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/research.png'} alt="research"/>

        <div className='black-bg' style={{marginTop: 180}}>
            <div className='container' style={{marginTop:0,  marginBottom : 0}}>
                <div className='text-subtitle-white'style={{marginBottom : 40}}>Solution</div>
                <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/solution.png'} alt="solution"/>
            </div>
            
        </div>

        <div className='container'style={{marginTop: 150}}>
            <div className='text-subtitle' style={{marginBottom: 60}}>Flow Chart</div>
            <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/flow-chart.png'} alt="flow chart"/>
        </div>
        <div className='container' style={{marginTop: 210,  marginBottom : 80}}>
            <div className='text-subtitle'>Wire Frame</div>
            <div className='text-body'>To avoid complicated impressions, important information was placed at the center of each tap and details were placed on swiped cards.</div>
        </div>
        <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/wire-frame.png'} alt="wire-frame"/>

        <div className='black-bg' style={{marginTop: 180}}>
            <div className='background' style={{ backgroundImage: `url(${background})`, marginTop:150}}>
                <div className='container' style={{marginTop:0,  marginBottom : 70}}>
                    <div className='text-phrase' style={{marginBottom : 30}}>We align investment and consumption with your value</div>
                    <div className='text-phrase-explanation' style={{marginBottom : 75}}>Beyond profit-making, Aline delivers value and the impact of money. By gathering the data from the initial survey and regular value updates, the index is weighted according to the user’s value. Based on index, the investment portfolio will be adjusted and consumption againtst the value will be ararmed.</div>
                </div>
            </div>
            <div className='container'>
                <Grid container spacing={3} direction='row' justify="center" alignItems="flex-start">
                <Grid item xs ={6} sm={4} lg={2}>
                    <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/journey1.png'} alt="user journey 1"/>
                    <div className='text-journey'>Start Aline</div>
                </Grid>
                <Grid item xs ={6} sm={4} lg={2}>
                    <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/journey2.png'} alt="user journey 2"/>
                    <div className='text-journey'>Set Personal values</div>
                </Grid>
                <Grid item xs ={6} sm={4} lg={2}>
                    <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/journey3.png'} alt="user journey 3"/>
                    <div className='text-journey'>Start Investment based on personal values</div>
                </Grid>
                <Grid item xs ={6} sm={4} lg={2}>
                    <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/journey4.png'} alt="user journey 4"/>
                    <div className='text-journey'>Check the financial and social impact</div>
                </Grid>
                <Grid item xs ={6} sm={4} lg={2}>
                    <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/journey5.png'} alt="user journey 5"/>
                    <div className='text-journey'>Update the portfolio thorugh value update</div>
                </Grid>
                <Grid item xs ={6} sm={4} lg={2}>
                    <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/journey6.png'} alt="user journey 6"/>
                    <div className='text-journey'>Check company’s value during payment</div>
                </Grid>
                </Grid>
            </div>
            <div className='container' style={{marginTop:270,  marginBottom : 0}}>
                <div className='text-subtitle-white'>Personal Value Index (PVI)</div>
                <div className='text-body' style={{color : 'white'}}>Referring to MSCI ratings, we created value index system with 6 main criteria. The personal value index adjusts the investment portfolio an evaluate consumptions. <a href="https://naver.com" target='_blank' rel="noopener noreferrer" style={{color : 'white'}}>Learn more</a> </div>
                <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/pvi.png'} alt="personal value index diagram" style={{marginTop:90}} />
            </div>
        </div>
    </div>);
}

export default Aline;