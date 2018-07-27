// College Football data
var data = [{year: 2017,
player: 'Mason Rudolph',
yards: 4904,
school: 'Oklahoma State'},
{year: 2016,
player: 'Patrick Mahomes',
yards: 5052,
school: 'Texas Tech'},
{year: 2015,
player: 'Brandon Doughty',
yards: 5055,
school: 'Western Kentucky'},
{year: 2014,
player: 'Brandon Doughty',
yards: 4830,
school: 'Western Kentucky'},
{year: 2013,
player: 'Derek Carr',
yards: 5083,
school: 'Fresno State'},
{year: 2012,
player: 'Nick Florence',
yards: 4309,
school: 'Baylor'},
{year: 2011,
player: 'Case Keenum',
yards: 5631,
school: 'Houston'},
{year: 2010,
player: 'Bryant Moniz',
yards: 5040,
school: 'Hawaii'},
{year: 2009,
player: 'Case Keenum',
yards: 5671,
school: 'Houston'},
{year: 2008,
player: 'Graham Harrell',
yards: 5111,
school: 'Texas Tech'},
{year: 2007,
player: 'Graham Harrell',
yards: 5705,
school: 'Texas Tech'},
{year: 2006,
player: 'Colt Brennan',
yards: 5549,
school: 'Hawaii'},
{year: 2005,
player: 'Colt Brennan',
yards: 4301,
school: 'Hawaii'},
{year: 2004,
player: 'Sonny Cumbie',
yards: 4742,
school: 'Texas Tech'},
{year: 2003,
player: 'B.J. Symons',
yards: 5833,
school: 'Texas Tech'},
{year: 2002,
player: 'Kliff Kingsbury',
yards: 5017,
school: 'Texas Tech'},
{year: 2001,
player: 'David Carr',
yards: 4839,
school: 'Fresno State'},
{year: 2000,
player: 'Chris Weinke',
yards: 4167,
school: 'Florida State'},
{year: 1999,
player: 'Tim Rattay',
yards: 3922,
school: 'Louisiana Tech'},
{year: 1998,
player: 'Tim Rattay',
yards: 4943,
school: 'Louisiana Tech'},
{year: 1997,
player: 'Ryan Leaf',
yards: 3968,
school: 'Washington State'},
{year: 1996,
player: 'Josh Wallwork',
yards: 4090,
school: 'Wyoming'},
{year: 1995,
player: 'Mike Maxwell',
yards: 3611,
school: 'Nevada'},
{year: 1994,
player: 'John Walsh',
yards: 3712,
school: 'Brigham Young'},
{year: 1993,
player: 'Chris Vargas',
yards: 4265,
school: 'Nevada'},
{year: 1992,
player: 'Jimmy Klingler',
yards: 3818,
school: 'Houston'},
{year: 1991,
player: 'Ty Detmer',
yards: 4031,
school: 'Brigham Young'},
{year: 1990,
player: 'Ty Detmer',
yards: 5188,
school: 'Brigham Young'},
{year: 1989, player: 'Andre Ware', yards: 4699, school: 'Houston'},
{year: 1988,
player: 'Scott Mitchell',
yards: 4322,
school: 'Utah'},
{year: 1987,
player: 'Todd Santos',
yards: 3932,
school: 'San Diego State'},
{year: 1986,
player: 'Mike Perez',
yards: 3225,
school: 'San Jose State'},
{year: 1985,
player: 'Robbie Bosco',
yards: 4273,
school: 'Brigham Young'},
{year: 1984,
player: 'Robbie Bosco',
yards: 3875,
school: 'Brigham Young'},
{year: 1983,
player: 'Steve Young',
yards: 3902,
school: 'Brigham Young'},
{year: 1982,
player: 'Todd Dillon',
yards: 3517,
school: 'Long Beach State'},
{year: 1981,
player: 'Sam King',
yards: 3778,
school: 'Nevada-Las Vegas'},
{year: 1980,
player: 'Jim McMahon',
yards: 4571,
school: 'Brigham Young'},
{year: 1979,
player: 'Marc Wilson',
yards: 3720,
school: 'Brigham Young'},
{year: 1978,
player: 'Mike Ford',
yards: 3007,
school: 'Southern Methodist'},
{year: 1977,
player: 'Doug Williams',
yards: 3286,
school: 'Grambling State'},
{year: 1976,
player: 'Gifford Nielsen',
yards: 3401,
school: 'Brigham Young'},
{year: 1975,
player: 'Craig Penrose',
yards: 2660,
school: 'San Diego State'},
{year: 1974,
player: 'Steve Bartkowski',
yards: 2580,
school: 'California'},
{year: 1973,
player: 'Jesse Freitas',
yards: 2993,
school: 'San Diego State'},
{year: 1972,
player: 'Don Strock',
yards: 3243,
school: 'Virginia Tech'},
{year: 1971,
player: 'Gary Huff',
yards: 2736,
school: 'Florida State'},
{year: 1970,
player: 'Jim Plunkett',
yards: 2980,
school: 'Stanford'},
{year: 1969,
player: 'Dennis Shaw',
yards: 3185,
school: 'San Diego State'},
{year: 1968,
player: 'Greg Cook',
yards: 3272,
school: 'Cincinnati'},
{year: 1967,
player: 'Sal Olivas',
yards: 2225,
school: 'New Mexico State'},
{year: 1966, player: 'Mark Reed', yards: 2368, school: 'Arizona'},
{year: 1965,
player: 'Bill Anderson',
yards: 3464,
school: 'Tulsa'},
{year: 1964, player: 'Jerry Rhome', yards: 2870, school: 'Tulsa'},
{year: 1963, player: 'Don Trull', yards: 2157, school: 'Baylor'},
{year: 1962,
player: 'George Mira',
yards: 1893,
school: 'Miami (FL)'},
{year: 1961,
player: 'Ron Miller',
yards: 1487,
school: 'Wisconsin'},
{year: 1960,
player: 'Norm Snead',
yards: 1676,
school: 'Wake Forest'},
{year: 1959,
player: 'Dick Norman',
yards: 1963,
school: 'Stanford'},
{year: 1958, player: 'Randy Duncan', yards: 1397, school: 'Iowa'},
{year: 1957, player: 'Lee Grosscup', yards: 1398, school: 'Utah'},
{year: 1956,
player: 'John Brodie',
yards: 1633,
school: 'Stanford'}];