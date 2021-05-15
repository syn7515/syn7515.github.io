import React from 'react'
import './Aline.css';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player/vimeo'
import background from '../img/gradient.png'


function Aline() {



    return (
    <div className="Aline">
        <div style={{height: 54}}></div>
        <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/master.png'} alt="master of aline"/>
        <div className= 'container'>
            <div className='text-title'>Aline</div>
            <div className='text-explanation'>ESG Roobo-adviser service</div>
            <div className = 'text-body'><br/>Aline is a ESG Rovo-advisor based financial service focusing on individual’s governing value. In addition to earning profit through investment, users can help chaning the world positively by supporting corporates that are in align with their value.  </div>
        </div>
        <div className='container' style={{marginTop:180}}>
            <Grid container spacing={3} direction='row' justify="center" alignItems="flex-start">
                <Grid item xs ={6} sm={3}>
                    <div className='text-subtitle'>Output</div>
                    <div className='text-body'>Service Design <br/>Mobile application</div>
                </Grid>
                <Grid item xs ={6} sm={3}>
                    <div className='text-subtitle'>Contribution</div>
                    <div className='text-body'>Team Project (30%)<br/>User Research<br/>UI Design</div>
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
        <div className ='gray-bg'>
            <div className ='container' style={{marginTop: 0, paddingTop: 50, paddingBottom: 50}}>
                <Grid container spacing={2} direction='row' justify="center" alignItems="flex-start" >
                    <Grid item xs ={6} sm={3}>
                        <div className='text-problem' style={{marginBottom : 10}}>Growing Needs of Investment for Better World</div>
                        <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/problem1.png'} alt="problem 1"/>
                    </Grid>
                    <Grid item xs ={6} sm={3}>
                        <div className='text-problem' style={{marginBottom : 10}}>Growing Awareness on Sustainable Investing</div>
                        <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/problem2.png'} alt="problem 2"/>
                    </Grid>
                    <Grid item xs ={6} sm={3}>
                        <div className='text-problem' style={{marginBottom : 10}}>Investor’s Tendency to Invest in thier Own Interests</div>
                        <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/problem3.png'} alt="problem 3"/>
                    </Grid>
                    <Grid item xs ={6} sm={3}>
                        <div className='text-problem' style={{marginBottom : 10}}>Investment Beyond Numbers</div>
                        <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/problem4.png'} alt="problem 4"/>
                    </Grid>
                </Grid>
            </div>
        </div>
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
            <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/wire.png'} style={{marginTop : 70}} alt="wire-frame"/>
        </div>
       

        <div className='black-bg' style={{marginTop: 180}}>
            <div className='background' style={{ backgroundImage: `url(${background})`, marginTop:200}}>
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
            <div className='container' style={{marginTop:300,  marginBottom : 0}}>
                <div className='text-subtitle-white'>Personal Value Index (PVI)</div>
                <div className='text-body' style={{color : 'white', marginBottom: 90}}>Referring to MSCI ratings, we created value index system with 6 main criteria. The personal value index adjusts the investment portfolio an evaluate consumptions. <a href= {process.env.PUBLIC_URL + '/assets/aline/pvi-process.png'} target='_blank' rel="noopener noreferrer" style={{color : 'white'}}>Learn more</a> </div>
                <Grid container spacing={3} direction='row' justify="center" alignItems="flex-start">
                    <Grid item xs ={6} sm={2}>
                        <div className='text-pvi' style={{marginBottom:12}}>Initial Survey</div>
                        <img className="master-image" style={{marginBottom:12}} src={process.env.PUBLIC_URL + '/assets/aline/pvi-1.png'} alt="pvi 1"/>
                    </Grid>
                    <Grid item xs ={6} sm={2}>
                        <div className='text-pvi' style={{marginBottom:12}}>Value Update</div>
                        <img className="master-image" style={{marginBottom:12}} src={process.env.PUBLIC_URL + '/assets/aline/pvi-2.png'} alt="pvi 2"/>
                    </Grid>
                    <Grid item xs ={12} sm={4}>
                        <Grid container spacing={1} direction='column' justify="center" alignItems="center">
                            <Grid item >
                                <div className='text-pvi' style={{marginBottom:24}}>Personal Value Index</div>
                                <img className="pvi-image" src={process.env.PUBLIC_URL + '/assets/aline/pvi-3.png'} alt="pvi 3"/>
                                <div className='text-pvi' style={{ marginTop : 12}}>↓</div>
                            </Grid>
                            <Grid item >
                                <div className='text-pvi' style={{marginBottom:12}}>User Interface</div>
                                <img className="pvi2-image" src={process.env.PUBLIC_URL + '/assets/aline/pvi-4.png'} alt="pvi 4"/>
                            </Grid>
                            <Grid item >
                                <div className='text-pvi-2' style={{marginBottom:12}}>Personal Value Index is created and updated throughout using service. <br/><br/>Each color is referred from the images below. </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid> 
                <Grid container spacing={1} direction='row' justify="center" alignItems="flex-start">
                    <Grid item xs ={4} sm={4} lg={2}>
                        <div className='text-pvi-3' >Climate Change</div>
                        <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/pvi-5-1.png'} alt="climate change"/>
                    </Grid>
                    <Grid item xs ={4} sm={4} lg={2}>
                        <div className='text-pvi-3'>Labor Welfare</div>
                        <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/pvi-5-2.png'} alt="Labor Welfare"/>
                    </Grid>
                    <Grid item xs ={4} sm={4} lg={2}>
                        <div className='text-pvi-3'>Resource Mangement</div>
                        <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/pvi-5-3.png'} alt="Resource Mangement"/>
                    </Grid>
                    <Grid item xs ={4} sm={4} lg={2}>
                        <div className='text-pvi-3'>Pollution and waste</div>
                        <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/pvi-5-4.png'} alt="Pollution and waste"/>
                    </Grid>
                    <Grid item xs ={4} sm={4} lg={2}>
                        <div className='text-pvi-3'>Product Responsibility</div>
                        <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/pvi-5-5.png'} alt="Product Responsibility"/>
                    </Grid>
                    <Grid item xs ={4} sm={4} lg={2}>
                        <div className='text-pvi-3'>Corporate Ethics</div>
                        <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/pvi-5-6.png'} alt="Corporate Ethics"/>
]                    </Grid>
                </Grid>           
            </div>
            <div className='container' style={{marginTop:300}}>
                <Grid container spacing={3} direction='row' alignment='flex-end' justify='space-between'>
                    <Grid item sm = {12} md = {5}>
                        <div className='text-output'>Learn<br/>Express<br/>and Align</div>
                    </Grid>
                    <Grid item sm={12} md={6} alignment='flexend' style={{marginTop : 100}}>
                        <Grid container spacing={0} direction='row'>
                            <Grid item sm={12} md={3}><div className='text-subtitle-white'>LEARN</div></Grid>
                            <Grid item sm={12} md={9}><div className='text-body' style={{color: 'white', marginTop: 0}}>A ring-shaped interface represents colors that correspond to the value that the portfolio focuses on.<br/><br/>In addition, while traditional investment services only provide financial information, Aline shows ESG information for companies currently investing in.</div></Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <img className="center" style={{marginTop: 70}} src={process.env.PUBLIC_URL + '/assets/aline/learn.png'} alt="app screen and element"/>
            </div>

            <div className='container' style={{marginTop:280}}>
                <Grid container spacing={2} direction='row' alignItems='center' >
                    <Grid container sm={12} md={4} direction='column' alignment='flex-start'>
                        <Grid item ><div className='text-subtitle-white'>EXPRESS</div></Grid>
                        <Grid item ><div className='text-body' style={{color: 'white'}}>A ring-shaped interface represents colors that correspond to the value that the portfolio focuses on.<br/><br/>In addition, while traditional investment services only provide financial information, Aline shows ESG information for companies currently investing in.</div></Grid>
                    </Grid>
                    <Grid item sm={12} md={4}><img className="news" src={process.env.PUBLIC_URL + '/assets/aline/dailynews.gif'} alt="Daily investment news update"/></Grid>
                </Grid>
            </div>

            <div className='container' style={{marginTop:280}} >
                <Grid container spacing={4} direction='row' justify="center" alignItems="center">
                    <Grid item sm = {12} md = {8}>
                        <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/Alarm_Consumption.gif'} alt="alarm and consumption"/>
                    </Grid>
                    <Grid item sm = {12} md = {4}>
                            <div class='text-subtitle-white'>ALIGN</div>
                            <div class='text-body'style={{color : 'white'}}>When you pay with an app card, Aline visualize and demonstrate the value the company that users paid is aiming for.  Aline sends a warning alarm when users spend against their own values.<br/><br/>Aline also analyzes consumption history to show what value users spent on. Based on this, users can change their spending lives.</div>
                    </Grid>
                </Grid>
            </div>
                <div className='container' style={{marginTop:300,  marginBottom : 50}}>
                    <div className='text-phrase-gradient' style={{marginBottom : 30}}>User’s finance will align you, companies, and the society</div>
                    <div className='text-phrase-explanation' style={{marginBottom : 50}}>Aline is the first financial service in Korea which provides personalized finance in accordance with users’ personal values, delivering ESG information in a more user-friendly language. By helping users to maintain their values while they invest and consume, it motivates people to have higher standards for companies in terms of sustainability, and thereby providing market entries and capital to companies with innovative ideas. Aline aims to make virtuous cycle of making our society more sustainable.</div>
                </div>
                <img className="impact" style={{ marginBottom : 100}} src={process.env.PUBLIC_URL + '/assets/aline/impact.png'} alt="impact diagram"/>

        </div>
    </div>);
}

export default Aline;