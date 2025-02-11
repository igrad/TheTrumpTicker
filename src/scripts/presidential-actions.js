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
        text: "Restored Section 232 tarriffs, enacting a 25% steel and aluminum import tariff with no exceptions, claiming it to be a matter of national security. Previously, a number of the United States' neighbors and allies were exempt from this steel tarriff.",
        link: "https://www.whitehouse.gov/presidential-actions/2025/02/adjusting-imports-of-steel-into-the-united-states/"
    },
    // {
    //     date: "February th, 2025",
    //     text: "",
    //     link: ""
    // },
    // {
    //     date: "February th, 2025",
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

function addAllOffensesToList()
{
    let listHTML = ""
    for (let index = 0; index < offenses.length; index++) {
        listHTML += addToListOfOffenses(offenses[index])
    }

    $(".offenses").html(listHTML)
}
