import string
import random

result = 'Hello, world!'

def getRandomChar():
    strings = string.printable
    return ''.join(random.choice(strings))

def getRandomString():
    return ''.join([getRandomChar() for _ in range(len(result))])

def hammingDistance(s1, s2):
    if len(s1) != len(s2):
        raise ValueError("Unknown Value")
    return [ abs(ord(ch1) - ord(ch2)) for ch1, ch2 in zip(s1, s2) ]

def mutatePopulation(population, fitnessArray):
    newPopulation = ''
    zippedValues = zip(population, fitnessArray)
    for pop, fitness in zippedValues:
        if (fitness == 0):
            newPopulation += pop
        else:
            newPopulation += getRandomChar()
    return newPopulation

def runGenerations():
    fitnessTest = lambda population: hammingDistance(population, result)
    fitness = bestFitness = len(result) * 1000
    currentGeneration = 1

    # initial population
    population = getRandomString()
    while(fitness > 0):
        # fitness test the population
        fitnessArray = fitnessTest(population)
        fitness = reduce(lambda x,y: x+y, fitnessArray)
        # evaluate the fitness test
        if (fitness < bestFitness):
            bestFitness = fitness
            print ("Gen: {0} | Fitness: {1} | {2}" \
                    .format(currentGeneration, fitness, population))
        # Mutate and kill off unfit members of the population
        population = mutatePopulation(population, fitnessArray)
        currentGeneration += 1
runGenerations()
