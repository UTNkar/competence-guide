"""
Program that converts csv file to json files.

"""
import csv
import json
import os

# Function to remove trailing commas from a line
def clean_trailing_commas(file_path, cleaned_file_path):
    with open(file_path, mode="r", encoding="utf-8-sig") as infile, open(cleaned_file_path, mode="w", encoding="utf-8") as outfile:
        i = 0
        for line in infile:
            # Strip trailing commas from the line
            cleaned_line = line.rstrip(",\n")
           
           # Leave one comma on all lines except for the first one to avoid null values
            if i != 0:
                outfile.write(cleaned_line + ",\n")
            else:
                outfile.write(cleaned_line + "\n")
            i +=1


def create_json(csvFilePath, jsonFilePath):
    data = {}
    encoding = 'utf-8-sig'  

    with open(csvFilePath, encoding = encoding) as csvf:
        csvReader = csv.DictReader(csvf, restkey="keywords")
        for rows in csvReader:
            #grab JSON keys
            key = rows['Program']
            data[key] = rows
            
    with open(jsonFilePath, 'w', encoding = encoding) as jsonf:
        jsonf.write(json.dumps(data, ensure_ascii=False,  indent=4))



if __name__ == "__main__":
    original_file = input(r'Enter the path of the csv file: ')
    cleaned_file = r'cleaned_' + original_file
    output_file = r'../assets/programInformation.json'

    clean_trailing_commas(original_file, cleaned_file)
    create_json(cleaned_file, output_file)
    os.remove(cleaned_file)

    print(f"CSV converted to JSON. Output saved to {output_file}")