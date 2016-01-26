#Description
#A handful of words have their letters in alphabetical order, that is nowhere in the word do you change direction in the word if you were to scan along the English alphabet. An example is the word "almost", which has its letters in alphabetical order.
#Your challenge today is to write a program that can determine if the letters in a word are in alphabetical order.
#As a bonus, see if you can find words spelled in reverse alphebatical order.
#Input Description
#
#You'll be given one word per line, all in standard English. Examples:
#    almost
#    cereal
#    Output Description
#
#    Your program should emit the word and if it is in order or not. Examples:
#    almost IN ORDER
#    cereal NOT IN ORDER
#    Challenge Input
#
#    billowy
#    biopsy
#    chinos
#    defaced
#    chintz
#    sponged
#    bijoux
#    abhors
#    fiddle
#    begins
#    chimps
#    wronged
#    Challenge Output
#
#    billowy IN ORDER
#    biopsy IN ORDER
#    chinos IN ORDER
#    defaced NOT IN ORDER
#    chintz IN ORDER
#    sponged REVERSE ORDER
#    bijoux IN ORDER
#    abhors IN ORDER
#    fiddle NOT IN ORDER
#    begins IN ORDER
#    chimps IN ORDER
#    wronged REVERSE ORDER

class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'

if __name__ == '__main__':
    f = open('228-sampledata', 'r')

    for line in f:
        isInOrder = True
        for i in range(len(line)-1):
            if ord(line[i].lower()) < ord(line[i-1].lower()):
                isInOrder = False
        if isInOrder:
            print(bcolors.OKGREEN + line.strip('\n') + bcolors.ENDC + " is in order")
        else:
            print(bcolors.FAIL + line.strip('\n') + bcolors.ENDC + " is not in order")
