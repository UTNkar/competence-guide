"""
Program that converts csv file to json files.

"""
import csv
import json

def create_json(csvFilePath, jsonFilePath):
    
    data = {}
    encoding = 'utf-8'
    

    with open(csvFilePath, encoding = encoding) as csvf:
        csvReader = csv.DictReader(csvf, restkey="keywords")
        for rows in csvReader:
            #grab JSON keys
            key = rows['Program']
            data[key] = rows
            
    with open(jsonFilePath, 'w', encoding = encoding) as jsonf:
        jsonf.write(json.dumps(data, ensure_ascii=False,  indent=4))


# Paths to csv file and json file
csvFilePath = r'Categorized_Master_Programs.csv'
jsonFilePath = r'../assets/programInformation.json'

# Call the make_json function
create_json(csvFilePath, jsonFilePath)