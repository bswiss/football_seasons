// College Football data
var data = [{year: 2017,
player: 'Rashaad Penny',
yards: 2248,
school: 'San Diego State'},
{year: 2016,
player: 'Donnel Pumphrey',
yards: 2133,
'4school': 'San Diego State'},
{year: 2015,
player: 'Derrick Henry',
yards: 2219,
'4school': 'Alabama'},
{year: 2014,
player: 'Melvin Gordon',
yards: 2587,
'4school': 'Wisconsin'},
{year: 2013,
player: 'Andre Williams',
yards: 2177,
'4school': 'Boston College'},
{year: 2012,
player: "Ka'Deem Carey",
yards: 1929,
'4school': 'Arizona'},
{year: 2011,
player: 'Montee Ball',
yards: 1923,
'4school': 'Wisconsin'},
{year: 2010,
player: 'LaMichael James',
yards: 1731,
'4school': 'Oregon'},
{year: 2009,
player: 'Toby Gerhart',
yards: 1871,
'4school': 'Stanford'},
{year: 2008,
player: 'Donald Brown',
yards: 2083,
'4school': 'Connecticut'},
{year: 2007,
player: 'Kevin Smith',
yards: 2567,
'4school': 'Central Florida'},
{year: 2006,
player: 'Garrett Wolfe',
yards: 1928,
'4school': 'Northern Illinois'},
{year: 2005,
player: 'DeAngelo Williams',
yards: 1964,
'4school': 'Memphis'},
{year: 2004,
player: 'J.J. Arrington',
yards: 2018,
'4school': 'California'},
{year: 2003,
player: 'Darren Sproles',
yards: 1986,
'4school': 'Kansas State'},
{year: 2002,
player: 'Larry Johnson',
yards: 2087,
'4school': 'Penn State'},
{year: 2001,
player: 'Chance Kretschmer',
yards: 1732,
'4school': 'Nevada'},
{year: 2000,
player: 'LaDainian Tomlinson',
yards: 2158,
'4school': 'Texas Christian'},
{year: 1999,
player: 'Ron Dayne',
yards: 2034,
'4school': 'Wisconsin'},
{year: 1998,
player: 'Ricky Williams',
yards: 2124,
'4school': 'Texas'},
{year: 1997,
player: 'Ricky Williams',
yards: 1893,
'4school': 'Texas'},
{year: 1996,
player: 'Troy Davis',
yards: 2185,
'4school': 'Iowa State'},
{year: 1995,
player: 'Troy Davis',
yards: 2010,
'4school': 'Iowa State'},
{year: 1994,
player: 'Rashaan Salaam',
yards: 2055,
'4school': 'Colorado'},
{year: 1993,
player: 'LeShon Johnson',
yards: 1976,
'4school': 'Northern Illinois'},
{year: 1992,
player: 'Marshall Faulk',
yards: 1630,
'4school': 'San Diego State'},
{year: 1991,
player: 'Vaughn Dunbar',
yards: 1805,
'4school': 'Indiana'},
{year: 1990,
player: 'Darren Lewis',
yards: 1691,
'4school': 'Texas A&M'},
{year: 1989,
player: 'Anthony Thompson',
yards: 1793,
'4school': 'Indiana'},
{year: 1988,
player: 'Barry Sanders',
yards: 2628,
'4school': 'Oklahoma State'},
{year: 1987,
player: 'Craig Heyward',
yards: 1791,
'4school': 'Pittsburgh'},
{year: 1986, player: 'Paul Palmer', yards: 1866, '4school': 'Temple'},
{year: 1985,
player: 'Lorenzo White',
yards: 2066,
'4school': 'Michigan State'},
{year: 1984,
player: 'Keith Byars',
yards: 1764,
'4school': 'Ohio State'},
{year: 1983,
player: 'Mike Rozier',
yards: 2148,
'4school': 'Nebraska'},
{year: 1982,
player: 'Ernest Anderson',
yards: 1877,
'4school': 'Oklahoma State'},
{year: 1981,
player: 'Marcus Allen',
yards: 2427,
'4school': 'Southern California'},
{year: 1980,
player: 'George Rogers',
yards: 1781,
'4school': 'South Carolina'},
{year: 1979,
player: 'Charles White',
yards: 2050,
'4school': 'Southern California'},
{year: 1978,
player: 'Charles White',
yards: 1859,
'4school': 'Southern California'},
{year: 1977,
player: 'Earl Campbell',
yards: 1744,
'4school': 'Texas'},
{year: 1976,
player: 'Tony Dorsett',
yards: 2150,
'4school': 'Pittsburgh'},
{year: 1975,
player: 'Ricky Bell',
yards: 1957,
'4school': 'Southern California'},
{year: 1974,
player: 'Archie Griffin',
yards: 1695,
'4school': 'Ohio State'},
{year: 1973,
player: 'Mark Kellar',
yards: 1719,
'4school': 'Northern Illinois'},
{year: 1972,
player: 'Pete Van Valkenburg',
yards: 1386,
'4school': 'Brigham Young'},
{year: 1971,
player: 'Ed Marinaro',
yards: 1881,
'4school': 'Cornell'},
{year: 1970,
player: 'Don McCauley',
yards: 1863,
'4school': 'North Carolina'},
{year: 1969,
player: 'Leon Burns',
yards: 1659,
'4school': 'Long Beach State'},
{year: 1968,
player: 'O.J. Simpson',
yards: 1880,
'4school': 'Southern California'},
{year: 1967,
player: 'O.J. Simpson',
yards: 1543,
'4school': 'Southern California'},
{year: 1966, player: 'Ray McDonald', yards: 1329, '4school': 'Idaho'},
{year: 1965,
player: 'Mike Garrett',
yards: 1440,
'4school': 'Southern California'},
{year: 1964,
player: 'Brian Piccolo',
yards: 1044,
'4school': 'Wake Forest'},
{year: 1963,
player: 'Dave Casinelli',
yards: 1016,
'4school': 'Memphis'},
{year: 1962,
player: 'Preacher Pilot',
yards: 1247,
'4school': 'New Mexico State'},
{year: 1961,
player: 'Preacher Pilot',
yards: 1278,
'4school': 'New Mexico State'},
{year: 1960,
player: 'Bob Gaiters',
yards: 1338,
'4school': 'New Mexico State'},
{year: 1959,
player: 'Pervis Atkins',
yards: 971,
'4school': 'New Mexico State'},
{year: 1958, player: 'Dick Bass', yards: 1361, '4school': 'Pacific'},
{year: 1957,
player: 'Leon Burton',
yards: 1126,
'4school': 'Arizona State'},
{year: 1956,
player: 'Jim Crawford',
yards: 1104,
'4school': 'Wyoming'}];