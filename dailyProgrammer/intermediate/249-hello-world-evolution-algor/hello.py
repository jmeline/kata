import string
import random

result = 'Hello, world!'

def getRandomChar():
    strings = string.printable
    return ''.join(random.choice(strings))

def hammingDistance(s1, s2):
    if len(s1) != len(s2):
        raise ValueError("Unknown Value")
    return [ bool(ord(ch1) - ord(ch2)) for ch1, ch2 in zip(s1, s2) ]

def mutatePopulation(population, fitnessArray):
    newPopulation = ''
    for fitness, pop in zip(fitnessArray, population):
        if (not fitness):
            newPopulation += pop
        else:
            newPopulation += getRandomChar()
    return newPopulation

def runGenerations():
    bestFitness = len(result) * 1000
    currentGeneration = 1

    # initial population
    population = ''.join([getRandomChar() for _ in range(len(result))])
    fitness = bestFitness
    while(fitness > 0):
        # fitness test the population
        fitnessArray = hammingDistance(population, result)
        fitness = reduce(lambda x,y: x+y, fitnessArray)
        if (fitness < bestFitness):
            bestFitness = fitness
            print ("Gen: {0} | Fitness: {1} | {2}" \
                    .format(currentGeneration, fitness, population))
        population = mutatePopulation(population, fitnessArray)
        currentGeneration += 1
runGenerations()
