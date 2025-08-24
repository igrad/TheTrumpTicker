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
        text: "Directed the heads of executive departments and agencies to review all funding that agencies provide to Non-Governmental Organizations (NGOs). It also aims to identify NGOs \"that actively undermine the security, prosperity, and safety of the American people.\"",
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
        text: "Ordered a comprehensive review of all current or pending firearms-related legislation that may impede upon the 2nd Amendment (subjective).",
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
        text: "Directed the Secretaries of State to further align their hiring and retention policies with the President's \"America first\" initiative, targetting the release of employees who do not emphatically promote the President's message and values.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/02/one-voice-for-americas-foreign-relations/"
    },
    {
        date: "February 13th, 2025",
        text: "Signed in Robert F Kennedy Jr. (a notorious science denier and advocate of alternative medicines) as Secretary of the Department of Health and Human Services (HHS).",
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
        text: "Neutered several federal agencies, including the Inter-American Foundation (IAF) and United States Institute of Peace, among others.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/02/commencing-the-reduction-of-the-federal-bureaucracy/"
    },
    {
        date: "February 25th, 2025",
        text: "Issued a vengeful memorandum against Covington & Buring LLP, a law firm who represented Special Counsel Jack Smith (and did so pro bono) when he brought two cases against the former president.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/02/suspension-of-security-clearances-and-evaluation-of-government-contracts/"
    },
    {
        date: "February 26th, 2025",
        text: "Directs each federal agency to create a centralized spending approval system (with guidance and participation from DOGE on its design and implementation), to review all current contracting policies, procedures, and personnel, and assigns each DOGE lead within those agencies to provide the respective director with a monthly report on contracting activities. To note, however; this does not apply to classified information or classified information systems.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/02/implementing-the-presidents-department-of-government-efficiency-cost-efficiency-initiative/"
    },
    {
        date: "March 1st, 2025",
        text: "Declared English as the official language of the United Stated. Revoked Executive Order 13166 of August 11, 2000 (Improving Access to Services for Persons with Limited English Proficiency), and directed the Attorney General to rescind any policy guidance documents issued persuant to Executive Order 13166.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/designating-english-as-the-official-language-of-the-united-states/"
    },
    {
        date: "March 1st, 2025",
        text: "Called for an immediate expansion to the availability of timber in America. Directed the Secretary of the Interior and Secretary of Agriculture to adopt policies from other agencies to reduce or partially eliminate processes related to administrative approvals for timber production, forest management, and wildfire risk reduction treatments.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/immediate-expansion-of-american-timber-production/"
    },
    {
        date: "March 3rd, 2025",
        text: "Raised the tariffs on Chinese goods outlined in Executive Order 14195 (Imposing Duties to Address teh Synthetic Opioid Supply Chain in the People's Republic of China) from 10% to 20% due to China's failure to comply with the aforementioned orders.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/further-amendment-to-duties-addressing-the-synthetic-opioid-supply-chain-in-the-peoples-republic-of-china/"
    },
    {
        date: "March 6th, 2025",
        text: "Amended the tariff on Canadian potash to 10% from 25%.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/amendment-to-duties-to-address-the-flow-of-illicit-drugs-across-our-northern-border-0c3c/"
    },
    {
        date: "March 6th, 2025",
        text: "Issued another executive order out of revenge for previous grievances by banning Perkins Coie LLP (who represented Hillary Clinton's campaign for president in 2016 and other democratic entities such as the Democratic National Convention) from receiving or continuing any contracts with the federal government and revoking all security clearances granted to Perkins' personnel.",
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
        text: "Issued another vindictive restriction on federal access of a law firm: this time the firm Paul, Weiss, Rifkind, Wharton & Garrison LLP (colloquially called Paul, Weiss). This is targetted at Mark Pomerantz, an attorney at the Manhattan District Attorney's office who prosecuted Trump in his 2023 trial. Pomerantz is a former employee of Paul, Weiss, but has not worked there for over a decade, according to the firm.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/addressing-risks-from-paul-weiss/"
    },
    {
        date: "March 14th, 2025",
        text: "Announced the termination of 7 more US Federal Agencies.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/continuing-the-reduction-of-the-federal-bureaucracy/"
    },
    {
        date: "March 15th, 2025",
        text: "Declared war on Tren de Aragua, a Mexican cartel. This includes the authorizion of \"all lawful means to apprehend, restrain, secure, and remove Alien Enemies\".",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/invocation-of-the-alien-enemies-act-regarding-the-invasion-of-the-united-states-by-tren-de-aragua/"
    },
    {
        date: "March 19th, 2025",
        text: "Ordered further removel of any mentions of DEI practices from the hiring and tenure review materials in the Foreign Service.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/removing-discrimination-and-discriminatory-equity-ideology-from-the-foreign-service/"
    },
    {
        date: "March 20th, 2025",
        text: "Shuttered the federal Department of Education.",
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
        text: "In another revenge plot, revoked classified information access for 15+ members of President Biden's administration family. This blocks these individuals from ever regaining security clearance again, save for a revocation of this executive order.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/rescinding-security-clearances-and-access-to-classified-information-from-specified-individuals/"
    },
    {
        date: "March 25th, 2025",
        text: "Imposed a 25% tariff on goods from any country that imports Venezuelan oil. This is in retalliation for Venezuela abetting the Tren de Aragua cartel.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/imposing-tariffs-on-countries-importing-venezuelan-oil/"
    },
    {
        date: "March 25th, 2025",
        text: "Imposed restrictions on the law firm Jenner & Block, which has represented (pro bono, in some cases) President Trump's political opponents. This executive order and several others like it are subject of great scrutiny by the federal judiciary.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/addressing-risks-from-jenner-block/"
    },
    {
        date: "March 26th, 2025",
        text: "Granted a full pardon to Devon Archer, a former business partner of Hunter Biden's who turned \"full MAGA\" to ingratiate Trump. He was convicted in 2022 of defrauding several investors and a Native American tribal entity of tens of millions of dollars.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/executive-grant-of-clemency-for-devon-archer/"
    },
    {
        date: "March 26th, 2025",
        text: "Applied a 25% tariff on imported consumer vehicles and vehicle parts in a continued effort to embolden the American auto manufacturer industry.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/adjusting-imports-of-automobiles-and-autombile-parts-into-the-united-states/"
    },
    {
        date: "March 27th, 2025",
        text: "Imposed restrictions on the law firm Wilmer Cutler Pickering Hale and Dorr (WilmerHale, colloquially).",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/addressing-risks-from-wilmerhale/"
    },
    {
        date: "March 27th, 2025",
        text: "\"Un-woked\" the Smithsonian museum.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/restoring-truth-and-sanity-to-american-history/"
    },
    {
        date: "March 27th, 2025",
        text: "Deemed a number of federal agencies (including the Department of State, Department of Justice, Department of Veterans Affairs, Department of the Treasury, and many more) to have, as a primary function, intelligence, counterintelligence, investigative, or national security work, and are thusly excluded from the provisions accorded in 5 USC Ch. 71 LABOR-MANAGEMENT RELATIONS, which affords federal employees the right to form labor organizations and collectively bargain. Put simply, banned many federal employees from unionizing.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/exclusions-from-federal-labor-management-relations-programs/"
    },
    {
        date: "March 31st, 2025",
        text: "Established the office of the United States Investment Accelerator - an office within the Department of Commerce to \"facilitate and accelerate investments above $1 billion in the United States by assisting investors as they navigate United Status Government regulatory processes\", which includes possible increases to access of America's national resources and reducing regulatory barriers. This office aids both domestic and foreign investors.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/03/establishing-the-united-states-investment-accelerator/"
    },
    {
        date: "April 2nd, 2025",
        text: "Established a whopping number of tarriffs on more than two dozen foreign nations as recompense for the trade deficit between the United Status and these nations. Ad valorem tariff rates vary up to 60%.",
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
        date: "April 9th, 2025",
        text: "Greatly oversimplified the definition of a showerhead as it pertains to safety and efficiency regulations established under Obama and Biden administrations.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/04/maintaining-acceptable-water-pressure-in-showerheads/"
    },
    {
        date: "April 9th, 2025",
        text: "Ordered several energy-related federal agencies to insert a sunset clause into numerous environmentalism-focused acts. After the declared sunset date, these acts will be considered nullified. Such acts include the Energy Policy Act (of both 1992 and 2005), the Nuclear Waste Policy Act of 1982, the Marine Mammal Protection Act of 1972, and perhaps most notably the Endangered Species Act of 1973.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/04/zero-based-regulatory-budgeting-to-unleash-american-energy/"
    },
    {
        date: "April 9th, 2025",
        text: "Directed the enhanced production of cargo ships, loading and unloading facilities, and associated infrastructure to decrease the United States' reliance on Chinese-made freighters and utilities. Combined with the other Executive Orders from this day, it likely spells major devastation to numerous maritime ecosystems already in critical condition (speculative).",
        link: "https://www.whitehouse.gov/presidential-actions/2025/04/restoring-americas-maritime-dominance/"
    },
    {
        date: "April 9th, 2025",
        text: "Directed the Department of Defense (DoD) to reform the processes for acquiring commercial solutions and contracts for defense purposes. Put another way, paving the way for the federal government to purchase more war-ready systems from the private sector.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/04/modernizing-defense-acquisitions-and-spurring-innovation-in-the-defense-industrial-base/"
    },
    {
        date: "April 9th, 2025",
        text: "Issued another Executive Order against a law firm, this time against Susman Godfrey, who represented Dominion Voting Systems in a defamatioon lawsuit filed against Fox News over the baseless claims produced about the 2020 election.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/04/addressing-risks-from-susman-godfrey/"
    },
    {
        date: "April 9th, 2025",
        text: "Issued retributive actions against Chris Krebs, former CISA head who, according to the current administration, \"weaponized and abused his Government authority [via the] censorship of disfavored speech implication in the 2020 election and COVID-19 pandemic.\" CISA, under Krebs' leadership, combated falsehoods and disinformation issued by Trump's first administration and several conservative outlets.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/04/addressing-risks-from-chris-krebs-and-government-censorship/"
    },
    {
        date: "April 9th, 2025",
        text: "Issued retributions against Miles Taylor, a former George W. Bush and Trump aid as an administrative staff assistant in the Department of Homeland Security. Taylor wrote a New York Times op-ed anonymously and wrote a book under the pseudonym \"Anonymous\" that was highly critical of Trump, and announced his penmanship just days before the 2020 election.\"",
        link: "https://www.whitehouse.gov/presidential-actions/2025/04/addressing-risks-associated-with-an-egregious-leaker-and-disseminator-of-falsehoods/"
    },
    {
        date: "April 9th, 2025",
        text: "Raised tariffs on China to 125%.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/04/modifying-reciprocal-tariff-rates-to-reflect-trading-partner-retaliation-and-alignment/"
    },
    {
        date: "April 15th, 2025",
        text: "Directed the Secretaries of Labor, HHS, Homeland Security, and the Commissioner of Social Security to ensure that ineligible aliens are not receiving funds from Social Security. Given that this is already a provision of the Social Security Act, one can only assume that the intent is to investigate existing beneficiaries in search of anyone wrongfully receiving Socal Security paychecks.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/04/preventing-illegal-aliens-from-obtaining-social-security-act-benefits/"
    },
    {
        date: "April 15th, 2025",
        text: "Issued directives to slim down the Federal Acquisition Regulation (FAR), presumably to streamline and expediate the process of federal acquisition of commercial defense solutions.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/04/restoring-common-sense-to-federal-procurement/"
    },
    {
        date: "April 17th, 2025",
        text: "Lifted the ban on commercial fishing in the Pacific Remote Islands Marine National Monument (PRIMNM), which was established in 2009 to protect approximately 490,000 square miles of open ocean, coral reef, and island habitats including seven wildlife refuges.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/04/unleashing-american-commercial-fishing-in-the-pacific/"
    },
    {
        date: "April 17th, 2025",
        text: "Directed heads of several agencies to collaborate on reviewing and, where applicable, removing restrictions on fishing for consumer seafood. This will, presumably, lead to an increase in overfishing and environmental mismanagement.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/04/restoring-american-seafood-competitiveness/"
    },
    {
        date: "April 23rd, 2025",
        text: "Called for an expansion of access to seabed minerals, specifically in the private sector. Such minerals include nickel, cobalt, copper, and even uranium.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/04/unleashing-americas-offshore-critical-minerals-and-resources/"
    },
    {
        date: "April 28th, 2025",
        text: "Directed federal agency heads to withhold federal dollars from sanctuary cities and states.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/04/protecting-american-communities-from-criminal-aliens/"
    },
    {
        date: "April 28th, 2025",
        text: "Directed the executive branch to promote increased funding and protections for law enforcement agencies, including improved pay and benefits for officers, strengthened and expanded legal protections for officers, and more severe punishments for crimes against officers. This order also, as has been noticed by many people online since its signing, provisions \"excess military and national security assets in local jurisdictions to assist State and local law enforcement.\"",
        link: "https://www.whitehouse.gov/presidential-actions/2025/04/strengthening-and-unleashing-americas-law-enforcement-to-pursue-criminals-and-protect-innocent-citizens/"
    },
    {
        date: "May 1st, 2025",
        text: "Established the Religious Liberty Commission, which aims to advise the White House Faith Office and the Domestic Policy Council on religious liberty policies. The Commission itself is only designed to gather information and to advise, but it has been tasked with advising on a number of controversial topics, such as \"conscience protections in the health care field and concerning vaccine mandates\", \"parents' authority to direct the care, upbringing, and education of their children\", and \"the right to choose a religious education\". This very plainly translates to healthcare workers refusing to administer vaccines for religious purposes, schools being forced to deadname and/or misgender children at their parents' discretion, and the further spread of blunderous school voucher programs.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/05/establishment-of-the-religious-liberty-commission/"
    },
    {
        date: "May 1st, 2025",
        text: "Ended federal funding for PBS and NPR.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/05/ending-taxpayer-subsidization-of-biased-media/"
    },
    {
        date: "May 5th, 2025",
        text: "Ended federal NIH funding of nearly all gain-of-function research in foreign nations, specifically those in \"countries of concern (e.g. China), or in other countries where there is not adequate oversight to ensure that the countries are compliant with United States oversight standards and policies\"",
        link: "https://www.whitehouse.gov/presidential-actions/2025/05/improving-the-safety-and-security-of-biological-research/"
    },
    {
        date: "May 5th, 2025",
        text: "Called for the rapid expansion of pharmaceutical production facilities. This includes commanding the Administrator of the Environmental Protection Agency (EPA) to streamline inspection and review processes for new pharma production sites to \"maximize the timeliness and predictability of agency review.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/05/regulatory-relief-to-promote-domestic-production-of-critical-medicines/"
    },
    {
        date: "May 9th, 2025",
        text: "Directed the federal register to expedite the process of publishing executive orders to enhance Trump's agenda of deregulation.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/05/increasing-efficiency-at-the-office-of-the-federal-register/"
    },
    {
        date: "May 9th, 2025",
        text: "Blamed J.B. Pritzker for the stalls on the Brandon Road Interbasin Project, even after the Trump administration withheld federal dollars from the Illinois DNR and made no assurances that they would honor their commitment to provide Illinois with additional funding for the project.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/05/protecting-the-great-lakes-from-invasive-carp/"
    },
    {
        date: "May 9th, 2025",
        text: "Directed several agency heads to rescind or otherwise nullify the water utilization provisions of the Energy Policy Act of 1992. Some of the mentioned regulations are around water usage for consumer products like sinks, shower heads, urinals and toilets, etc.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/05/rescission-of-useless-water-pressure-standards/"
    },
    {
        date: "May 12th, 2025",
        text: "Announced a mutual 90-day hold on tariffs with China (though with a lingering 10% tariff). China has made no concessions, admissions, or other repentance as demanded by Trump when the tariffs were first introduced, which further adds to the slapstick blunder of a mess that is 47's foreign trade policy.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/05/modifying-reciprocal-tariff-rates-to-reflect-discussions-with-the-peoples-republic-of-china/"
    },
    {
        date: "May 22nd, 2025",
        text: "Accepted a $400 million Boeing 747 Jetliner as a gift from Qatar to be used as the new Air Force One. This has raised serious ethical concerns, and has been estimated to cost an additional $1 billion or more in taxpayer dollars to refit it for proper use as Air Force One.",
        link: "https://www.reuters.com/business/aerospace-defense/us-formally-accepts-luxury-jet-qatar-trump-new-york-times-2025-05-21/"
    },
    {
        date: "May 23rd, 2025",
        text: "Issued a verbose and self-asserting executive order stating that scientific data and research gathered or used by the government should be transparent and without bias. Additionally, it states \"Where employees produce or use scientific information to inform policy or legal determinations they must use science that comports with the legal standards applicable to those determinations, including when agencies evaluate the realistic or reasonably foreseeable effects of an action.\" That's a wordy way of saying \"the use of any policy-informing data is subject to the whims of executive employees.\"",
        link: "https://www.whitehouse.gov/presidential-actions/2025/05/restoring-gold-standard-science/"
    },
    {
        date: "May 23rd, 2025",
        text: "Called for the expansion of production of many types of uranium (including weapons-grade uranium), increased nuclear energy production, and legislation to support transporting nuclear materials and waste both domestically and abroad.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/05/reinvigorating-the-nuclear-industrial-base/"
    },
    {
        date: "May 23rd, 2025",
        text: "Ordered a review of EPA nuclear testing guidelines in cooperation with DOGE team leads, which almost certainly means more lax testing guidelines in keeping with other executive orders surrounding the declared energy crisis.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/05/reforming-nuclear-reactor-testing-at-the-department-of-energy/"
    },
    {
        date: "May 23rd, 2025",
        text: "Called for a reform of the nuclear regulatory commission, including all but eliminating the Advisory Committee on Reactor Safeguards (ACRS).",
        link: "https://www.whitehouse.gov/presidential-actions/2025/05/ordering-the-reform-of-the-nuclear-regulatory-commission/"
    },
    {
        date: "June 7th, 2025",
        text: "Ordered 2,000+ National Guard personnel to Los Angeles to protect ICE agents from protesters. This is the first time National Guard troops have been deployed for protest deterrence since the 1992 Rodney King riots in LA.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/06/department-of-defense-security-for-the-protection-of-department-of-homeland-security-functions/"
    },
    {
        date: "June 10th, 2025",
        text: "Deployed 700 US Marines to LA to aid in protest deterrence and protection of ICE agents. This is the first time Marines have been deployed for domestic law enforcement purposes since the 1992 Rodney King riots in LA.",
        link: "https://www.reuters.com/world/us/trump-mark-army-milestone-troops-deployed-los-angeles-2025-06-10/"
    },
    {
        date: "June 15th, 2025",
        text: "Directed ICE officials to \"do all in their power to achieve the very important goal of delivering the single largest Mass Deportation Program in History.\" For reference, the largest state-run deportation in global history is the 1939-1945 Nazi regime's deportation of Jews, Slavs, and others totalling an estimated 11+ million. In US history specifically, Eisenhower's Operation Wetback in 1954 was credited with up to 1.1 million deportations of Mexican nationals, though that number is likely inflated according to experts.",
        link: "https://apnews.com/article/trump-ice-deportations-protests-65fa8d64ea12a78a0ee0ebeea008ee4d"
    },
    {
        date: "June 19th, 2025",
        text: "Extended the Tiktok enforcement delay to September 17, 2025.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/06/further-extending-the-tiktok-enforcement-delay/"
    },
    {
        date: "June 20th, 2025",
        text: "Called for a special prosecutor to investigate Biden's victory in the 2020 presidential election in a social media post.",
        link: "https://apnews.com/article/trump-special-prosecutor-2020-biden-election-194b3d49f49b0345f77873fc34b4dcc5"
    },
    {
        date: "June 20th, 2025",
        text: "Signed S.J. Res. 31 into law, which provides congressional disapproval (aka overrides) the EPA's reclassification of several Major Sources to Area Sources.",
        link: "https://www.whitehouse.gov/briefings-statements/2025/06/the-president-signed-into-law-s-j-res-13-and-s-j-res-31/"
    },
    {
        date: "June 21st, 2025",
        text: "Dropped ordinance on three major Iranian nuclear processing plants, including Fordow, opening up the can of worms that the United Stated only recently closed in the middle east.",
        link: "https://www.whitehouse.gov/articles/2025/06/what-they-are-saying-president-trumps-display-of-peace-through-strength/"
    },
    {
        date: "June 30th, 2025",
        text: "Issued a memoranda directing several agencies to further simplify and deregulate the application process for the extraction and exploitation of critical minerals and materials used in energy production processes.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/06/simplifying-the-funding-of-energy-infrastructure-and-critical-mineral-and-material-projects/"
    },
    {
        date: "June 30th, 2025",
        text: "Used the Caesar Act to waive sanctions imposed on Syria following its change to new leadership under President Ahmed al-Sharaa, a former ally of Al Qaeda who welcomed foreign jihadists, planned and directed suicide bombers to attack military outposts, and vowed to create an Islamic state.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/06/providing-for-the-revocation-of-syria-sanctions/"
    },
    {
        date: "June 30th, 2025",
        text: "Directed many agency heads to identify policies and procedures regarding the United States' funding and financial aide to Cuba, calling for more direct funding to the people of Cuba and less funding of its government. (Speculation: this will lead to abject poverty in Cuba in the coming years, at which point the US federal government will \"step in\" to assist.)",
        link: "https://www.whitehouse.gov/presidential-actions/2025/06/national-security-presidential-memorandum-nspm-5/"
    },
    {
        date: "July 3rd, 2025",
        text: "Announced the Make America Beautiful Again initiative (only months after revoking and rescinding many policies that protect our planet) which aims to increase tourism of national parks, increase the associated fees for non-US residents at national parks, and explicitly outlines granting \"American residents preferential treatment with respect to any remaining recreational access rules, including permitting or lottery rules\". This executive order also rescinds Biden's memorandum \"Promoting Diversity and Inclusion in Our National Parks, National Forests, and Other Public Lands and Waters\" (<a href=\"https://www.federalregister.gov/documents/2017/01/19/2017-01383/promoting-diversity-and-inclusion-in-our-national-parks-national-forests-and-other-public-lands-and\" target=\"_blank\" rel=\"noopener noreferrer\">link</a>) which mostly just directed agency heads to diversify their work force and provide ample opportunity for people of diverse background to work in our public parks.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/07/making-america-beautiful-again-by-improving-our-national-parks/"
    },
    {
        date: "July 7th, 2025",
        text: "Following the passage of the abysmally named \"One Big Beautiful Bill\" Act, called on the Secretary of the Treasury to eliminate all production and investment tax credits for clean and renewable energy sources like wind and solar.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/07/ending-market-distorting-subsidies-for-unreliable-foreign%e2%80%91controlled-energy-sources/"
    },
    {
        date: "July 17th, 2025",
        text: "Exempted 8 Taconite iron ore processing facilities from the \"Taconite Rule\" - a ruling pursuant to the Clean Air Act - which placed emissions-control requirements on such facilities.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/07/regulatory-relief-for-certain-stationary-sources-to-promote-american-iron-ore-processing-security/"
    },
    {
        date: "July 17th, 2025",
        text: "Exempted 53 chemical manufacturing facilities from the HON Rule, which placed emissions-control requirements on such facilities.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/07/regulatory-relief-for-certain-stationary-sources-to-promote-american-chemical-manufacturing-security/"
    },
    {
        date: "July 17th, 2025",
        text: "Exempted 9 coal-fired power plants from the \"National Emissions Standards for Hazardous Air Pollutants: Coal- and Oil-Fired Electric Utility Steam Generating Units Review of the Residual Risk and Technology Review\", which placed emissions-control requirements on such facilities.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/07/regulatory-relief-for-certain-stationary-sources-to-further-promote-american-energy/"
    },
    {
        date: "July 17th, 2025",
        text: "Exempted 41 commercial sterilization facilities from the \"EtO Rule\", which placed emissions-control requirements on such facilities.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/07/regulatory-relief-for-certain-stationary-sources-to-promote-american-security-with-respect-to-sterile-medical-equipment/"
    },
    {
        date: "July 23rd, 2025",
        text: "In a bizarre yet on-brand executive order, declared that the federal government shall not procure AI models that promote or include \"woke\" practices, such as promoting or informing about concepts like transgenderism, DEI, critical race theory, or systemic racism.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/07/preventing-woke-ai-in-the-federal-government/"
    },
    {
        date: "July 23rd, 2025",
        text: "Launched an initiative to provide grants and funding to AI mega-startups, create categorical exclusions to environmental regulations for qualifying AI projects, and expedite the review and permit processes for such projects.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/07/accelerating-federal-permitting-of-data-center-infrastructure/"
    },
    {
        date: "July 23rd, 2025",
        text: "Called for the creation of the American AI Exports Program to accelerate American AI dominance.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/07/promoting-the-export-of-the-american-ai-technology-stack/"
    },
    {
        date: "July 24th, 2025",
        text: "Called on several agency heads to impose a number of broad changes to how homeless people are treated, including stricter enforcement or adoption of policies to imprison more homeless people, reduce federal aid dollars to harm reduction and safe consumption programs, and reprioritizing CCBHC care to focus on short-term bandaid fixes instead of long-term solutions for homeless people and people suffering from addiction or substance abuse. (Anecdotal: mental health professionals have called this a \"butchering of the system\". This is about the furthest you can get from a \"listen to the experts\" approach.)",
        link: "https://www.whitehouse.gov/presidential-actions/2025/07/ending-crime-and-disorder-on-americas-streets/"
    },
    {
        date: "July 30th, 2025",
        text: "Imposed an additional 40% tariff on Brazilian imports. This does, however, include a lengthy list of exceptions, so it's hard to say what actually <i>is</i> subject to tariffs.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/07/addressing-threats-to-the-us/"
    },
    {
        date: "July 30th, 2025",
        text: "Set a 50% import tariff on copper and copper-derivative products, save for a handful of exceptions.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/07/adjusting-imports-of-copper-into-the-united-states/"
    },
    {
        date: "July 30th, 2025",
        text: "Lifted exemptions and imposed additional fees and duties on international postal shipments, some of which include additional fees of up to $200 USD.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/07/suspending-duty-free-de-minimis-treatment-for-all-countries/"
    },
    {
        date: "July 31st, 2025",
        text: "Raised or increased several tariff rates by 10-40% on all imported goods (save for exemptions).",
        link: "https://www.whitehouse.gov/presidential-actions/2025/07/suspending-duty-free-de-minimis-treatment-for-all-countries/"
    },
    {
        date: "July 31st, 2025",
        text: "Raised existing tariffs on Canadian imports from 25% to 35%, and imposed a new 40% tariff on items originating from Mexico that were routed through other nations to evade US tariffs on Mexican products.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/07/amendment-to-duties-to-address-the-flow-of-illicit-drugs-across-our-northern-border-9350/"
    },
    {
        date: "August 11th, 2025",
        text: "Declared a state of emergency in Washington D.C. This coming after D.C. hit a 30-year low for violent crime rates (<a href=\"https://www.justice.gov/usao-dc/pr/violent-crime-dc-hits-30-year-low\" target=\"_blank\" rel=\"noopener noreferrer\">source</a>(https://www.justice.gov/usao-dc/pr/violent-crime-dc-hits-30-year-low))",
        link: "https://www.whitehouse.gov/presidential-actions/2025/08/declaring-a-crime-emergency-in-the-district-of-columbia/"
    },
    {
        date: "August 11th, 2025",
        text: "Mobilized the National Guard in Washington D.C.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/08/restoring-law-and-order-in-the-district-of-columbia/"
    },
    {
        date: "August 13th, 2025",
        text: "Revoked Executive Order 14036 \"Promoting Competition in the American Economy\" (July 9, 2021) (<a href=\"https://www.federalregister.gov/documents/2021/07/14/2021-15069/promoting-competition-in-the-american-economy\" target=\"_blank\" rel=\"noopener noreferrer\">link</a>), which established the White House Competition Council to review and act on unfair business competition practices in the nation.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/08/revocation-of-executive-order-on-competition/"
    },
    // {
    //     date: "August th, 2025",
    //     text: "",
    //     link: ""
    // },
    // {
    //     date: "August th, 2025",
    //     text: "",
    //     link: ""
    // },
    // {
    //     date: "August th, 2025",
    //     text: "",
    //     link: ""
    // },
    // {
    //     date: "August th, 2025",
    //     text: "",
    //     link: ""
    // },
]

function addToListOfOffenses(offense) {
    return `<tr>
<td>${offense.date}</td>
<td>${offense.text} (<a href="${offense.link}" target="_blank" rel="noopener noreferrer">link</a>)</td>
</tr>`
}

let CurrentNumberDisplayed = 0;

let moreTextOptions = [
    "More?!",
    "Of course there's more...",
    "Even more...",
    "Unsurprisingly, there's more...",
    "There's always more...",
    "It just never ends, does it?",
    "Sorry, but there's more...",
    "But wait, there's more!"
]

let lastMoreTextIndex = -1;
function setMoreText() {
    let randomMoreTextIndex = lastMoreTextIndex;
    while (randomMoreTextIndex == lastMoreTextIndex) {
        randomMoreTextIndex = Math.floor(Math.random() * moreTextOptions.length);
    }

    let randomMoreText = moreTextOptions[randomMoreTextIndex];
    $("#offenses-more span").text(randomMoreText);

    lastMoreTextIndex = randomMoreTextIndex;
}

function add10OffensesToList()
{
    let listHTML = $(".offenses").html();
    let indexToReach = offenses.length - 1 - CurrentNumberDisplayed - 10;
    for (let index = offenses.length - 1 - CurrentNumberDisplayed;
    (index >= 0) && (index > indexToReach);
    index--) {
        listHTML += addToListOfOffenses(offenses[index])
        CurrentNumberDisplayed++;
    }

    $(".offenses").html(listHTML)
    if(CurrentNumberDisplayed == offenses.length) {
        $("#offenses-more").css("display", "none");
    }
}

function addAllOffensesToList()
{
    let listHTML = ""
    for (let index = offenses.length - 1; index > 0; index--) {
        listHTML += addToListOfOffenses(offenses[index])
    }

    $(".offenses").html(listHTML)
    $("#offenses-more").css("display", "none");
}
