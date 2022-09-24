import React from 'react'
import ExpertImageColumn from '../components/ExpertImageColumn';
import './ExpertePracticeArea.css';

function ExpertePracticeAreas({image,title}) {
  return (
    <div className='expert-practice-container'>
      <ExpertImageColumn image='./images/expert.jpg' title='Expert Practice Areas' />
      <div className='blog-area'>
        <p>While we keep our eyes and minds open to emerging areas of law, we have garnered enviable expertise in the following areas over the years:</p>
        <div className='each-expertise'>
          <h1>CORPORATE & COMMERCIAL LAW</h1>
          <div className='each-expertise-below'>
            <img style={{
              width: '500px',
              height:'300px',
              objectFit: 'cover',
              borderRadius: '20px'
            }} src='./images/corporate.jpeg' />
            <p>We render innovative and pragmatic corporate and commercial legal services to meet our clients’ peculiar business needs and objectives in each transaction.  Our commercially aware and cost effective solutions allow our clients to act appropriately and efficiently in all their business transactions in line with global best practices.
            We are proactive in our approach and guidance to ensure we are always ahead of the curb in advising our clients. We utilize our wealth of experience gained from across our other practice areas to ensure we provide comprehensive and practical corporate and commercial services to our clients.
            Our corporate and commercial services cover the full spectrum of our clients operations from formation of the entity, to maintaining good corporate governance and advising on the activities of the organization. We also provide company secretarial services, where we ensure that the organization consistently maintains good corporate governance and complies with the regulatory framework.
            </p>

          </div>
          <div className='list-container' >
          <p>Our areas of expertise in corporate and commercial law include: </p>
            <div className='list'>
            <ul>
            <li>Incorporation</li>
            <li>Post Incorporation</li>
            <li>Partnership and joint venture</li>
            <li>Foreign Investment(including strategy and implementation)</li>
            <li>Regulatory compliance issues</li>
            <li>Liquidation and Receivership</li>
            <li>Mergers, Acquisition and Takeovers</li>
            
          </ul>
          <ul className='list-two'>
          <li>Anti-corruption and compliance</li>
            <li>Real Estate</li>
            <li>General Corporate Advisory</li>
            <li>Equity investments and divestments</li>
            <li>Privatizations</li>
            <li>Leveraged buyouts</li>
            <li>Tender and exchange offers</li>
            <li>Debt to Equity Swaps</li>
          </ul>
            </div>

          </div>
         
        </div>

{/* -------- */}
        <div className='each-expertise'>
          <h1>DISPUTE RESOLUTION</h1>
          <div className='each-expertise-below'>
            <img src='./images/dispute.jpeg' />
            <p>We are surely your best bet in dispute resolution, our Firm is known for its unique ways of resolving disputes and maintaining relationships between contending parties. We resolve disputes regardless of their nature as we deploy our experiences in other areas of practice to help us in this regard. We resolve disputes relating to Labour matters, environmental matters, oil and gas, maritime, contracts, elections and policy matters, matrimonial causes and many others using our enviable legal tactics in Litigation, Arbitration, Mediation, Negotiation and Conciliation.
            </p>

          </div>
         
        </div>
        {/* --------- */}

        <div className='each-expertise'>
          <h1>PROPERTY AND REAL ESTATE</h1>
          <div className='each-expertise-below'>
            <img src='./images/real.jpeg' />
            <p>
            At Lex Fortis, we assist our clients with proper extensive due diligence and advisory in real estate transactions including but not limited to acquisition, lease, sublease, demise and so on. We also engage in Mortgage transaction advisory to secure our clients’ interests at all times. For our construction clients, we also supervise construction projects for transparency sake and help our clients manage their properties in the hands of third parties.

            </p>

          </div>
         
        </div>

        {/* --------- */}

        <div className='each-expertise'>
          <h1>TAX AND AUDIT:</h1>
          <div className='each-expertise-below'>
            <img src='./images/tax.jpg' />
            <p>
            We have in our Firm, experienced Chartered Accountants and Auditors whose diligence and expertise are not in doubt. We help our corporate clients with their financial statements, annual returns, calculation and remittance of taxes to appropriate authorities as well as render unequalled advisory on tax related matters. 
            We also engage in periodic legal audits for our corporate clients to enable them make informed decisions and run the company in line with global standards.

            </p>

          </div>
         
        </div>

        {/* --------- */}

        <div className='each-expertise'>
          <h1>FAMILY LAW & MATRIMONIAL CAUSES</h1>
          <div className='each-expertise-below'>
            <img src='./images/family.jpeg' />
            <p>
            We  have outstanding experience in resolving family issues and matrimonial causes, particularly in Nigeria. In line with professional ethics, we treat matters in this regard with utmost privacy and secrecy. We put our Clients first before anything else. Some of these services includes: Prenuptials, vows, desolution of marriage and counseling.

            </p>

          </div>
         
        </div>

        {/* -------- */}

        <div className='each-expertise'>
          <h1>TECHNOLOGY AND TELECOMMUNICATION</h1>
          <div className='each-expertise-below'>
            <img src='./images/tech.jpeg' />
            <p>
            With our team of young and digitally savvy lawyers, we provide services relating to technology law for corporate entities and individuals who use technology in the day-to-day running of their companies as well as render global legal advisory to such clients. Our knowledge of fintech and space law enables us work with our Clients in their overall interests.
            Our technology legal advisory services cuts across the full spectrum of digital, data advisory, e-commerce and general technology matters. We have a team of highly dedicated professionals that utilise their diverse experience in advising our clients and are abreast with the changing dynamics of the technology sector.
            We provide comprehensive telecommunication services that offer unparalleled service, from developing strategies, to implementation and executions, advising on the regulatory framework and interacting with regulators.

            </p>

          </div>
         
        </div>

        {/* ---------- */}

        <div className='each-expertise'>
          <h1>LEGISLATIVE AND GENERAL LEGAL DRAFTING</h1>
          <div className='each-expertise-below'>
            <img src='./images/legaldrafting.jpeg' />
            <p>
            It is factual that legal drafting is one of our core specialties as we have created a distinguishable niche for our Firm in that regard. We draft and review all kinds of legal document including; contracts, partnerships, joint ventures, memoranda of understanding, legislative bills, letters, court processes, lease and tenancy agreements, deeds, wills, et cetera.
            </p>

          </div>
         
        </div>

        {/* ------- */}

        <div className='each-expertise'>
          <h1>BANKING AND FINANCE</h1>
          <div className='each-expertise-below'>
            <img src='./images/banking.jpeg' />
            <p>
            We have an in-depth knowledge and experience across the diverse spectrum of the banking and finance sector. Our services include - restructuring, insolvency, security and regulatory compliance.
We are innovative and adapt to the fast changing tide of the economy and regulatory requirements. We are well suited to advice on complex and challenging issues of banking and finance.
Our team of highly motivated and innovative lawyers will be utilising their vast knowledge and experience in the banking and financial sector and their wide spread expertise across the various practice areas to provide creative, prudent and pragmatic solutions to meet our clients objectives.
            </p>

          </div>

          <div className='list-container' >
          <p>Our Expertise: </p>
            <div className='list'>
            <ul>
            <li>Corporate Finance</li>
            <li>Project Financing</li>
            <li>Real Estate Financing</li>
            <li>Structured Finance</li>
            <li>Infrastrucrure Financing</li>
            <li>Assets Finance</li>
            <li>Capital Market</li>
            
          </ul>
          <ul className='list-two'>
          <li>Private Equity</li>
            <li>Venture Capital</li>
            <li>Acquisition and Takeover financing</li>
            <li>Debt Recovery</li>
            <li>Secured and Unsecured loan transaction</li>
            <li>Due diligence</li>
           
          </ul>
            </div>

          </div>
         
        </div>



      </div>
    </div>
  )
}

export default ExpertePracticeAreas
