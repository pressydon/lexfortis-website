
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import ExpertePracticeAreas from './pages/ExpertePracticeAreas';
import KnowOurFirm from './pages/KnowOurFirm';
import OurPhilosophy from './pages/OurPhilosophy';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import BlogOne from './components/BlogOne';

import BlogCardItem from './components/BlogCardItem';




window.onload = function() {
  document.body.className += " loaded";
}



function App() {

  const data = [
    {
      id: 1,
      title: 'WHAT IN YOUR VIEW ARE THE CAUSES OF THE CRIME OF BANDITRY?',
      content:'Banditry is a type of organized crime committed by outlaws typically involving the threat or use of violence...',
      blogImage:'./images/banditry.jpeg' ,
      author:'Chimezie Vitus',
      bodyTop: 'Banditry is a type of organized crime committed by outlaws typically involving the threat or use of violence. A person who engages in banditry is known as a bandit and primarily commits crimes such as extortion, robbery, and murder, either as an individual or in groups.The origins of the bandit conflict can be traced back to herder-farmer conflicts that plague the rural parts of Nigeria. Environmental decline and the scarcity of natural resources and arable land led to communities competing viciously for those limited resources. In spite of government efforts, the security situation in Nigeria is deteriorating. Indeed, the lingering conflict between herders and farmers in north-central Nigeria has been rated six times deadlier than the Boko Haram insurgency. The recent abductions of schoolboys in Kankara community, Katsina State and in Niger State are more examples of the deplorable state of security in the country. Notably, the unprecedented increase in violent attacks is defying the sustained narrative among analysts that the northwest is relatively peaceful compared to the northeast—even though the northwest is poorer; worse governed in some areas; and has lower levels of human development. Banditry attacks has remained in Nigeria up till today, even most recently, some bandits attacked, killed and kidnapped about 970 passengers on-board Abuja-Kaduna by train, this is the regrettable situation the country has plunged into.',
      date: '12th May, 2019',

      ulTitle:'From an independent research, the causes of banditry especially in Nigeria may include some or all of the following:',
      
        liContent1: 'POROUS NIGERIA-NIGER BORDERS AND DIFFICULT TERRAIN: Nigeria’s border with Niger spans 1,497 km and is poorly policed by the Nigeria Custom and Immigration Services. The porous nature of these borders heightens the potential spread of terrorist activities into northwest Nigeria from Burkina Faso, Mali, and Niger. The vulnerability of the border to the infiltration of terror groups is compounded by the forest reserves in the region. The vast, rugged terrain, sparse population, and dense vegetation make surveillance difficult—making the forests ideal hiding places and operational bases for the terror groups. Furthermore, the forested landscape constitutes ungoverned spaces, where the presence of the authorities is either nonexistent or, at best, sporadic. ',
        liContent2: 'ARMS AND WEAPONS TRAFFICKING: The groups terrorizing northwest Nigeria are known to deploy sophisticated weapons in their operations; again, often due to the porous Nigeria-Niger border and subsequent arms trafficking. The illicit proliferation of weapons exerts a considerable impact on peace and security and increases the incidence of terrorists’ activities in the region.',
        liContent3: 'ILLITERACY – Banditry attacks in Nigeria are mostly recorded in the northern part of Nigeria where the educational system is way below average. This crimes are often perpetrated by young Nigerians who would have been in school but for the inability to access quality education and means of livelihood, they resort to crime.',
        liContent4: 'POOR GOVERNANCE, POVERTY, AND CLIMATE CHANGE-FRAGILITY NEXUS – In many instances, the rising incidents of violent attacks are symptoms of weak, exclusionary, or exploitative governance systems in northwest Nigeria. Compounding factors include weak institutional capacity within the police; extreme inequality, poverty, unemployment; and citizens’ alienation from the government. Indeed, five of the country’s 10 poorest states—Sokoto, Katsina, Zamfara, Kebbi, and Jigawa—are in the northwest region. Evidence suggests that population explosion, poor governance, and high incidence of poverty could render many unemployed youths more vulnerable to recruitment by terror groups in the region. Closely connected to this is the intensive desertification of the Sahara. Climate change is wreaking havoc on people’s livelihoods and facilitating the recruitment of poor farmers and vulnerable youths into terrorist groups in the region. It is said that a hungry man is an angry man, and the quest for survival can be extreme where life is dependent on your strength. ',
        liContent5: 'CORRUPTION – The Nigerian system has been marred with insincerity of purpose and this has mitigated against the smooth enforcement of policies or laws and or distribution of resources as appropriated. Corruption is overtly and covertly evident in all agencies and parastatals of the Nigerian government and the common man feels the direct impact of this ineptitude, and where the occupants of the rural communities can no longer shoulder their pain, they resort to crime.',
        liContent6: 'LACK OF SOCIAL AMENITIES – Banditry in northern Nigeria started with farmers and herders scrambling for scarce land resources and other social amenities. These bandits destroyed farms and dams in search of amenities and this is a grave causative agent of banditry.',
        liContent7: 'POOR GOVERNANCE AND GOVERNMENT POLICIES – It is the primary duty of the government to enact laws and enforce them in the overall interest of the masses. The rising case of banditry has met little or no reactions from the Nigerian government since inception as major laws have not been promulgated and enforced to bring these banditry to the barest minimum. The existence of proactive policies and vibrant enforcement can go a long way in salvaging the banditry situation in Nigeria.',
        liContent8: 'OVERBURDENED SECURITY APPARATUS AND DIMINISHING PRESENCE OF THE FEDERAL GOVERNMENT: The state security response to the rising insecurity in the region is compromised by the decade-long war with Boko Haram in the northeast, deteriorating security in the Niger Delta, farmer-herder conflicts in north-central and southern Nigeria, and other forms of criminality across the country. In fact, the Nigerian military services are on active deployment in no fewer than 30 states of the federation, tackling internal security threats that ordinarily should have been left to the police to contain. With security forces stretched, terror groups have been able to operate with little resistance in the northwest. Furthermore, terrorists and criminals appear to be emboldened given the federal government’s weakening engagement. – As a Nation, a high level of security machineries are needed and a great number of dedicated personnel to confront and combat the bandits. But in the absence of this requirements, the fate of the masses are left in the hands of these bandits, as in the case with Nigeria.',
        liContent9: 'CONTROVERSIAL PEACE AGREEMENTS BETWEEN SOME STATE GOVERNMENTS AND CRIMINAL GROUPS: In an attempt to stop these attacks, and due to larger failures on the part of the federal government, the state governments of Katsina, Sokoto, and Zamfara initiated direct negotiations with these criminal groups. As part of these negotiations, the governors offered the criminal groups amnesties and other incentives to end violent attacks. Some have even agreed to release all arrested persons from such groups in exchange for hostages. So far, these agreements have failed for a number of reasons: First, these criminal groups lack central command and a common goal, so it has been difficult to bring them all to a common negotiation. Moreover, agreements made with one group are not binding on others. Second, the dialogues excluded the local communities that bear the brunt of violence and expect the state to deliver forms of compensation, justice, and protection as a condition for durable peace. Collapsed negotiations have led to renewed attacks by the criminal groups, while the farmers and vigilantes acting on their behalf have also remained completely unaccountable. Beyond these negotiations is the problem that the state governments have no capacity to enforce the agreements and are barely equipped to address many of the underlying causes of insecurity, including shrinking space for grazing and porous borders. ',
        liContent10: 'ILLEGAL MINING ACTIVITIES: Competition over access to mineral resource deposits in Katsina and Zamfara states exacerbates already-existing tensions. Often terror groups control the minefields and are able to act with impunity because of the undue patronage they benefit from the authorities through connivance. The syndicates also fund banditry and cattle rustling in mining communities, displacing and inciting violence among Fulani pastoralists and farming communities.',

      

      ulTitle2: 'Conclusively, the activities of these bandits in Nigeria has affected the country generally in the areas of economy, transportation, security and what have you and has to a large extent undermined the country’s international reputation. Banditry can be extinguished if government can rise with sincerity and one voice to curb this menace, we therefore recommend the following:',
      
      
        li2Content1: 'BETTER SUPPORTED BORDER SECURITY AND STAMPING DOWN ON CORRUPTION: The federal government must collaborate with state governments to address the immediate challenge of border porosity. Concerted efforts to recruit, train, and post adequately equipped customs and immigration personnel to the region can boost surveillance and stem the tide of the free flow of arms into the country. Moreover, addressing corruption here is pivotal, because border patrol is a major racket for security forces and government officials. The ongoing military response must also be sustained through strategic coordination with the counterterrorism unit of the Nigerian police force, while the recent introduction of drone surveillance and anti-banditry bombardment is maintained.',
        li2Content2: 'IMPROVED LAW ENFORCEMENT:  Furthermore, the federal government must prioritize law enforcement solutions in tackling rising insecurity in the northwest. Policing is critical to intelligence gathering in identifying and tracking the cells of criminal groups in the states and aiding community response to insecurity.',
        li2Content3: 'COLLABORATION WITH NEIGHBORS: Another effort toward border security is the creation of a bilateral joint task force between Nigeria and Niger to serve as a trans-border security force resourced and managed through the immigration and custom services of both countries. The joint task force should be matched with immediate and precise action to prevent wide-scale terrorist and bandit movements across the borders.',
        li2Content4: 'STRATEGIC INVESTMENTS IN HUMAN AND INFRASTRUCTURAL DEVELOPMENT: Such investments can work to solve the long-term, underlying challenges created by poor governance and deepening poverty that feed such insecurity.',
        li2Content5: 'CONCERTED LOCAL ENGAGEMENT: The federal and state governments must collaborate with the established religious and traditional institutions to build community resilience against terrorism.'
      
    
    },
    {
      id: 2,
      title: 'ENFORCEMENT OF CONSENT JUDGMENT IN NIGERIA: ISSUES AND MODALITIES.',
      content:"Generally, the court's judgment is the fruit of every litigation, and the outcome of every legal dispute that is referred for resolution by the Court...",
      blogImage:'./images/consent.jpeg' ,
      blogImageInner:'./images/consent.jpeg' ,
      author:'Chimezie Vitus',
      bodyTop: " Generally, the court's judgment is the fruit of every litigation, and the outcome of every legal dispute that is referred for resolution by the Court. In Ogboru v. Uduaghan [2012] 11NWLR (Pt. 1311) pg. 357; the Supreme Court defined judgment as 'the official and authentic decision of a court of law upon the respective rights and claims of the parties to an action or suit, which were litigated and submitted for the court's determination.' A judgment of a court is usually the last stage of a judicial process after the legal right, claim or interest has been converted into a judgment or order which remains to be enforced. ",
      liContent1: 'In Aerobell (Nig.) Ltd. v. N. D. I. C. [2017] 5 NWLR (Pt. 1558) p. 203, the Court defined Consent Judgment as a decision, where the provisions and terms are settled and agreed to by parties to the action, and due effect is given thereto by the court. It is when the terms of settlement are filed in court and made the judgment of the court that it crystalizes into a consent judgment.',
      liContent2: "In Vulcan Gases Ltd. v. Okunlola [1993] 2 NWLR (Pt. 274) p. 142, the Court held that a consent judgment presupposes out of court settlement reached by the parties, and that the terms of the said settlement or agreement are furnished to the court and forms the basis of the court's judgment in the suit. Such judgment is intended to put an end to further litigation between parties just as much as if the judgment was the result of a decision of the court after the matter had been fought to the end.",
      liContent3: " A consent judgment is a final decision and can, in an appropriate case, sustain a plea of res judicata. Consent judgment remains binding until set aside by a fresh action or an appellate court, if it can be established to have been obtained by fraud, misrepresentation, duress or mutual mistake of parties. See Lamurde v. Adamawa State J. S. C. [1999] 12 NWLR (Pt.629) p. 86. See also VULCAN V GESELLSCHAFT 2001 87 LRCN 1577. ",
      liContent4: " Like every other judgment, consent judgment is binding on the parties until set aside by a court of law – BABATUNDE v. OLATUNJI (2002) 2 NWLR Pt.646, p.557.The enforcement of judgment in Nigeria is governed by the Sheriffs and Civil Processes Act of 2004. There are several means of enforcing judgment in Nigeria, for monetary judgments, the mode of enforcement is by way of Garnishee Proceedings. By garnishee proceedings, the court is empowered to attach monies which a third party called the garnishee owes the judgment debtor in satisfaction of the judgment debt. Consent judgments are enforced like every other judgment of a Court, depending on whether the reliefs sought are declaratory, monetary or otherwise. ",
      date: '14th April, 2020'

    },
    {
      id: 3,
      title: 'MAJOR FORMS OF ALTERNATIVE DISPUTE RESOLUTION:',
      content:'The following are the main methods of alternative dispute resolution methods available for settling disputes in Nigeria...',
      blogImage:'./images/alternate.jpeg' ,
      author:'Chimezie Vitus',
      bodyTop: 'The following are the main methods of alternative dispute resolution methods available for settling disputes in Nigeria.',
      liContent1: "Negotiation - Negotiation is a problem-solving process in which the parties to a dispute or an imminent conflict voluntarily come together either personally or by their representatives, to discuss their differences and attempt to reach a joint decision or resolution of the conflict, on their own and without the involvement of a third party. Negotiation is different from other types of alternative dispute resolution mechanisms as no third party is involved.",
      liContent2: "Mediation- Mediation is an alternative dispute process in which a neutral and impartial third party called the mediator is invited by the disputing parties to facilitate the resolution of the dispute by the self-determined agreement of the disputants. The mediator facilitates communication, promotes understanding, focuses the parties on their interests, and uses creative problem-solving techniques to enable the parties to reach their own mutual settlement/agreement. The mediator is usually jointly procured by both parties and the process is voluntary as the parties are not under any obligation to accept the suggestions of the mediator.",
      liContent3: "Conciliation- Conciliation as an alternative dispute method involves a neutral third party who can give an opinion or suggestion. It is a system of ADR where a third party known as the conciliator uses his best endeavours to bring the disputing parties to a voluntary settlement of their dispute. Conciliation is regulated by the Arbitration and Conciliation Act (ACA) Laws of the Federation of Nigeria (LFN) 2004.",
      liContent4: "Arbitration- Arbitration is the most initiated method of ADR where parties to a dispute submit to a third party called an arbitrator or arbitral tribunal for the resolution of their dispute. The decision of the arbitrator or arbitral panel called an award, is binding on the parties and enforceable by the courts. Arbitration is regulated by the Arbitration and Conciliation Act (ACA) Laws of the Federation of Nigeria (LFN) 2004 and also regulated by the Lagos State Arbitration Law, 2009.",
      date: '21st June, 2020',

      ulTitle2: 'GENERAL ADVANTAGES OF ALTERNATIVE DISPUTE RESOLUTION OVER LITIGATION:',
      li2Content1: "It is cheaper than litigation- ADR can be more expensive than litigation but in long term, it is cheaper than litigation. In ADR, all the expenses are borne by the parties while in litigation; some of the expenses are not borne by the parties.",
      li2Content2: "It is faster than litigation- in litigation, there is a competition of so many litigants with different cases, but in ADR, the parties' case is likely to be the only one.  ADR is less time-consuming unlike instituting a court action which can be time-consuming from factors such as adjournments, the unwillingness of parties, etc.",
      li2Content3: "It is less formal- The courtroom where litigation is carried out is usually tense. For the lawyers, it is difficult, there are a lot of rules and procedures which must be followed, and also for the layman, it is extremely difficult. An ADR session is more of a business meeting where coffee can even be served. Hence the layman is likely to prefer such an environment.",
      li2Content4: "The parties to the dispute can determine the Coram. This implies that they determine the mediator or arbitrator or conciliator who will preside over their case, but where they fail to agree, there are provisions of the law for such appointments to be done either by the court or an agency.",
      li2Content5: "Involvements of people- ADR processes are parties driven. Parties can determine the time, venue, and pace in the ADR process, unlike in litigation where parties are not involved. It is controlled by the court.",
      li2Content6: "Preservation of the relationship between the parties- Most ADR has a win-win situation on both sides of parties to the dispute, as it preserves the pre-dispute relationship that existed between the parties before the dispute.",
      li2Content7: "Privacy of the parties: ADR helps preserve the privacy of the parties. In litigation, the process must be held in public except under certain conditions thus in private.",
      li2Content8: "It promotes friendliness - most parties to litigation do not return as friends even in matrimonial proceedings. And in the commercial area of law, ADR is most relevant as there might still be a need to continue the business relationship.",

      ulTitle3: "It is also important to state that Alternative Dispute Resolution processes are not useful in all cases. Such cases include the followings:",
      li3Content1: "	•	In criminal cases generally, ADR is not utilized.",
      li3Content2: "	•	ADR cannot be used to resolve election petitions, being matters of public policy.",
      li3Content3: "  •	In matrimonial cases, ADR cannot be used to resolve matters like the dissolution of marriage, nullity of a void marriage, and restitution of conjugal rights.",
      li3Content4: "  •	Dispute relating to binding interpretations of the law, statute, or document. The court is the only institution that can do so.",
      li3Content5: "	•	Cases of urgency seeking immediate reliefs like an injunction."


    },
    {
      id: 4,
      title: 'REGISTERING A PRIVATE COMPANY OR BUSINESS NAME IN NIGERIA',
      content:'A company is a corporate structure with a separate legal personality. It is statutorily regulated and incorporated for the purpose of profit maximization, structural organization and its separate legal personality...',
      blogImage:'./images/privateC.jpeg' ,
      author:'Kayode Oguntuase',
      bodyTop: 'A company is a corporate structure with a separate legal personality. It is statutorily regulated and incorporated for the purpose of profit maximization, structural organization and its separate legal personality. A company may be Private or Public and each have different features, depending on the intention of the promoters of the Company and the nature of business. All companies, whether a private company limited by shares, private unlimited or a company limited by guarantee must be registered in accordance with the Companies and Allied Matters Act (CAMA) 2020, which is the principal law that regulates companies in Nigeria. With our team of competent lawyers, all you need is to present your rough business idea and we can help you refine the ideas, prepare your portfolio, business plan and proposals and we would help you go through the rigors of registering the Company/Business even if it is a one-man business. The commission in charge of the regulation and supervision of the registration and companies is the Corporate Affairs Commission (CAC) established pursuant to the provisions of CAMA.  In this article, we’ll briefly state the requirements for registering a Private Company or business name in Nigeria, and ideal timeline for the instruction with our dependable team.',
      date: '12th May, 2022',
      ulTitle: 'REQUIREMENTS FOR REGISTRATION WITH THE CORPORATE AFFAIRS COMMISSION (CAC) AND ADVISED TIMELINE',
      subTitle: '•	BUSINESS NAME',
      liContent1: '1.	Two (2) proposed names – Allow 6-48 hours for approval',
      liContent2: '2.	Nature of business/Main object of the business',
      liContent3: '3.	Address of the business (with house or plot number)',
      liContent4: '4.	Email address of the business',
      liContent5: '5.	The phone number for the business (Can be any of the proprietors’ numbers)',
      
      liContent5: '6.	Particulars of the proprietor(s): (a.	Clear picture or scan of valid ID (Drivers’ license, international passport, Voters’ card, National ID),	Passport photograph ,	Phone number,	Email address,	Date of Birth,	Occupation,	Picture of the signature on a plain sheet,	House Address (with house or plot number))',
      additionalText: 'Allow 2-10 working days after name approval for the registration and transmission of incorporation documents.',
      ulTitle2: "	•	PRIVATE COMPANY LIMITED BY SHARES",
      li2Content1: "1.	Two (2) proposed names for the company- Allow 6-48 hours for approval",
      li2Content2: "2.	Main objects of the company",
      li2Content3: "3.	Address of the company (with house or plot number)",
      li2Content4: "4.	Email address of the Company",
      li2Content5: "5.	Phone number of the company (Can be any of the promoters’ numbers)",
      li2Content6: "6.	Particulars of the Director(s):  (	Clear picture or scan of valid ID (Drivers’ license, international passport, Voters’ card, National ID), Phone number,	Email address,	Date of Birth,	Occupation,	Picture of the signature on a plain sheet,	Residential Address (with house or plot number)) ",
      li2Content7: "7.	Particulars of the Shareholder(s): ( 	Clear picture or scan of valid ID (Drivers’ license, international passport, Voters’ card, National ID),	Phone number,	Email address,	Date of Birth,	Shareholding,	Picture of the signature on a plain sheet,	Residential Address (with house or plot number) )",
      li2Content8: "8.	Particulars of the Company Secretary: (	Clear picture or scan of valid ID (Drivers’ license, international passport, Voters’ card, National ID),	Phone number,	Email address,	Date of Birth,	Picture of the signature on a plain sheet,	Residential Address (with house or plot number))",
      additionalText2: "Allow 2-10 working days after name approval for the registration and transmission of incorporation documents.",
      additionalText3: "In conclusion, to operate any company in Nigeria, such a company must be registered with CAC. However, it is important to note there is a mandatory share capital threshold applicable to certain businesses in Nigeria. For instance, any company seeking to as a travel/ticketing agent must register a company with a minimum of 30,000,000 (Thirty Million) authorized share capital. It is therefore important to consult with a professional to determine whether your business falls under any particular threshold."


    },
    // {
    //   id: 5,
    //   title: 'random4 IN YOUR VIEW ARE THE CAUSES OF THE CRIME OF BANDITRY?',
    //   content:'Random4 is a type of organized crime committed by outlaws typically involving the threat or use of violence...',
    //   blogImage:'./images/9.jpg' ,
    //   author:'Chimezie Vitus'

    // },
  ]

  return (
    <div style={{overflowX: 'hidden'}} className="App" onload="document.body.className += ' loaded';" class="fadein">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/expert-practice-areas'  element={<ExpertePracticeAreas />} />
      <Route path='/Know-our-firm'  element={<KnowOurFirm />} />
      <Route path='/blog' exact  element={<Blog data={data} />}  />
      <Route path='/blog/:id'  element={<BlogOne data={data} />} />
    
   
       
      
      <Route path='/our-philosophy'  element={<OurPhilosophy />} />
      <Route path='/contact-us'  element={<ContactUs />} />


      </Routes>
      <Footer />
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
