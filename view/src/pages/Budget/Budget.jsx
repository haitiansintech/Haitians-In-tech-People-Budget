import React from 'react';
import './Budget.css';
import NavBar2 from '../../components/NavBar2/Navbar2';
import Footer2 from '../../components/Footer2/Footer2';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';

const Budget = () => {
    const data = [
        {name: 'Executive Power', money: 2000},
        {name: 'Legislative Power', money: 700},
        {name: 'Legal Authority', money: 200},
        {name: 'Independent Organization', money: 1000}
      ];
    
    return (
        <div>
            <NavBar2 page="Budget"/>
            <div className="header">
                <h1>Budget Explorer</h1>
                <p> See the spending divided by Government Function and Category with ease. </p>
            </div>
            <div>
                <div className="budget-chart-title">
                    <h1 id="chart-header"> Overall Budget </h1>
                    <p id="chart-header-text"> October 2021 - 2022 (In Millions of Gourdes) </p>
                </div>
                <div className="chart-flexbox">
                    <div className="chart-grid">
                        <div className="chart-info">
                            <p>Total Budget</p>
                            <h3>118.8B Gourdes</h3>
                            <p>% of Credits Used</p>
                            <h3>64.59%</h3>
                        </div>
                        <div className="chart">
                        <BarChart width={800} height={600} data={data}>
                            <Bar dataKey="money" fill="#EF6E4D" />
                            <XAxis dataKey="name" />
                            <YAxis />
                        </BarChart>
                    
                        </div>
                        
                        <div className="chart-bar">
                            <div className="bar-item">
                                <div id="bar-image-2"></div>
                                <div className="bar-info">
                                    <p>Public Investment Expenses</p>
                                    <h1>$19,123</h1>
                                </div>
                            </div>
                            <div className="bar-item">
                            <div className="bar-image"></div>
                                <div className="bar-info">
                                    <p>Outcome</p>
                                    <h1>$19,123</h1>
                                </div>
                            </div>
                            <div className="bar-item">
                            <div className="bar-image"></div>
                                <div className="bar-info">
                                    <p>Outcome</p>
                                    <h1>$20,123</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chart-image"></div>
                </div>
            </div>
            <div className="table-section">
                <h1>By Sector</h1>
                <div className="table-wrapper">
                    <table>
                        <th>
                            Latest Transaction
                            &emsp;&ensp;
                            <button>This Month</button>
                        </th>
                        <tr>
                            <td className="td-block-gray">&#91;&emsp;&#93;</td>
                            <td className="td-bold-blue">Portu Studio</td>
                            <td className="td-bold-blue">$650,036.34</td>
                            <td className="td-plain-gray">March 25, 2021</td>
                            <td className="td-print"><img alt="Print"/></td>
                            <td className="td-dots"><img alt=" [. . .]"/></td>
                        </tr>
                        <tr>
                            <td className="td-block-gray">&#91;&emsp;&#93;</td>
                            <td className="td-bold-blue">Akademi Studio</td>
                            <td className="td-bold-blue">$650,036.34</td>
                            <td className="td-plain-gray">March 25, 2021</td>
                            <td className="td-print"><img alt="Print"/></td>
                            <td className="td-dots"><img alt=" [. . .]"/></td>
                        </tr>
                        <tr>
                            <td className="td-block-gray">&#91;&emsp;&#93;</td>
                            <td className="td-bold-blue">Nextrun Studio</td>
                            <td className="td-bold-blue">$650,036.34</td>
                            <td className="td-plain-gray">March 25, 2021</td>
                            <td className="td-print"><img alt="Print"/></td>
                            <td className="td-dots"><img alt=" [. . .]"/></td>
                        </tr>
                        <tr>
                            <td className="td-block-gray">&#91;&emsp;&#93;</td>
                            <td className="td-bold-blue">Geex Studio</td>
                            <td className="td-bold-blue">$650,036.34</td>
                            <td className="td-plain-gray">March 25, 2021</td>
                            <td className="td-print"><img alt="Print"/></td>
                            <td className="td-dots"><img alt=" [. . .]"/></td>
                        </tr>
                        <tr>
                            <td className="td-block-gray">&#91;&emsp;&#93;</td>
                            <td className="td-bold-blue">Kleon Studio</td>
                            <td className="td-bold-blue">$650,036.34</td>
                            <td className="td-plain-gray">March 25, 2021</td>
                            <td className="td-print"><img alt="Print"/></td>
                            <td className="td-dots"><img alt=" [. . .]"/></td>
                        </tr><br/>
                        <tfoot>
                            Showing 1-5 from 100 data
                            <span className="tfoot-buttons-wrapper">
                                <button>&lt;</button>&nbsp;
                                <button>1</button>&nbsp;
                                <button>2</button>&nbsp;
                                <button>3</button>&nbsp;
                                <button>&gt;</button>
                            </span>
                         </tfoot>
                    </table>
                    <br/><br/>
                </div>
            </div>
            
            <Footer2 />
        </div>
    );
};

export default Budget;
