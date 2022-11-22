import React from 'react'
import './Aline.css';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player/vimeo'
import background from '../img/gradient.png'

function Aline() {




    return (


    <div className="Aline" >

        <div className  = 'container' style={{marginTop:0, paddingTop:40}}>
            <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/master.png'} alt="master of aline"/>
        </div>

        <div className= 'container-shrinked-2' >
            <Grid container spacing={3} direction='row' justify="center" alignItems="flex-start">
                <Grid item xs ={12} sm={6} style={{marginBottom: 30}}>
                    <div className='text-title'>Aline</div>
                    <div className='text-explanation'>ESG Robo-adviser service</div>
                </Grid>
                <Grid item xs ={12} sm={6} style={{marginBottom: 0}}>
                    <div className = 'text-body'style={{marginTop: 0}}>Aline is a Robo-advisor based <u>ESG (Environmental, Social and coporate Governance) financial service focusing on individual’s governing value</u>. In addition to earning profit through investment, users can help changing the world positively by supporting corporates that are in align with their value.</div>
                </Grid>
            </Grid>
        </div>


        <div className='container-shrinked-2' style={{marginTop: 0}}>
            <Grid container spacing={2} direction='row' justify="center" alignItems="flex-start">
                <Grid item xs ={6} sm={3} style={{marginBottom: 30}}>
                    <div className='text-subtitle'>Deliverable</div>
                    <div className='text-body'>Service Design<br/>Mobile application</div>
                </Grid>
                <Grid item xs ={6} sm={3} style={{marginBottom: 30}}>
                    <div className='text-subtitle'>Contribution</div>
                    <div className='text-body'>Team Project (30%)<br/>User Research<br/>System Design<br/>UI Design<br/>Motion Design</div>
                </Grid>
                <Grid item xs ={6} sm={3} style={{marginBottom: 30}}>
                    <div className='text-subtitle'>Award 🏆</div>
                    <div className='text-body'>
                        <a href="https://ifdesign.com/en/winner-ranking/project/aline/310898" target="_blank" rel="noopener noreferrer">iF Gold 2021 - Service Design</a><br/>
                        <a href="https://ifdesign.com/en/winner-ranking/project/aline/312630" target="_blank" rel="noopener noreferrer">iF Winner 2021 - UI Design</a><br/>
                        <a href="https://www.red-dot.org/project/aline-55142" target="_blank" rel="noopener noreferrer">Red Dot 2021 Winner - App</a>
                    </div>
                </Grid>
                <Grid item xs ={6} sm={3} style={{marginBottom: 30}}>
                    <div className='text-subtitle'>Duration</div>
                    <div className='text-body'>4 months (2020.03 - 2020.06)</div>
                </Grid>
            </Grid>
        </div>

        
        <div className='gray-bg' style={{marginTop: 150}}>
                <div className='container-shrinked' style={{marginTop:0, marginBottom:0}}>
                    <div className='text-subtitle'style={{marginBottom : 20, textAlign:'center'}}>Project Overview</div>
                    <div className='text-phrase' style={{lineHeight : 1.3, textAlign:'center', marginBottom : 40}}>How might we support Millennials to invest in what they value and care about?</div>
                    <Grid container columnSpacing={4} style={{ marginBottom :50}}>
                        <Grid item xs={12} sm={6}>
                            <div className='text-body'>This project is a part of the <u>capstone project in my undergrad, sponsored and commissioned by one of the largest investment companies</u>, NH investment & security (NHIS).
                            <br/><br/>One constraint given to this project was to <u>design a service that utilizes personal data for improving user experience</u>, since there was a new enactment allowing the banks and investment companies to use customers’ individual data if they agree (MyData initiative).</div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <div className = 'text-body'>Aline is <u>a mobile app investing money in companies supporting users’ value</u>. It tracks users’ core values through the in-app activities and users’ data, automatically invests money, and manages the portfolio to ensure minimum profit. <br/><br/><u>I conducted user research with 96 respondents and designed user interfaces that addressed the design goals found in the research</u>.</div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        
        <div className='container-shrinked' style={{ marginTop: 150, marginBottom : 60}}>
            <div className='text-subtitle'style={{marginBottom : 10}}>Problem</div>
            <div className='text-phrase' >People need a different motive to invest.</div>
            <div className='text-body'>Increasing numbers of investors want their money to help make the world a better place, and the market for sustainable investment is growing constantly. However, despite thier potential, financial services have been confined to profit-making, delivering financial information only in terms of numbers.</div>
        </div>
        
            <div className ='container' style={{marginTop: 0, paddingTop: 30, marginBottom: 50, maxWidth: 1280}}>
                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowSpacing={8} direction='row' justify="center" alignItems="flex-start" >
                    <Grid item xs ={12} sm={6}>
                        <Grid container direction='row'>
                            <div className='text-problem' style={{ marginBottom : 50, marginRight:5}}>1.</div>
                            <img src={process.env.PUBLIC_URL + '/assets/aline/pro1.png'} width="72" hight="72" alt="icon1"/>
                            <div className='text-problem' style={{marginLeft : 20}}>Growing number of investors want their<br/>money to help making the world a better place</div>
                        </Grid>
                        <Grid container direction='row' style={{marginLeft : 90, paddingRight: 90, marginTop:30}}>
                            <Grid item xs ={6} >
                                <Grid container direction='column' alignItems="center" justify="center" style={{paddingRight : 24}}>
                                    <img  src={process.env.PUBLIC_URL + '/assets/aline/pro1-1.png'} width="178" hight="120" alt="problem 2"/>
                                    <div className='text-problem-sub' style={{marginTop : 24}}>85% of individual investors are interested in sustainable investing.</div>
                                </Grid>
                            </Grid>
                            <Grid item xs ={6} >
                                <Grid container direction='column' alignItems="center" justify="center" style={{paddingRight : 24}}>
                                    <img  src={process.env.PUBLIC_URL + '/assets/aline/pro1-2.png'} width="170" hight="107" alt="problem 2"/>
                                    <div className='text-problem-sub' style={{marginTop : 24, paddingBotttom: 20}}>In particular, 95% of millennials were interested in sustainable investing.</div>
                                </Grid>
                            </Grid>
                        </Grid>   
                    </Grid>

                    <Grid item xs ={12} sm={6}>
                        <Grid container direction='row'>
                            <div className='text-problem' style={{marginBottom : 50, marginRight:5}}>2.</div>
                            <img src={process.env.PUBLIC_URL + '/assets/aline/pro2.png'} width="72" hight="72" alt="icon1"/>
                            <div className='text-problem' style={{marginLeft : 20}}>Sustainable investing rises globally<br/>with growing awareness</div>
                        </Grid>
                        <Grid container direction='row' style={{marginLeft : 90, paddingRight: 90, marginTop:30}}>
                            <Grid item xs ={6} >
                                <Grid container direction='column' alignItems="center" justify="center" style={{paddingRight : 24}}>
                                    <img  src={process.env.PUBLIC_URL + '/assets/aline/pro2-1.png'} width="170" hight="120" alt="problem 2"/>
                                    <div className='text-problem-sub' style={{marginTop : 24}}>Global sustainable investing assets surged to $30 trillion in 2018.</div>
                                </Grid>
                            </Grid>
                            <Grid item xs ={6} >
                                <Grid container direction='column' alignItems="center" justify="center" style={{paddingRight : 24}}>
                                    <img  src={process.env.PUBLIC_URL + '/assets/aline/pro2-2.png'} width="216" hight="120" alt="problem 2"/>
                                    <div className='text-problem-sub' style={{marginTop : 24}}>Covid 19 is accelerating ESG investing with increasing inflows and high returns.</div>
                                </Grid>
                            </Grid>
                        </Grid>   
                    </Grid>

                    <Grid item xs ={12} sm={6}>
                        <Grid container direction='row'>
                            <div className='text-problem' style={{marginBottom : 50, marginRight:5}}>3.</div>
                            <img src={process.env.PUBLIC_URL + '/assets/aline/pro3.png'} width="72" hight="72" alt="icon1"/>
                            <div className='text-problem' style={{marginLeft : 20}}>Investors want to invest in what they value</div>
                        </Grid>
                        <Grid container direction='row' style={{marginLeft : 90, paddingRight: 90, marginTop:30}}>
                            
                                <Grid container direction='column' alignItems="center" justify="center" style={{paddingRight : 24}}>
                                    <img  src={process.env.PUBLIC_URL + '/assets/aline/pro3-1.png'} width="216" hight="120" alt="problem 2"/>
                                    <div className='text-problem-sub' style={{marginTop : 24}}>People are more likely to adopt sustainable investment if they can tailor the investment to their own impact interest.</div>
                                </Grid>
                            
        
                        </Grid>   
                    </Grid>

                    <Grid item xs ={12} sm={6}>
                        <Grid container direction='row'>
                            <div className='text-problem' style={{marginBottom : 50, marginRight:5}}>4.</div>
                            <img src={process.env.PUBLIC_URL + '/assets/aline/pro4.png'} width="72" hight="72" alt="icon1"/>
                            <div className='text-problem' style={{marginLeft : 20}}>Investors want information more than just numbers</div>
                        </Grid>
                        <Grid container direction='row' style={{marginLeft : 90, paddingRight: 90, marginTop:30}}>
                            <Grid item xs ={6} >
                                <Grid container direction='column' alignItems="center" justify="center" style={{paddingRight : 24}}>
                                    <img  src={process.env.PUBLIC_URL + '/assets/aline/pro4-1.png'} width="170" hight="120" alt="problem 2"/>
                                    <div className='text-problem-sub' style={{marginTop : 24}}>87% of millennials considered a company’s ESG track record an important consideration in their investment decision making.</div>
                                </Grid>
                            </Grid>
                            <Grid item xs ={6} >
                                <Grid container direction='column' alignItems="center" justify="center" style={{paddingRight : 24}}>
                                    <img  src={process.env.PUBLIC_URL + '/assets/aline/pro4-2.png'} width="170" hight="120" alt="problem 2"/>
                                    <div className='text-problem-sub' style={{marginTop : 24}}>Investors also showed a atrong desire to measure social and environmental impact alongside financial results.</div>
                                </Grid>
                            </Grid>
                        </Grid>   
                    </Grid>
                    
                </Grid>
            </div>
        
        <div className='container-shrinked' style={{marginTop: 200,  marginBottom : 80}}>
            <div className='text-subtitle' style={{marginBottom : 10}}> Research</div>
            <div className='text-phrase' style={{lineHeight : 1.3}} >Millennials want to make an impact in align with their governing values as they invest.</div>
            <div className='text-body' >We surveyed 96 Millennials to learn more about their opinions and general interests in sustainable growth and investing. Additionally, to identify the problem and build the persona of our target user, we conducted a focus group interview (FGI) with a group of 5 Millennials.</div>
        </div>
        <div className='container' style={{marginTop: 80, maxWidth: 1440}}>
            <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/research.png'} alt="research"/>
        </div>

        <div className='black-bg' style={{marginTop: 200, paddingTop: 50, paddingBottom: 50}}>
            <div className='container-shrinked' style={{marginTop:0,  marginBottom : 50}}>
                <div className='text-subtitle-white'style={{marginBottom : 10}}>Design Goals</div>
                <div className='text-phrase-white-2' style={{lineHeight : 1.3}}>Maintain profitability, promote users’ value, and keep users updated with the investment.</div>
                <div className='text-body' style={{color: 'white'}}>Based on the painpoints found during the user research, we identified three design goals that should be addressed in our ultimate solution.</div>
            </div>
            <div className='container-shrinked' style={{marginTop:0,  marginBottom : 0}}>
                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowSpacing={8} direction='row' justify="center" alignItems="flex-start">
                    <Grid item xs={12} sm={4}>
                        <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/goal-1.png'} style={{marginBottom: 20}} alt="goal 1"/>
                        <div className='text-phrase-white-3'style={{color: 'white'}}>1  |  Value-oriented Investment</div>    
                        <div className='text-body-2'style={{color: 'white', marginTop: 15}}>Millennials actively make a move for values that they care about. Therefore, the new investment service should help them to easily form a portfolio composed of companies sharing users’ values, if they can expect comparable investment results.</div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/goal-2.png'} style={{marginBottom: 20}} alt="goal 2"/>
                        <div className='text-phrase-white-3'style={{color: 'white'}}>2  |  Remain Profitable</div>
                        <div className='text-body-2' style={{color: 'white', marginTop: 15}}>Millennials do not risk financial losses for their value when investing. The new investment service should be able to earn higher but stable returns than low bank interest.</div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/goal-3.png'} style={{marginBottom: 20}} alt="goal 3"/>
                        <div className='text-phrase-white-3'style={{color: 'white'}}>3  |  Keep Users Updated</div>
                        <div className='text-body-2' style={{color: 'white', marginTop: 15}}>The new investment service should regularly offer information on value investing as well as fundamental investing knowledge for Millennials who find it difficult to devote time to studying investment.</div>
                    </Grid>
                </Grid>
            </div>
        </div>

        <div className='container-shrinked' style={{ marginTop: 200}}>
            <div className='text-subtitle'style={{marginBottom : 10}}>Solution Brainstorming</div>
            <div className='text-phrase' style={{lineHeight : 1.35}}  >Brainstorm and compare potential solutions based on the effort and impact on users.</div>
            <div className='text-body' style={{marginBottom: 30}}>We brainstormed potential approaches to meet the design goals. Then, bearing in mind our user persona and pain points, we evaluated them by the amount of work we should invest in developing features and their impact on users.</div>
            <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/brainstorming.png'} alt="feature prioritization chart"/>
        </div>

        <div className='container-shrinked' style={{ marginTop: 200}}>
            <div className='text-subtitle'style={{marginBottom : 10}}>User Flow</div>
            <div className='text-phrase' style={{lineHeight : 1.35}}>Less steps to get the user to their destination immediately</div>
            <div className='text-body' style={{marginBottom: 50}}>We mapped out key features in user flow in a way that user can get to their needs within a least amount of steps.  To assist them quickly discover the relevant information, detailed information such as portfolio information and consumption logs are displayed one depth below.</div>
            <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/flow-chart.png'} alt="flow chart"/>
        </div>

        <div className='container-shrinked' style={{marginTop: 200, marginBottom: 50}}>
            <div className='text-subtitle' style={{marginBottom: 10}}>Service Blueprint</div>
            <div className='text-phrase' style={{lineHeight : 1.35}} >Considering resources and the service's scope to ensure the feasibility</div>
            <div className='text-body'>To assess the scale of the service and to resource to support it, the entire user journey and the relationship between different service components are visualized as a service blueprint. By doing this, we were able to ensure the feasibility again.</div>
        </div>
        <div className='container' style={{marginTop: 0, maxWidth: 1300}}>
            <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/blueprint.png'} alt="blueprint"/>
        </div>

        
        <div className='container-shrinked' style={{marginTop: 200,  marginBottom : 0}}>
            <div className='text-subtitle'style={{marginBottom : 10}} >Wire Frame</div>
            <div className='text-phrase' style={{lineHeight : 1.3}} >Visualizing summarized financial information for intuitive interpretation</div>
            <div className='text-body'>To avoid the impression that financial information is hard to understand, symbols containing summarized information were placed at the center of each tap. Detailed information is visualized on the scrollable bottom sheet.</div>
        </div>

        <div className='container' style={{marginTop: 10,marginBottom : 80, maxWidth: 1000}}>
            <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/wire.png'} style={{marginTop : 70}} alt="wire-frame"/>
        </div>
       

        <div className='black-bg' style={{marginTop: 200}}>

            <div className='container-shrinked' style={{marginTop:100, marginBottom : 0}}>
                <div className='text-subtitle-white'style={{marginBottom: 10}}>Design Solution: Personal Value Index (PVI)</div>
                <div className='text-phrase' style={{ textAlign: 'left', lineHeight: 1.3, color:'white'}}>Personal ESG value Index translates users' values into finance.</div>
                <div className='text-body' style={{color : 'white', marginBottom: 60}}>The Personal Value Index (PVI) was created based on the ESG evaluation of MSCI, a reliable institution that issues the global capital index quaterly. Based on this index, the most suitable investment company for users is selected to help users realize thier vision through investment and consumption. Aline provides users with ESG information in user-friendly language.</div>
            </div>
            <div className='container' style={{marginTop: 0, maxWidth: 1400}}>
                <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/pvi.png'} alt="pvi"/>
                <Grid container spacing={2.5} direction='row' justifyContent="center" alignItems="flex-start">
                    <Grid item xs ={2}>
                        <div className='text-body-2' style={{color : 'white'}}>Through an initial survey and regular value updates, Aline collects data of the user’s personal value.</div>
                    </Grid>
                    <Grid item xs ={2}>
                        <div className='text-body-2' style={{color : 'white'}}>Key words of real life issues are proposed to find out user’s personal values. The representing words are phrased as wasy as possible for people to understand.</div>
                    </Grid>
                    <Grid item xs ={2}>
                        <div className='text-body-2' style={{color : 'white'}}>MSCI ESG 37 Key Issues are utilized to connect the real life issues into ESG factors that have potentials of effecting financial performance of companies.</div>
                    </Grid>
                    <Grid item xs ={2}>
                        <div className='text-body-2' style={{color : 'white'}}>The issues are then further categories into 6 core values. According to these 6 categories, users’ personal values are quantified.</div>
                    </Grid>
                    <Grid item xs ={2}>
                        <div className='text-body-2' style={{color : 'white'}}>The quatified personal values are represented as Personal ESG Value Index (PVI).</div>
                    </Grid>
                    <Grid item xs ={2}>
                        <div className='text-body-2' style={{color : 'white'}}>PVI is used as an additional standard to personalize both investment and consumption.</div>
                    </Grid>
                </Grid>
            </div>


            <div className='background' style={{ backgroundImage: `url(${background})`, marginTop:300}}>
                <div className='container' style={{marginTop:0,  marginBottom : 70}}>
                    <div className='text-subtitle-white-2'style={{marginBottom: 3}}>FINAL SOLUTION</div>
                    <div className='text-phrase-white' style={{marginBottom : 30}}>Align investment and consumption with the user's value</div>
                    <div className='text-body' style={{ marginTop:15, marginBottom : 75, textAlign: 'center', paddingBottom: 20, color: 'white'}}>Beyond profit-making, Aline delivers value and the impact of money. By gathering the data from the initial survey and regular value updates, the index is weighted according to the user’s value. Based on index, the investment portfolio will be adjusted and consumption againtst the value will be alarmed.</div>
                </div>
            </div>
            <div className='container'>
                <Grid container spacing={3} direction='row' justifyContent="center" alignItems="flex-start">
                <Grid item xs ={5} sm={4} lg={2}>
                    <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/journey1.png'} alt="user journey 1"/>
                    <div className='text-journey'>Start Aline</div>
                </Grid>
                <Grid item xs ={5} sm={4} lg={2}>
                    <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/journey2.png'} alt="user journey 2"/>
                    <div className='text-journey'>Set Personal values</div>
                </Grid>
                <Grid item xs ={5} sm={4} lg={2}>
                    <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/journey3.png'} alt="user journey 3"/>
                    <div className='text-journey'>Start Investment based on personal values</div>
                </Grid>
                <Grid item xs ={5} sm={4} lg={2}>
                    <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/journey4.png'} alt="user journey 4"/>
                    <div className='text-journey'>Check the financial and social impact</div>
                </Grid>
                <Grid item xs ={5} sm={4} lg={2}>
                    <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/journey5.png'} alt="user journey 5"/>
                    <div className='text-journey'>Update the portfolio through value update</div>
                </Grid>
                <Grid item xs ={5} sm={4} lg={2}>
                    <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/journey6.png'} alt="user journey 6"/>
                    <div className='text-journey'>Check company’s value during payment</div>
                </Grid>
                </Grid>
            </div>


            <div className='container' style={{marginTop:300}}>
                <Grid container spacing={3} direction='row' alignment='flex-end' justify='space-between'>
                    <Grid item sm = {12} md = {5}>
                        <div className='text-output'>Learn<br/>Express<br/>and Align</div>
                    </Grid>
                    <Grid item sm={12} md={6} alignment='flexend' style={{marginTop : 100}}>
                        <Grid container spacing={0} direction='row'>
                            <Grid item sm={12} md={3}><div className='text-subtitle-white' style={{marginBottom: 20}}>LEARN</div></Grid>
                            <Grid item sm={12} md={9}><div className='text-body' style={{color: 'white', marginTop: 0}}>A ring-shaped interface represents colors that correspond to the value that the portfolio focuses on.<br/><br/>In addition, while traditional investment services only provide financial information, Aline shows ESG information for companies currently investing in.</div></Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <img className="center" style={{marginTop: 70}} src={process.env.PUBLIC_URL + '/assets/aline/learn.png'} alt="app screen and element"/>
            </div>

            <div className='container' style={{marginTop:200}}>
                <Grid container spacing={4} direction='row' alignItems='center' display="flex" justifyContent="center">
                    <Grid container sm={12} md={4} direction='column' alignment='flex-start' >
                        <Grid item ><div className='text-subtitle-white'>EXPRESS</div></Grid>
                        <Grid item ><div className='text-body' style={{color: 'white'}}>Every day, Aline asks users for their thoughts on investing in a certain firm while also providing the company's  ESG data and most recent news.<br/><br/> The user's response aids in better matching the user's investment portfolio to their values.</div></Grid>
                    </Grid>
                    <Grid item sm={12} md={5}><img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/dailynews.gif'} alt="Daily investment news update"/></Grid>
                </Grid>
            </div>

            <div className='container' style={{marginTop:200}} >
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

            <div className='container' style={{marginTop:250,  marginBottom : 50}}>
                <div className='text-phrase-gradient' style={{marginBottom : 30}}>Aline promotes virtuous cycle of <br/> making our society more sustainable</div>
                <div className='text-body' style={{marginBottom : 50, textAlign: 'center', color: 'white'}}>Aline is a financial service which provides personalized finance in accordance with users’ personal values, delivering ESG information in a more user-friendly language. By helping users to maintain their values while they invest and consume, it motivates people to have higher standards for companies in terms of sustainability, and thereby providing market entries and capital to companies with innovative ideas.</div>
            </div>
            <img className="impact" style={{ marginBottom : 250}} src={process.env.PUBLIC_URL + '/assets/aline/impact.png'} alt="impact diagram"/>

            <div className='containter' >
                <div className='player-wrapper' style={{marginTop:150}}>
                    <ReactPlayer className='react-player' url='https://vimeo.com/539719839' playing= {false} width='100%' height='100%'/>
                </div>    
            </div>

            <div className='container-shrinked' style={{marginTop:100}}>
                <div className='text-subtitle-white'style={{marginBottom: 10}}>Implication</div>
                <div className='text-phrase' style={{ textAlign: 'left', lineHeight: 1.3, color:'white'}}>NHIS starts promoting businesses where sustainability and profitability are compatible.</div>
                <Grid container spacing={2.5} style={{marginTop:50}}>
                    <Grid item sm={12} md={6}>
                        <img className="master-image" src={process.env.PUBLIC_URL + '/assets/aline/implication.png'} alt="implication news"/>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <div className='text-body' style={{color: 'white'}}>This project led to NH Investment & Security (NHIS) beginning to incorporate ESG investment into their products.<br/>
                            <ul>
                                <li>NHIS <u>chose the MSCI ESG benchmark index as its primary ESG index </u> to analyze its funds and exchange-traded funds, much like how aline does.</li>
                                <li>Starting in 2020, NHIS began <u>including ESG information in all corporate analysis reports</u>.</li>
                                <li>NHIS started to <u>create its own ESG index and more ESG investing products</u>.</li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div className='container-shrinked' style={{marginTop:200, marginBottom:250}}>
                <div className='text-subtitle-white'style={{marginBottom: 50}}>Reflection</div>
                <div className='text-body' style={{color: 'white'}}>
                    <b>I learned</b>
                    <ul>
                        <li>that <u>how valuable good teamwork is.</u> We could develop a design solution considering diverse perspectives with teammates with different strengths and thoughts. </li>
                        <li>that <u>shorter frequent meetings were very effective in group projects.</u> t was the very first design project during the pandemic. Instead of having a long exhausting meeting as we meet in person, we set up an upcoming virtual meeting shortly after when we were stuck. It allowed us to refresh our minds and have time to reflect individually on our design process.</li>
                    </ul>
                    <br/>
                    <b>I would change</b>
                    <ul>
                        <li>that <u>I left some time to do user testing.</u> Although we received great feedback and comments from NHIS and juries of the iF / Red dot design award, testing the solution with the target user would help us evaluate the design options and their trade-offs during the process.</li>
                    </ul>
                </div>
            </div>

            <div className='copy-project'>Copyright 2022. Sooyeon Park all rights reserved.</div>
        </div>
    </div>);
}

export default Aline;