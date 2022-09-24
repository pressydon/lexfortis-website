import React from 'react'
import ExpertImageColumn from '../components/ExpertImageColumn'
import ProfileColumn from '../components/ProfileColumn';
import './KnowOurFirm.css';

function KnowOurFirm({image, title, biography,profileName, profileImage}) {
  return (
    <div className='know-our-container'>
        <ExpertImageColumn image='./images/12.jpg' title='KNOW OUR FIRM (LEX FORTIS ATTORNEYS & SOLICITORS)'  />

        <p style={{maxWidth:'80%',
        margin:'50px auto',
        textAlign:'justify',
        fontSize:'20px',
        letterSpacing:'1.5px'}}>Lex Fortis Attorneys & Solicitors is a law firm of Partners who practiced separately as “Echezona Consult” and “Kayode Joshua & Co.”. The Partners who have practiced in diverse areas of law for several years agreed to a legal marriage of the two firms in the year 2020, consequently the new partnership was registered as Lex Fortis Attorneys & Solicitors, in a bid to serve diverse clients in broader areas of law.
Our Firm is a moderately sized law firm with its registered office in Abuja, Federal Capital Territory, Nigeria and affiliate offices in Canada and the United Kingdom. The Firm comprises of five (5) young, vibrant, dynamic and articulate lawyers with years of experience in the legal profession, we also have about five (5) supporting staff to help us in our daily businesses.
We have demonstrable expertise in law relating to Litigation, Alternative Dispute Resolution, Information and Communication Technology, Media and Entertainment, Corporate/Commercial Law, Regulatory Compliance, Hospitality, Real and Intellectual Property,  Oil and Gas, Shipping and Maritime,  Insurance and Re-insurance, Debt Recovery, Banking and Finance, as well as industry specific business intelligence services. The firm’s reputation and stability are evidenced by long standing relationships with major business organizations, including Federal and State agencies, Multinational corporations, Banking institutions, Non-profit organizations, individuals and entrepreneurs. We place premium on complete clients’ satisfaction.
We are known for our youthful yet aged mindset in rendering legal advisory services to our Clients. We pride in excellent communication with Clients and third parties in the execution of Clients’ instructions. We achieve excellent results regardless of the hurdles because we turn all stones in favour of our Clients. We listen, we understand, and we execute with you. 
</p>
<p className='choicest-friend'>Lex Fortis is your choicest friend in need!</p>

  <div className='profile-container'>

  <ProfileColumn 
  profileImage='./images/legal.jpg'
  profileName='CHIMEZIE VITUS'
  biography='A vibrant, highly analytical, vast, result-oriented, relentless and fearless Advocate who would stop at nothing but a win. He has accumulated years of experience in Dispute and Conflict resolution, Negotiation, Compliance, Finance, Matrimonial Causes, Property Law, and Entertainment Law. 
  He is an alumnus of The University of Nigeria, Nsukka. He has also had the privilege of working with Imo State Government on a variety of projects between 2014 and 2019 before relocating to the Federal Capital Territory, Abuja and focusing on private practice. 
  Mr Chimezie, the Managing Partner of the Firm, has acquired tremendous experience in handling transactions with public and private international as well as local institutions and bodies.He is a celebrated Writer and a renowned Policy Analyst.  He equally serves on the Board of a number of Organizations; providing legal and advisory support in complex dispute resolutions and financial resolutions.
  He is a force to reckon with, a Barrister and Solicitor of the Supreme Court of Nigeria, a member of the Nigerian Bar Association, Writers Club International, Society for Young Professionals and so many others.
  ' />
  <ProfileColumn 
  profileImage='./images/kay.jpg  '
  profileName='KAYODE OGUNTUASE'
  biography='He graduated top 10% of his class at the great Obafemi Awolowo University (OAU), Ile-Ife, while also demonstrating great composure and leadership qualities. 
Over the years, he has garnered extensive experience in various spheres of Law in Nigeria and internationally, with his particular area of interest being Alternative Dispute Resolution, Medical Law, Administration, Corporate Law, drafting and vetting of contracts, employments and real estate agreements, that would ensure that transactions with the local communities or persons do not run into difficulties.  
He has enjoyed tremendous professional exposure in Nigeria first with his short stint as Counsel at the Federal Ministry of Justice, Nasarawa State before eventually focusing on private practice in Abuja. 
He is an Associate member of the Lagos Court of Arbitration (LCA), the Institute of Chartered Mediators and Conciliators (ICMC), and a member of the Nigerian Bar Association (NBA). To serve our clients better, he is also in the process of completing obtaining a License to practice in Canada.' />

  </div>
      
    </div>
  )
}

export default KnowOurFirm
