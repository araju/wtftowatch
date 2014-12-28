# converts the tsv file of movies into a json txt file
import sys
import json

def readTSV(csvFile):
    columnLabels = []
    counter = 0
    allMovies = []
    with open(csvFile) as f:
        for line in f:
            if columnLabels == []:
                # this is the first line
                columnLabels = line.split('\t')
            else:
                counter += 1
                movie = line.split('\t')
                info = {}
                for i in range(len(movie)):
                    info[columnLabels[i]] = movie[i]
                allMovies.append(info)
    movieDict = {
        "movies" : allMovies,
        "movieCount" : counter
    }
    return movieDict


def writeJSON(jsonFile, movies):
    with open(jsonFile, 'w') as outfile:
        json.dump(movies, outfile)


if __name__ == '__main__':
    if len(sys.argv) != 3:
        print 'Need to provide 2 args: name of the tsv file and name of the json file'
    else:
        movieDict = readTSV(sys.argv[1])
        writeJSON(sys.argv[2], movieDict)
