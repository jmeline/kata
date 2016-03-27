#!/usr/bin/python
from datetime import date
import re
class President:
    def __init__(self, info):
        self.name = info[0].strip()
        self.birthDate = info[1].strip()
        self.birthPlace = info[2].strip()
        self.deathDate = info[3].strip()
        self.deathPlace = info[4].strip()

        self.birthYear = int(re.search(r'\d{4}', self.birthDate).group(0))
        if (self.deathDate):
            self.deathYear = int(re.search(r'\d{4}', self.deathDate).group(0))
        else:
            self.deathYear = None

    def __str__(self):
        return 'President Name: {name}, BirthDate: {birthDate}, BirthPlace: {birthPlace}, DeathDate: {deathDate}, DeathPlace: {deathPlace}, birthYear: {birthYear}  deathYear: {deathYear}'.format(name=self.name, birthDate=self.birthDate, birthPlace=self.birthPlace, deathDate=self.deathDate, deathPlace=self.deathPlace, birthYear=self.birthYear, deathYear=self.deathYear)

    def wasIAlive(self, currentDate):
        if (self.deathYear):
            return self.birthYear <= currentDate and self.deathYear >= currentDate
        return self.birthYear <= currentDate

def getPresidentGen():
    """TODO: Docstring for getLineGen.
    :returns: generator

    """
    f = open('./data.csv')
    # skip the first line
    f.readline()
    for line in f.readlines():
        yield President(line.split(','))

# Load all data
genFunc = getPresidentGen()
# print(next(genFunc))
presidents = [ i for i in genFunc ]
print 'president length: ', len(presidents)
for year in range(1732, 2009):
    presidentsAlive = [ president for president in presidents if president.wasIAlive(year) ]
    print year, ": ", len(presidentsAlive)
    # print presidents[0].wasIAlive(1732)
