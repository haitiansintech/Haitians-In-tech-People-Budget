import React from 'react'
import './API.css'
import NavBar2 from '../../components/NavBar2/Navbar2';
import Footer2 from '../../components/Footer2/Footer2';
import ChallengeFooter from '../../components/ChallengeFooter/ChallengeFooter';

const API = () => {
    return (
        <div>
            <NavBar2 page="API"/>
            <div className="API-header">
                <h1>Open API</h1> 
                <p>See below for documentation and instructions</p>
            </div>
            <h1 id="API-title">API Documentation</h1>
            <div className="docs-wrapper">
                <div className="info">
                    <h2>Search topics - Develop Code</h2>
                    <p>Computers have their own language called <span className="ref">Machine Code</span> which tells them what to do. As you can see, it doesn’t make a lot of sense to humans!</p>
                    <p>Each number or letter is telling the computer to change something in its <span className="ref">memory</span>. This could be a number or word, or a little part of a picture or video. By themselves, computers don’t know how to do anything. It is the job of the programmer to give them instructions.</p>
                    <p>It is possible to learn Machine Code, but it would take a long time! Luckily there is an easier way to communicate with computers.</p>
                    <div id="code-block">
                        <p className="green-tag">&lt;header&gt;</p>
                        <p className="tab"><span className="green-tag">&lt;link</span> <span className="attr">href</span> <span className="link">=“https://projects.invisionapp.com/d/main?origin=v7#/console/17364600/360444740/...css”</span></p>
                        <p className="tab"><span className="green-tag">&lt;script</span> <span className="attr">src</span> <span className="link">=“https://projects.invisionapp.com/d/main?origin=v7#/console/17364600/360444740/...js”</span></p>
                        <p className="green-tag">&lt;/header&gt;</p>
                    </div>
                    <p>Each number or letter is telling the computer to change something in its <span className="ref">memory</span>. This could be a number or word, or a little part of a picture or video. By themselves, computers don’t know how to do anything. It is the job of the programmer to give them instructions.</p>
                    <h3>Default field</h3>
                    <p>It is possible to learn Machine Code, but it would take a long time! Luckily there is an easier way to communicate with computers.</p>
                    <table className="default-field-table">
                            <tr className="default-field-row-top">
                                <td><p>FIELD NAME</p></td>
                                <td>FIELD TYPE</td>
                                <td>SYNTAX</td>
                                <td>DESCRIPTION</td>
                            </tr> 
                        <tr className="default-field-row">
                            <td className="default-field-blue-text"><p>_archived</p></td>
                            <td className="default-field-yellow-text">Field</td>
                            <td className="default-field-true">True</td>
                            <td className="default-field-gray-text">Seems set to archived will be published</td>
                        </tr>
                        <tr className="default-field-row">
                            <td className="default-field-blue-text"><p>_draft</p></td>
                            <td className="default-field-yellow-text">Field</td>
                            <td className="default-field-false">False</td>
                            <td className="default-field-gray-text">Seems set to archived will be published</td>
                        </tr>
                    </table>
                </div>
                <div className="code">
                    <div className="code-header">
                        <button id="button-HTML">HTML</button>
                        <button>CSS</button>
                        <button>JQUERY</button>
                        <button>REACT</button>
                    </div>
                    <div className="code-container">
                        <p className="green-tag">&lt;head&gt;</p>
                        <p className="tab"><span className="green-tag">&lt;link</span>&nbsp;<span className="attr">href</span><span className="link">="https://projects.invisionapp.com/d/main?origin=v7#/console/17364600/360444740/...css"</span></p>
                        <p className="tab"><span className="green-tag">&lt;script</span>&nbsp;<span className="attr">href</span><span className="link">=“https://projects.invisionapp.com/d/main?origin=v7#/console/17364600/360444740/...js”</span></p>
                        <p className="green-tag">&lt;head&gt;</p>
                    </div>
                    <div>
                        <p className="code-section-text">Each number or letter is telling the computer to change<br/> something in its memory. This could be a number or word,<br/> or a little part of a picture or video.</p>
                    </div>
                    <div className="code-container">
                        <p className="green-tag">&lt;head&gt;</p>
                        <p className="tab"><span className="green-tag">&lt;link</span>&nbsp;<span className="attr">href</span><span className="link">=“https://projects.invisionapp.com/d/main?origin=v7#/console/17364600/360444740/...css”</span></p>
                        <p className="tab"><span className="green-tag">&lt;script</span>&nbsp;<span className="attr">href</span><span className="link">=“https://projects.invisionapp.com/d/main?origin=v7#/console/17364600/360444740/...js”</span></p>
                        <p className="green-tag">&lt;head&gt;</p>
                    </div><br/>
                    <div className="code-container">
                        <p className="green-tag">&#123;</p>
                        <p className="tab"><span className="green-tag">box-sizing: </span><span className="attr">border-box;</span></p>
                        <p className="tab"><span className="green-tag">padding: </span><span className="attr">0;</span></p>
                        <p className="tab"><span className="green-tag">margin: </span><span className="attr">0;</span></p>
                        <p className="green-tag">&#125;</p>
                        <p className="green-tag">&#47;&#42; display the elements in a column, horizontally centered &#42;&#47;</p>
                        <p className="green-tag">body &#123;</p>
                        <p className="green-tag">&emsp;</p>
                        <p className="green-tag">&#125;</p>
                        <p className="green-tag">&#47;&#42; expand the nested svg to occupy as much space as allocated by the button &#42;&#47;</p>
                        <p className="green-tag">&#47;&#42; .controls__color button svg, .controls__shape button svg &#123;</p>
                        <p className="tab"><span className="green-tag">display: </span><span className="attr">block;</span></p>
                        <p className="tab"><span className="green-tag">width: </span><span className="attr">100%;</span></p>
                        <p className="tab"><span className="green-tag">height: </span><span className="attr">100%;</span></p>
                        <p className="tab"><span className="green-tag">&#47;&#42; transition for the change in color &#42;&#47;</span></p>
                        <p className="tab"><span className="green-tag">transition: </span><span className="attr">color 0.2s ease-in-out;</span></p>
                        <p className="green-tag">&#125;</p>
                    </div>
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <ChallengeFooter />
            <Footer2 />
        </div>
    )
}

export default API;