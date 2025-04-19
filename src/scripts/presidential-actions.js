// Set the list of offenses
const offenses = [
    {
        date: "January 20th, 2025",
        text: "Commuted the sentences of 13 January 6th rioters and pardoned \"all other individuals convicted of offenses related to [January 6th]\".",
        link: "https://www.whitehouse.gov/presidential-actions/2025/01/granting-pardons-and-commutation-of-sentences-for-certain-offenses-relating-to-the-events-at-or-near-the-united-states-capitol-on-january-6-2021/"
    },
    { 
        date: "January 20th, 2025",
        text: "Revoked 81 of President Biden's executive orders and presidential memorandums.",
        link: "https://www.federalregister.gov/documents/2025/01/28/2025-01901/initial-rescissions-of-harmful-executive-orders-and-actions"
    },
    {
        date: "January 20th, 2025",
        text: "Terminated all DEI programs within the federal government.",
        link: "https://www.federalregister.gov/documents/2025/01/29/2025-01953/ending-radical-and-wasteful-government-dei-programs-and-preferencing"
    },
    {
        date: "January 20th, 2025",
        text: "Issued a return-to-office mandate for all employees of the executive branch of the federal government.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/01/return-to-in-person-work/"
    },
    {
        date: "January 20th, 2025",
        text: "Ordered a freeze on the hiring of federal civilian employees throughout the executive branch.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/01/hiring-freeze/"
    },
    {
        date: "January 20th, 2025",
        text: "Declared a \"national energy emergency\" and lifted restrictions on oil drilling in Alaska.",
        link: "https://www.federalregister.gov/documents/2025/01/29/2025-01955/unleashing-alaskas-extraordinary-resource-potential"
    },
    {
        date: "January 20th, 2025",
        text: "Eliminated the EV mandate and encouraged \"energy exploration and production on Federal lands and waters\".",
        link: "https://www.federalregister.gov/documents/2025/01/29/2025-01956/unleashing-american-energy"
    },
    {
        date: "January 20th, 2025",
        text: "Withdrew the United States from the World Health Organization (WHO).",
        link: "https://www.federalregister.gov/documents/2025/01/29/2025-01957/withdrawing-the-united-states-from-the-world-health-organization"
    },
    {
        date: "January 20th, 2025",
        text: "Established the Department of Government Efficiency (DOGE), placing the world's wealthiest individual in a position of government oversight.",
        link: "https://www.federalregister.gov/documents/2025/01/29/2025-02005/establishing-and-implementing-the-presidents-department-of-government-efficiency"
    },
    {
        date: "January 20th, 2025",
        text: "Withdrew the United States from the Paris climate agreement (again).",
        link: "https://www.federalregister.gov/documents/2025/01/30/2025-02010/putting-america-first-in-international-environmental-agreements"
    },
    {
        date: "January 20th, 2025",
        text: "Began a mass deportation of undocumented immigrants, and ordered the formation of Homeland Security Task Forces in all states to facilitate these deportations.",
        link: "https://www.federalregister.gov/documents/2025/01/29/2025-02006/protecting-the-american-people-against-invasion"
    },
    {
        date: "January 20th, 2025",
        text: "Ended birthright citizenship.",
        link: "https://www.federalregister.gov/documents/2025/01/29/2025-02007/protecting-the-meaning-and-value-of-american-citizenship"
    },
    {
        date: "January 20th, 2025",
        text: "Suspended all refugee entry to the United States under USRAP, except on a case-by-case basis.",
        link: "https://www.federalregister.gov/documents/2025/01/30/2025-02011/realigning-the-united-states-refugee-admissions-program"
    },
    {
        date: "January 20th, 2025",
        text: "Reinstated the death penalty.",
        link: "https://www.federalregister.gov/documents/2025/01/30/2025-02012/restoring-the-death-penalty-and-protecting-public-safety"
    },
    {
        date: "January 20th, 2025",
        text: "Defined \"man\" and \"woman\" to mean \"male\" and \"female\" respectively, defined gender as a binary \"man\" and \"woman\", and mandated that federal regulations be updated to reflect as much. Also mandated sex-based bathroom access in prisons.",
        link: "https://www.federalregister.gov/documents/2025/01/30/2025-02090/defending-women-from-gender-ideology-extremism-and-restoring-biological-truth-to-the-federal"
    },
    {
        date: "January 20th, 2025",
        text: "Renamed Mount Denali to Mount McKinley and renamed the Gulf of Mexico to the Gulf of America.",
        link: "https://www.federalregister.gov/documents/2025/01/31/2025-02096/restoring-names-that-honor-american-greatness"
    },
    {
        date: "January 21st, 2025",
        text: "Ordered all agencies to \"encourage\" the private sector to end all DEI hiring practices.",
        link: "https://www.federalregister.gov/documents/2025/01/31/2025-02097/ending-illegal-discrimination-and-restoring-merit-based-opportunity"
    },
    {
        date: "January 25th, 2025",
        text: "Further claimed responsibility for the release of 4 more Israeli hostages, which were agreed to under the ceasefire terms negotiated during President Biden's closing days in office.",
        link: "https://www.whitehouse.gov/briefings-statements/2025/01/white-house-statement-on-hostage-release/"
    },
    {
        date: "January 28th, 2025",
        text: "Mandated that any medical institution receiving research or education grants end all pediatric gender-affirming care, including transition surgeries or hormone treatments, and directs action to be taken against sanctuary states. Also demands that the Federal employee health benefits in 2026 no longer include coverage for pediatric transgender surgeries or hormone treatments.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/01/protecting-children-from-chemical-and-surgical-mutilation/"
    },
    {
        date: "January 29th, 2025",
        text: "Established the Ending Indoctrination Strategy, which includes a full reporting of educational institutions and educators who engage in teaching gender ideology. Reestablished the 1776 commission whose mission is \"to promote patriotic education...\".",
        link: "https://www.whitehouse.gov/presidential-actions/2025/01/ending-radical-indoctrination-in-k-12-schooling/"
    },
    {
        date: "January 29th, 2025",
        text: "Ordered the Secretary of Education to provide guidance to the states on how to use federal funds to support school vouchers, faith-based schooling, home schooling, charter schooling, and BIE schooling.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/01/expanding-educational-freedom-and-opportunity-for-families/"
    },
    {
        date: "January 29th, 2025",
        text: "Reinstates executive order 13933 (<a href=\"https://www.federalregister.gov/documents/2020/07/02/2020-14509/protecting-american-monuments-memorials-and-statues-and-combating-recent-criminal-violence\">link</a>) which enforces a felony penalty of up to 10 years in prison for willful vandalism of any government property, and specifically mentions \"pro-Hamas related vandalism of historically significant public monuments and related assaults of Federal officers and employees following October 7, 2023\".",
        link: "https://www.whitehouse.gov/presidential-actions/2025/01/celebrating-americas-250th-birthday/"
    },
    {
        date: "January 29th, 2025",
        text: "Expanded the Migrant Operations Center at Guantanamo Bay to full capacity.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/01/expanding-migrant-operations-center-at-naval-station-guantanamo-bay-to-full-capacity/"
    },
    {
        date: "January 29th, 2025",
        text: "Signed the Laken Riley Act into law, which will strip people - most notably any person who has immigrated to the United States - of their right to due process.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/01/president-donald-j-trump-signed-s-5-into-law/"
    },
    {
        date: "January 29th, 2025",
        text: "Further mandates that the Secretary of Transportation and the Administrator of the Federal Aviation Administration (FAA) \"review all hiring decisions and changes to safety protocols made during the prior 4 years, and to take such corrective action as necessary to achieve [...] aviation safety.\"",
        link: "https://www.whitehouse.gov/presidential-actions/2025/01/immediate-assessment-of-aviation-safety/"
    },
    {
        date: "February 1st, 2025",
        text: "Placed tariffs of 10% on all Chinese goods, 25% on all goods from Canada and Mexico, with only a 10% tariff on Canadian oil exports.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/02/imposing-duties-to-address-the-flow-of-illicit-drugs-across-our-national-border/"
    },
    {
        date: "February 3rd, 2025",
        text: "Withdrew the United States from the UN Human Rights Council (UNHRC) claiming they propagate antisemitism. Ordered a comprehensive review of the US's participation in the <i>UN Educational, Scientific, and Cultural Organization (UNESCO)</i> and the <i>UN Relief and Works Agency for Palestine Refugees in the Near East (UNRWA)</i>. The US will no longer fund UNHRC or UNRWA, and will not honor arrears for 2025.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/02/withdrawing-the-united-states-from-and-ending-funding-to-certain-united-nations-organizations-and-reviewing-united-states-support-to-all-international-organizations/"
    },
    {
        date: "February 5th, 2025",
        text: "Laid plans to cut direct funding and grants to educational institutions (under Title IX of the Education Amendments Act of 1972) that permit males to participate in female sports. Also directed the US Ambassador to the UN and the Secretary of State to directly promote changes within the UN and the International Olympics Committee (IOC) to enact rules prohibiting male participation in female divisions and leagues.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/02/keeping-men-out-of-womens-sports/"
    },
    {
        date: "February 6th, 2025",
        text: "Directed the heads of executive departments and agencies to review all funding that agencies provide to NGOs specifically to identify NGOs \"that actively undermine the security, prosperity, and safety of the American people.\"",
        link: "https://www.whitehouse.gov/presidential-actions/2025/02/memorandum-for-the-heads-of-executive-departments-and-agencies/"
    },
    {
        date: "February 6th, 2025",
        text: "Created the Task Force to Eradicate Anti-Christian Bias within the Department of Justice.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/02/eradicating-anti-christian-bias/"
    },
    {
        date: "February 4th, 2025",
        text: "Imposed sanctions on the International Criminal Court (ICC), of which the United States is not a member.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/02/imposing-sanctions-on-the-international-criminal-court/"
    },
    {
        date: "February 4th, 2025",
        text: "Ordered a comprehensive review of all current or pending firearms-related legislation that may impede upon the 2nd Amendment.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/02/protecting-second-amendment-rights/"
    },
    {
        date: "February 7th, 2025",
        text: "Established the White House Faith Office under the Domestic Policy Council, which includes appointing a \"Faith Liaison\" in many federal agencies.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/02/establishment-of-the-white-house-faith-office/"
    },
    {
        date: "February 9th, 2025",
        text: "Declared February 9th as \"Gulf of America Day\".",
        link: "https://www.whitehouse.gov/presidential-actions/2025/02/gulf-of-america-day-2025/"
    },
    {
        date: "February 10th, 2025",
        text: "Ended the use of paper straws in federal buildings and offices, and drafts penalties for states that still ban or penalize plastic straw purchases.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/02/ending-procurement-and-forced-use-of-paper-straws/"
    },
    {
        date: "February 10th, 2025",
        text: "Paused the Foreign Corrupt Practices Act (FCPA), which prohibits bribery and other corrupt forms of payment to foreign officials.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/02/pausing-foreign-corrupt-practices-act-enforcement-to-further-american-economic-and-national-security/"
    },
    {
        date: "February 10th, 2025",
        text: "Restored Section 232 tariffs, enacting a 25% steel and aluminum import tariff with no exceptions, claiming it to be a matter of national security. Previously, a number of the United States' neighbors and allies were exempt from this steel tariff.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/02/adjusting-imports-of-steel-into-the-united-states/"
    },
    {
        date: "February 11th, 2025",
        text: "Further outlined directives for federal executive agencies to enact reductions in force, specifically naming DEI teams and personnel as high-priority targets.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/02/implementing-the-presidents-department-of-government-efficiency-workforce-optimization-initiative/"
    },
    {
        date: "February 11th, 2025",
        text: "Established the President's Intelligence Advisory Board (PIAB) to further fuel Trump's \"America first\" initiative.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/02/president-trump-announces-the-presidents-intelligence-advisory-board/"
    },
    {
        date: "February 11th, 2025",
        text: "Increased the existing aluminum tariff from 10% to 25%, and removed several countries from the list of exemptions.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/02/adjusting-imports-of-aluminum-into-the-united-states/"
    },
    {
        date: "February 12th, 2025",
        text: "Directed the Secretaries of State to further align their hiring and retention policies with the \"America first\" initiative, targetting the release of employees who do not emphatically promote the President's message and values.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/02/one-voice-for-americas-foreign-relations/"
    },
    {
        date: "February 13th, 2025",
        text: "Signed in Robert F Kennedy Jr. - a notorious science denier and advocate of alternative medicines - as Secretary of the Department of Health and Human Services (HHS).",
        link: "https://www.whitehouse.gov/remarks/2025/02/remarks-by-president-trump-and-secretary-of-the-department-of-health-and-human-services-robert-f-kennedy-jr-during-swearing-in-ceremony/"
    },
    {
        date: "February 13th, 2025",
        text: "Established the President's Make America Healthy Again Commission, chaired by RFK Jr. Among other points in its mission statement, the commissions aims to crack down on many drugs, including anti-depressants, weight loss supplements, and antipsychotics. It also sets out to scrutinize existing educational programs around physical and mental health.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/02/establishing-the-presidents-make-america-healthy-again-commission/"
    },
    {
        date: "February 14th, 2025",
        text: "Established the National Energy Dominance Council. In summary, it will work to reduce reliance on renewable energy sources, reduce or eliminate directives and laws that inhibit the throughput of coal and oil energy productions, and cause further damage to the already-critical condition of global climate conditions.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/02/establishing-the-national-energy-dominance-council/"
    },
    {
        date: "February 15th, 2025",
        text: "Issued orders to reduce or eliminate federal funding for any educational institution that requires its students to receive the COVID-19 vaccine.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/02/keeping-education-accessible-and-ending-covid-19-vaccine-mandates-in-schools/"
    },
    {
        date: "February 18th, 2025",
        text: "Declared that all Independent Regulatory Agencies (IRAs, such as the Federal Reserve, the Securities and Exchange Commission (SEC), and the Federal Trade Commission (FTC)) shall establish a White House Liaison within their organizations, and that all such agencies are beholden to the President's or Attorney General's interpretation of the law for the executive branch.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/02/ensuring-accountability-for-all-agencies/"
    },
    {
        date: "February 19th, 2025",
        text: "Directed agency heads to coordinate with their DOGE Team Leads and the Director of OMB to identify any existing policies that may contradict the president's \"America First\" message. For example, it targets \"regulations that impose significant costs upon private parties that are not outweighed by public benefits\", and \"regulations that harm the national interest by [...] impeding technological innovation, infrastructure development, inflation reduction, research and development, economic development, energy production, land use, and foreign policy objectives\".",
        link: "https://www.whitehouse.gov/presidential-actions/2025/02/ensuring-lawful-governance-and-implementing-the-presidents-department-of-government-efficiency-deregulatory-initiative/"
    },
    {
        date: "February 19th, 2025",
        text: "Effectively neutered several federal agencies, including the Inter-American Foundation (IAF) and United States Institute of Peace, among others.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/02/commencing-the-reduction-of-the-federal-bureaucracy/"
    },
    {
        date: "February 25th, 2025",
        text: "Issued a vengeful memorandum against Covington & Buring LLP, a law firm who represented Special Counsel Jack Smith (and did so pro bono) when he brought two cases against the former president.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/02/suspension-of-security-clearances-and-evaluation-of-government-contracts/"
    },
    {
        date: "February 26th, 2025",
        text: "Directs each federal agency to create a centralized spending approval system (with guidance and participation from DOGE on its design and implementation), to review all current contracting policies, procedures, and personnel, and assigns each DOGE lead within those agencies to provide the respective director with a monthly montly report on contracting activities. To note, however; this does not apply to classified information or classified information systems.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/02/implementing-the-presidents-department-of-government-efficiency-cost-efficiency-initiative/"
    },
    {
        date: "March 1st, 2025",
        text: "Declared English as the official language of the United Stated. Revoked Executive Order 13166 of August 11, 2000 (Improving Access to Services for Persons with Limited English Proficiency), and directed the Attorney General to rescind any policy guidance documents issued persuant to Executive Order 13166.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/designating-english-as-the-official-language-of-the-united-states/"
    },
    {
        date: "March 1st, 2025",
        text: "Called for an immediate expansion to the availability of timber in America. Directed the Secretary of the Interior and Secretary of Agriculture to, adopt policies from other agencies to reduce or partially eliminate processes related to administrative approvals for timber production, forest management, and wildfire risk reduction treatments.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/immediate-expansion-of-american-timber-production/"
    },
    {
        date: "March 3rd, 2025",
        text: "Raised the tarriffs on Chinese goods outlined in Executive Order 14195 (Imposing Duties to Address teh Synthetic Opioid Supply Chain in the People's Republic of China) from 10% to 20% due to China's failure to comply with the aforementioned orders.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/further-amendment-to-duties-addressing-the-synthetic-opioid-supply-chain-in-the-peoples-republic-of-china/"
    },
    {
        date: "March 6th, 2025",
        text: "Amended the tariff on Canadian potash to 10% from 25%.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/amendment-to-duties-to-address-the-flow-of-illicit-drugs-across-our-northern-border-0c3c/"
    },
    {
        date: "March 6th, 2025",
        text: "Issued another executive order out of revenge for previous grievances by banning Perkins Coie LLP, who represented Hillary Clinton's campaign for president in 2016 and other democratic entities such as the Democratic National Convention, from receiving or continuing any contracts with the federal government and revoking all security clearances granted to Perkins' personnel.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/addressing-risks-from-perkins-coie-llp/"
    },
    {
        date: "March 6th, 2025",
        text: "Amended the tariff on Mexican potash to 10% from 25%.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/amendment-to-duties-to-address-the-flow-of-illicit-drugs-across-our-southern-border/"
    },
    {
        date: "March 7th, 2025",
        text: "Directed the Secretary of Education to propose revisions to the Public Service Load Forgiveness Program (PSLF). These revisions are to exclude organizations that aid immigrants, trans children, and legal protests.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/restoring-public-service-loan-forgiveness/"
    },
    {
        date: "March 14th, 2025",
        text: "Rescinded 18 more Biden-era Executive Orders, including orders addressing the COVID-19 response, minimum wage increases for some federal employees, and the advancement of human rights for LGBTQ people around the world.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/additional-recissions-of-harmful-executive-orders-and-actions/"
    },
    {
        date: "March 14th, 2025",
        text: "Issued another vindictive restriction on federal access of a law firm, this time the firm Paul, Weiss, Rifkind, Wharton & Garrison LLP (colloquially called Paul, Weiss). This is targetted at Mark Pomerantz, an attorney at the Manhattan District Attorney's office who prosecuted Trump in his 2023 trial. Pomerantz is a former employee of Paul, Weiss, but has not worked there for over a decade, according to the firm. (note: this was later undone by executive order 14244)",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/addressing-risks-from-paul-weiss/"
    },
    {
        date: "March 14th, 2025",
        text: "Announced the termincation of 7 more US Federal Agencies.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/continuing-the-reduction-of-the-federal-bureaucracy/"
    },
    {
        date: "March 15th, 2025",
        text: "Functionally declared war on Tren de Aragua, a Mexican cartel. This includes the authorizion of \"all lawful means to apprehend, restrain, secure, and remove Alien Enemies\".",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/invocation-of-the-alien-enemies-act-regarding-the-invasion-of-the-united-states-by-tren-de-aragua/"
    },
    {
        date: "March 19th, 2025",
        text: "Ordered further removel of any mentions of DEI practices from the hiring and tenure review materials in the Foreign Service.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/removing-discrimination-and-discriminatory-equity-ideology-from-the-foreign-service/"
    },
    {
        date: "March 20th, 2025",
        text: "Closed the federal Department of Education.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/improving-education-outcomes-by-empowering-parents-states-and-communities/"
    },
    {
        date: "March 20th, 2025",
        text: "Ordered reviews and revisements of existing policies surrounding the extraction, use, and waste treatment of critical mineral resources, which will undoubtedly lead to more lax policies around the treatment of environmentally-unfriendly waste as consistent with other executive actions from the second Trump administration.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/immediate-measures-to-increase-american-mineral-production/"
    },
    {
        date: "March 20th, 2025",
        text: "Granted full access to Federal officials appointed by the President or Agency Heads (or their designees) to all unclassified agency record, data, software systems, and IT systems. This effectively removes any restrictive leashes on DOGE in their access to digital systems of federal offices, save for the necessary restrictions on classified information.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/stopping-waste-fraud-and-abuse-by-eliminating-information-silos/"
    },
    {
        date: "March 22nd, 2025",
        text: "In another revenge plot, revoked classified information access for 15+ members of of President Biden's administration and President Biden's family. This blocks these individuals from ever regaining security clearance again, save for a revocation of this executive order.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/rescinding-security-clearances-and-access-to-classified-information-from-specified-individuals/"
    },
    {
        date: "March 25th, 2025",
        text: "Imposed a 25% tariff on any goods from any country that imports Venezuelan oil. This is in retalliation for Venezuela abetting the Tren de Aragua cartel.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/imposing-tariffs-on-countries-importing-venezuelan-oil/"
    },
    {
        date: "March 25th, 2025",
        text: "Imposed restrictions on the law firm Jenner & Block, which has represented (pro bono, in some cases) President Trump's political opponents. This exeucitve order and several others like it are subject of great scrutiny by the federal judiciary.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/addressing-risks-from-jenner-block/"
    },
    {
        date: "March 26th, 2025",
        text: "Granted a full pardon to Devon Archer, a former business partner of Hunter Biden's who turned \"full MAGA\" to ingratiate Trump. He was convicted in 2022 of defrauding investors and a Native American tribal entity of tens of millions of dollars.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/executive-grant-of-clemency-for-devon-archer/"
    },
    {
        date: "March 26th, 2025",
        text: "Applied at 25% tariff on imported consumer vehicles and vehicle parts in a continued effort to embolden the American auto manufacturer industry.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/adjusting-imports-of-automobiles-and-autombile-parts-into-the-united-states/"
    },
    {
        date: "March 27th, 2025",
        text: "Imposed restrictions on the law firm Wilmer Cutler Pickering Hale and Dorr (WilmerHale, colloquially).",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/addressing-risks-from-wilmerhale/"
    },
    {
        date: "March 27th, 2025",
        text: "\"Un-woked\" the Smithsonian museum in its entirety.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/restoring-truth-and-sanity-to-american-history/"
    },
    {
        date: "March 27th, 2025",
        text: "Deemed a number of federal agencies (including the Department of State, Department of Justice, Department of Veterans Affairs, Department of the Treasury, and many more) have as a primary function intelligence, counterintelligence, investigative, or national security work, and are thusly excluded from the provisions accorded in 5 USC Ch. 71 LABOR-MANAGEMENT RELATIONS, which affords federal employees the right to form labor organizations and collectively bargain. Put simply, banned many federal employees from unionizing.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/exclusions-from-federal-labor-management-relations-programs/"
    },
    {
        date: "March 31st, 2025",
        text: "Established the office of the United States Investment Accelerator - an office within the Deparment of Commerce to \"facilititate and accelerate investments above $1 billion in the United States by assisting investors as they navigate United Status Government regulatory processes\", which includes possible increases to access of America's national resources and reducing regulatory barriers. This office aids not only domestic investors, but also foreign investors.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/establishing-the-united-states-investment-accelerator/"
    },
    {
        date: "April 2nd, 2025",
        text: "Established a whopping number of tarriffs on more than two dozen foreign nations as recompense for the massive trade deficit between the United Status and these nations. Ad valorem tariff rates vary up to 60%.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/04/regulating-imports-with-a-reciprocal-tariff-to-rectify-trade-practices-that-contribute-to-large-and-persistent-annual-united-states-goods-trade-deficits/"
    },
    {
        date: "April 8th, 2025",
        text: "Directed the Attorney General to identify all state and local laws promoting climate-conscious energy production, and to \"take all appropriate action to stop the enforcement of [such laws]\", or to recommend to the President additional actions to otherwise eliminate the enforcement of such laws. This is all pursuant to Executive Order 14156 \"Declaring a National Energy Emergency\" and Executive Order 14154 \"Unleashing American Energy\".",
        link: "https://www.whitehouse.gov/presidential-actions/2025/04/protecting-american-energy-from-state-overreach/"
    },
    {
        date: "April 8th, 2025",
        text: "Altered the wording of several prior Executive Orders to denote coal as a mineral. Aside from the fact that coal is scientifically classified as a sedimentary rock and not as a mineral (<a href=\"https://main.wsgs.wyo.gov/energy/coal/what-is-coal\" target=\"_blank\" rel=\"noopener noreferrer\">WSGS, 2025</a>), this entitles coal to a relaxation of several regulations pertaining to ecological sustainability as specified in Executive Order 14241 \"Immediate Measures to Increase American Mineral Production\". This also opens up federal lands for coal extraction and directs several agencies and federal departments to eradicate or otherwise disincentivize policies, initiatives, and organizations that seek to reduce America's coal dependency in favor of cleaner alternatives.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/04/reinvigorating-americas-beautiful-clean-coal-industry-and-amending-executive-order-14241/"
    },
    {
        date: "April 8th, 2025",
        text: "Majorly increased tariffs against China, from 34% to 84% on most items.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/04/amendment-to-recipricol-tariffs-and-updated-duties-as-applied-to-low-value-imports-from-the-peoples-republic-of-china/"
    },
    {
        date: "April th, 2025",
        text: "",
        link: ""
    },
    {
        date: "April th, 2025",
        text: "",
        link: ""
    },
    {
        date: "April th, 2025",
        text: "",
        link: ""
    },
    {
        date: "April th, 2025",
        text: "",
        link: ""
    },
]

function addToListOfOffenses(offense) {
    return `<tr>
            <td>${offense.date}</td>
            <td>${offense.text} (<a href="${offense.link}" target="_blank" rel="noopener noreferrer">link</a>)</td>
            </tr>`
}

function addAllOffensesToList()
{
    let listHTML = ""
    for (let index = offenses.length - 1; index > 0; index--) {
        listHTML += addToListOfOffenses(offenses[index])
    }

    $(".offenses").html(listHTML)
}
