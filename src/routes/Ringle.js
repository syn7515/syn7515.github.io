import React from 'react'
import './Ringle.css';
import Grid from '@material-ui/core/Grid';
import Protect from 'react-app-protect'

function Ringle() {



    return (
        
        <div className='Ringle'>

            <div className  = 'container' style={{marginTop:0, paddingTop:40}}>
                <img className="master-image" src={process.env.PUBLIC_URL + '/assets/ringle/master.png'} alt="master of ringle"/>
            </div>
            
            <div className= 'container-shrinked-2' >
                <Grid container spacing={3} direction='row' justify="center" alignItems="flex-start">
                    <Grid item xs ={12} sm={6} style={{marginBottom: 30}}>
                        <div className='text-title'>Ringle</div>
                        <div className='text-explanation'>UX Research Intenship</div>
                    </Grid>
                    <Grid item xs ={12} sm={6} style={{marginBottom: 0}}>
                        <div className = 'text-body'style={{marginTop: 0}}>Ringle is a tutoring platform connecting college students in English-speaking countries to professionals who wish to develop their English-speaking skills. During my 3-month summer internship in 2022, <mark className='highlight'>I conducted UX research to establish a data-driven persona and journey map of current users.</mark></div>
                    </Grid>
                </Grid>
            </div>

            <div className='container-shrinked-2' stylenpm={{marginTop: 0}}>
                <Grid container spacing={2} direction='row' justify="center" alignItems="flex-start">
                    <Grid item xs ={6} sm={4} style={{marginBottom: 30}}>
                        <div className='text-subtitle'>Deliverable</div>
                        <div className='text-body'>Data-driven Persona<br/>Data-driven Journey map</div>
                    </Grid>
                    <Grid item xs ={6} sm={4} style={{marginBottom: 30}}>
                        <div className='text-subtitle'>My Contribution</div>
                        <div className='text-body'>Stakeholder Interview<br/>Semi-structured Interview<br/>Thematic Analysis</div>
                    </Grid>
                    <Grid item xs ={6} sm={4} style={{marginBottom: 30}}>
                        <div className='text-subtitle'>Duration</div>
                        <div className='text-body'>3 months (04.2022 - 07.2022)</div>
                    </Grid>
                </Grid>
            </div>

            <div className='container-shrinked' style={{ marginTop: 200, marginBottom : 60}}>
                <div className='text-subtitle-ringle'style={{marginBottom : 20}}>Background</div>
                <Grid container spacing={3} direction='row' justify="center" alignItems="flex-start" >
                    <Grid item xs ={12} sm={6} style={{marginBottom: 30}}>
                        <img className="master-image" src={process.env.PUBLIC_URL + '/assets/ringle/background.png'} alt="master of ringle"/>
                    </Grid>
                    <Grid item xs ={12} sm={6} style={{marginBottom: 30}}>
                        <div className = 'text-body'style={{marginTop: 0}}>Ringle is a startup with 70 workers that is rapidly expanding. For the past 7 years, the business has concentrated on improving its cash flow and core product.<br/><br/>Since the business has stabilized, <mark className='highlight'>Ringle team is recently shifting its focus to enhancing UX and marketing with quantitative and qualitative data.</mark></div>
                    </Grid>
                </Grid>
            </div>

            <div className='black-purp' style={{marginTop: 150}}>
                <div className='container-shrinked' style={{marginTop:0, marginBottom:0}}>
                    <div className='text-subtitle-ringle'style={{marginBottom : 20, color:'white', textAlign:'center'}}>Main Project</div>
                    <div className='text-phrase-ringle'style={{marginBottom : 40, color:'white', textAlign:'center'}}>Finding behavioral patterns shared among customers<br/>for futher product development</div>
                    <div className = 'text-body'style={{marginTop: 0, marginBottom :0, color:'white'}}>My role in the UX design team was to find a behavioral pattern that could be generalized and build a persona and journey map that UX design and marketing team could refer to. Since the Ringle team had just started implementing web analytics tools, I used qualitative methods (semi-structured interview) to make potential hypotheses and validated them with quantitative data.</div>
                </div>
            </div>

            <div className='container-shrinked' style={{ marginTop: 150}}>
                <div className='text-subtitle-ringle'style={{marginBottom : 15}}>Process</div>
                <div className='text-phrase-ringle'style={{marginBottom : 60}}>Used a mixed method to validate and generalize research insights.</div>
                <img className="master-image" src={process.env.PUBLIC_URL + '/assets/ringle/process.png'} alt="master of ringle"/>
                
                <Grid container spacing={3} direction='row' justify="center" alignItems="flex-start" style={{marginTop: 20}}>
                    <Grid item xs ={12} sm={6}>
                        <div className="text-body">When I was assigned this project, <mark className='highlight'>I had the chance to plan and carry out the research from the beginning.</mark> I employed mixed-method approach to ensure the validity of the research findings.<br/><br/>I recruited a college from each team to speak with in order to conduct <mark className='highlight'>stakeholder interviews</mark> and fast gain a broad understanding of Ringle's customer base. I used the <mark className='highlight'>outsourced marketing report</mark>  the company had commissioned a month earlier to obtain the client demographic information instead of doing extra surveys as I originally planned.</div>    
                    </Grid>
                    <Grid item xs ={12} sm={6} >
                        <div className="text-body">Based on the knowledge I got from stakeholder interviews  and marketing report, I <mark className='highlight'>brainstormed a number of hypothesis</mark> on customer behavioral patterns. Then, I conducted <mark className='highlight'>in-depth interviews </mark>with 11 participants to get the  qualitative data on the Ringle product usage. <br/><br/>I adopted <mark className='highlight'>thematic analysis approach</mark> to analyze 15-hour long interview data with the help of UX team colleagues. User behavioral patterns identified by the analysis were <mark className='highlight'>validated by collaborating with data scientists and consolidated as a persona and user journey map.</mark></div>    
                    </Grid>
                </Grid>
                
            </div>

            
            {/*<Protect blur='true' boxTitle='Request password to see the detail' sha512='EE26B0DD4AF7E749AA1A8EE3C10AE9923F618980772E473F8819A5D4940E0DB27AC185F8A0E1D5F84F88BC887FD67B143732C304CC5FA9AD8E6F57F50028A8FF' 
                styles={{
                    input: {  backgroundColor: 'hsla(0,0%,56.5%,.075)', borderColor: '#e6e6e6', height: '2.75em', appearance: 'none', borderRadius: '6px', border: '1px', display: 'block', outline: '0', padding: '0 1em',textDecoration: 'none' ,width: '92%' },
                    header: { fontSize: '18px', backgroundColor: '#000', color: '#fff', padding:'10px'},
                button: { padding: '10px', backgroundColor: 'transparent', color: '#828282!important', boxShadow: 'inset 0 0 0 2px #e6e6e6', transition: 'background-color .2s ease-in-out,color .2s ease-in-out', borderRadius:'6px', border: '0'}}}>*/}

<div className='container-shrinked' style={{ marginTop: 180}}>
                    <div className='text-subtitle-ringle'style={{marginBottom : 15}}>1. Stakeholder Interview</div>
                    <div className='text-phrase-ringle'style={{marginBottom : 30}}>Interviewed Ringle team leaders for a rough understanding on the customer base.</div>
                    <Grid container spacing={3} direction='row' justify="center" alignItems="flex-start" style={{marginBottom: 30}}>
                        <Grid item xs ={12} sm={6}>
                            <div className="text-body">To acquire a general knowledge of the customer base, I decided to learn from members of certain Ringle teams that communicate directly with users. Therefore, <mark className='highlight'>I conducted stakeholder interviews with these team leaders and managers to learn how they classify their product's customer base and why they do so.</mark></div>    
                        </Grid>
                        <Grid item xs ={12} sm={6} >
                            <div className="text-body">Additionally, I asked if they have any questions they would like to ask to customers regarding their product so that I can refer them when I create the interview protocol. The persona draft created through stakeholder interviews is shown below.</div>    
                        </Grid>
                    </Grid>
                    <img className="master-image" src={process.env.PUBLIC_URL + '/assets/ringle/persona-draft.png'} alt="master of ringle"/>
                </div>

                <div className='container-shrinked' style={{ marginTop: 180}}>
                    <div className='text-subtitle-ringle'style={{marginBottom : 15}}>2. Outsourced market researh data analysis</div>
                    <div className='text-phrase-ringle'style={{marginBottom : 30}}>Analyzed outsourced market research data to validate the persona draft.</div>
                    <div className="text-body" style={{marginBottom : 30}}>The company obtained the analysis report and raw data from an outsourced market research that surveyed 1000 target consumers about a variety of topics, including their demographics, motivation for speaking English, and brand awareness. <mark className='highlight'>In order to determine whether the persona draft from the stakeholder interviews is relevant enough to move forward, I examined the raw response data of the market survey.</mark></div>    
                    <Grid container spacing={3} direction='row' justify="center" alignItems="center">
                        <Grid item xs ={12} sm={6}>
                            <img className="master-image" src={process.env.PUBLIC_URL + '/assets/ringle/report-1.png'} alt="report data 1"/>
                        </Grid>
                        <Grid item xs ={12} sm={6} >
                            <div className="text-body">It turns out that compared to non Ringle user Ringle user has higher willingness to pursue global career opportunity and study abroad.</div>    
                        </Grid>
                        <Grid item xs ={12} sm={6} >
                            <div className="text-body">Combining demographic data and their motivation, it turns out that 28–35 aged women typically study English to improve their career opportunities, whereas 20–27 aged men study English to pursue their education abroad.</div>    
                        </Grid>
                        <Grid item xs ={12} sm={6}>
                            <img className="master-image" src={process.env.PUBLIC_URL + '/assets/ringle/report-2.png'} alt="report data 2"/>
                        </Grid>
                    </Grid>
                </div>


                <div className='container-shrinked' style={{ marginTop: 180}}>
                    <div className='text-subtitle-ringle'style={{marginBottom : 15}}>3. In-depth Interview Preparation</div>
                    <div className='text-phrase-ringle'style={{marginBottom : 36}}>Iterated Interview protocols through pretest interviews.</div>
                    <div className="text-body" style={{marginBottom : 50}}>To gain a better understanding of customer behavior, I formulated research questions and created interview questions to address them. <mark className='highlight'>By practicing the interview protocol with my colleagues, I refined my questions and improved my time management skills.</mark> This allowed me to develop a more effective interview process.</div>
                    <img className="master-image" src={process.env.PUBLIC_URL + '/assets/ringle/prep.png'} alt="interview questions"/>
                </div>


                <div className='container-shrinked' style={{ marginTop: 180}}>
                    <div className='text-subtitle-ringle'style={{marginBottom : 15}}>4. Conducting Interview - Welcome Survey</div>
                    <div className='text-phrase-ringle'style={{marginBottom : 36}}>The welcome survey helped interviewers manage time more efficiently.</div>
                    <div className="text-body" style={{marginBottom : 30}}>After conducting pretest interviews, <mark className='highlight'>I realized that I could save time by starting the interview with a brief survey that address simple yes/no questions.</mark> This not only allowed me to spend more time on the important questions, but it also helped the customers to become more comfortable in the unfamiliar environment.</div>
                    <img className="master-image" src={process.env.PUBLIC_URL + '/assets/ringle/welcome.png'} alt="interview questions"/>
                </div>
            
            {/*</Protect>*/}
            



            <div className='container-shrinked' style={{ marginTop: 150}}>
                <div className='text-subtitle-ringle'style={{marginBottom : 15}}>Takeaway : Interview</div>
                <div className='text-phrase-ringle'style={{marginBottom : 20}}>11 Interview tips learned thorugh interveiws</div>
                <div className = 'text-body'style={{marginTop: 0, marginBottom :80}}>Since this was the company's first-ever UX research project, I recorded all the materials and procedures for future reference. In addition, <mark className='highlight'>based on the errors colleagues had made when assisting interviews, I had compiled all the semi-structured interview tips for them.</mark> The following list of 11 recommendations is taken from my final internship report.</div>
                <Grid container direction='column' spacing={{xs:3, sm:4, md: 6}}>
                    <Grid item style={{display:'flex', flexDirection:'row', alignItems:'flex-start'}}>
                        <img src={process.env.PUBLIC_URL + '/assets/ringle/1.png'} width="32" hight="32" alt="icon1"  />
                        <div>
                            <div className='text-tips'  style={{marginLeft:12}}>Always ask 'why' about actions and thoughts of customers.</div>
                            <div className='text-body' style={{marginLeft:12, marginTop: 10}}>This is the essense of the in-depth interview. If we become curious about their action, we can ask meaningful follow-up questions leading to insightful answers.</div>
                        </div>
                    </Grid> 
                    <Grid item style={{display:'flex', flexDirection:'row', alignItems:'flex-start'}}>   
                        <img src={process.env.PUBLIC_URL + '/assets/ringle/2.png'} width="32" hight="32" alt="icon1"  />
                        <div>
                            <div className='text-tips'  style={{marginLeft:12}}>Prepare a simple welcome survey.</div>
                            <div className='text-body' style={{marginLeft:12, marginTop: 10}}>When we need short yes/no answers to move on to the follow-up question, we should put them in a welcome survey so that the interviewers may complete them when they arrive. This will help us make the most of the interview time. In addition it also offers the interviewees some time to become used to the new situation so they can participate in the interview with greater openness.</div>
                        </div>
                    </Grid>   
                    <Grid item style={{display:'flex', flexDirection:'row', alignItems:'flex-start'}}>   
                        <img src={process.env.PUBLIC_URL + '/assets/ringle/3.png'} width="32" hight="32" alt="icon1"  />
                        <div>
                            <div className='text-tips'  style={{marginLeft:12}}>If the customer talk too much, don't break into but summarize their answer after hearing them all.</div>
                            <div className='text-body' style={{marginLeft:12, marginTop: 10}}>When interviewees hear the summarized version of their answers, they realize that they don't need to talk much, so they begin answering the subsequent questions succinctly.</div>
                        </div>
                    </Grid>  
                    <Grid item style={{display:'flex', flexDirection:'row', alignItems:'flex-start'}}>   
                        <img src={process.env.PUBLIC_URL + '/assets/ringle/4.png'} width="32" hight="32" alt="icon1"  />
                        <div>
                            <div className='text-tips'  style={{marginLeft:12}}>If the interviewer can't focus on the interview, show your concern on interviewees.</div>
                            <div className='text-body' style={{marginLeft:12, marginTop: 10}}>When we show that we care about their situation, they will appreciate it and start to focus on the interview.</div>
                        </div>
                    </Grid>  
                    <Grid item style={{display:'flex', flexDirection:'row', alignItems:'flex-start'}}>   
                        <img src={process.env.PUBLIC_URL + '/assets/ringle/5.png'} width="32" hight="32" alt="icon1"  />
                        <div>
                            <div className='text-tips'  style={{marginLeft:12}}>Ask additional details even if interviewees answered some of them in the previous questions.</div>
                            <div className='text-body' style={{marginLeft:12, marginTop: 10}}>If we ask a question in a form of “You just mentioned 000, what is like about 000”, the interviewer can give an impression that we are listening to them, allowing them to have a more open attitude and give insightful answers.</div>
                        </div>
                    </Grid>  
                    <Grid item style={{display:'flex', flexDirection:'row', alignItems:'flex-start'}}>   
                        <img src={process.env.PUBLIC_URL + '/assets/ringle/6.png'} width="32" hight="32" alt="icon1"  />
                        <div>
                            <div className='text-tips'  style={{marginLeft:12}}>Do not defend the product or service.</div>
                            <div className='text-body' style={{marginLeft:12, marginTop: 10}}>When interviewees say that they wish we develop a function that already exists, it's better to acknowledge that the function is not noticable than to explain that it already exists. A defensive attitude prevents the interviewee from being honest.</div>
                        </div>
                    </Grid>
                    <Grid item style={{display:'flex', flexDirection:'row', alignItems:'flex-start'}}>   
                        <img src={process.env.PUBLIC_URL + '/assets/ringle/7.png'} width="32" hight="32" alt="icon1"  />
                        <div>
                            <div className='text-tips'  style={{marginLeft:12}}>Listen carefully, but refrain from nodding too much.</div>
                            <div className='text-body' style={{marginLeft:12, marginTop: 10}}>Excessive response prevents the interviewer from focusing on the interview.</div>
                        </div>
                    </Grid>  
                    <Grid item style={{display:'flex', flexDirection:'row', alignItems:'flex-start'}}>   
                        <img src={process.env.PUBLIC_URL + '/assets/ringle/8.png'} width="32" hight="32" alt="icon1"  />
                        <div>
                            <div className='text-tips'  style={{marginLeft:12}}>Continue the context of the conversation instead of relying solely on the interview protocol.</div>
                            <div className='text-body' style={{marginLeft:12, marginTop: 10}}>You must include a checklist in the interview protocol to continue the context and cover all of the questions we want to ask.</div>
                        </div>
                    </Grid>  
                    <Grid item style={{display:'flex', flexDirection:'row', alignItems:'flex-start'}}>   
                        <img src={process.env.PUBLIC_URL + '/assets/ringle/9.png'} width="32" hight="32" alt="icon1"  />
                        <div>
                            <div className='text-tips'  style={{marginLeft:12}}>Remind yourself of the research purpose whenever you feel lost during the interview.</div>
                            <div className='text-body' style={{marginLeft:12, marginTop: 10}}>If we write down the purpose of the interview next to your laptop with a sticky note, it will help us recall the purpose of the interview, and therefore we can ask meaningful follow-up questions.</div>
                        </div>
                    </Grid>  
                    <Grid item style={{display:'flex', flexDirection:'row', alignItems:'flex-start'}}>   
                        <img src={process.env.PUBLIC_URL + '/assets/ringle/10.png'} width="32" hight="32" alt="icon1"  />
                        <div>
                            <div className='text-tips'  style={{marginLeft:12}}>Be observer rather than asking for recommendation.</div>
                            <div className='text-body' style={{marginLeft:12, marginTop: 10}}>Answers to situations they haven't experienced mean nothing. No one really knows if they will behave in the same way in the future (opinions on similar experiences in the past would be more helpful).</div>
                        </div>
                    </Grid>  
                    <Grid item style={{display:'flex', flexDirection:'row', alignItems:'flex-start'}}>   
                        <img src={process.env.PUBLIC_URL + '/assets/ringle/11.png'} width="32" hight="32" alt="icon1"  />
                        <div>
                            <div className='text-tips'  style={{marginLeft:12}}>Take good care of your condition and schedule an interview with sufficient time intervals.</div>
                            <div className='text-body' style={{marginLeft:12, marginTop: 10}}>Scheduling up to two interviews per day is moderate. Considering the variability of the actual interview time, it is recommended to take at least an hour rest between interviews.</div>
                        </div>
                    </Grid>    
                </Grid>
            </div>

            <div className='container-shrinked'>
            <Grid container spacing={3} direction='row' justify="center" alignItems="flex-start" style={{marginTop: 20}}>
                <Grid item xs ={12} sm={6}>
                    <img className="master-image" src={process.env.PUBLIC_URL + '/assets/ringle/interview-1.png'} alt="master of ringle"/>
                    <div className = 'text-caption'style={{marginTop: 5}}>Interview with a customer<br/>preparing for grad school in the USA</div>
                </Grid>
                <Grid item xs ={12} sm={6} >
                    <img className="master-image" src={process.env.PUBLIC_URL + '/assets/ringle/interview-2.png'} alt="master of ringle"/>
                    <div className = 'text-caption'style={{marginTop: 5}}>Interview props and consent form</div>
                </Grid>
            </Grid>
            </div>

            <div>
                <div className='text-phrase-ringle'style={{marginTop:150, marginBottom : 150, textAlign:'center', fontSize:'24px'}}>Please contact me for more detail :)</div>
            </div>

            

            

            <div className='copy-project'>Copyright 2022. Sooyeon Park all rights reserved.</div>

            

        </div>
        
    );

}

export default Ringle
