import os

#  1
def celsius_to_kelvin(number):
    number = number + 273.15
    return round(number, 2)

#  2
def celsius_to_fahrenheit(number):
    number = number * 9 / 5 + 32
    return round(number, 2)

# 3 This function also works for kilometers/hour to miles/hour.
def kilometers_to_miles(number):
    number = number / 1.60934
    return round(number, 2)

# 4 This function also works for miles/hour to kilometers/hour.
def miles_to_kilometers(number):
    number = number * 1.60934
    return round(number, 2)

#  5
def centimeters_to_inches(number):
    number = number / 2.54
    return round(number, 2)

#  6
def inches_to_centimeters(number):
    number = number * 2.54
    return round(number, 2)

#  7
def feet_to_meters(number):
    number = number / 3.28084
    return round(number, 2)

#  8
def meters_to_feet(number):
    number = number * 3.28084
    return round(number, 2)

print(''' 
                WELCOME TO THE PROGRAM. WHAT ARE WE GOING TO DO? 
                
                         ▒▒▒▒▒▒▐███████▌▒▒▒▒▒▒▒
                         ▒▒▒▒▒▒▐░▀░▀░▀░▌▒▒▒▒▒▒▒
                         ▒▒▒▒▒▒▐▄▄▄▄▄▄▄▌▒▒▒▒▒▒▒
                         ▄▀▀▀█▒▐░▀▀▄▀▀░▌▒█▀▀▀▄▒
                         ▌▌▌▌▐▒▄▌░▄▄▄░▐▄▒▌▐▐▐▐▒
                         ▒▒▓▓▒▒▓▓▒▒▓▓▒▒▓▓▒▒▓▓▒▒                
    ''')

# Makes the program continue until 0 is pressed.
while True:
    # Only allows values from 0 to 10; if not valid, it repeats.
    while True:
        try:
            option = int(input(''' 
                    
                        1. Convert Celsius to Kelvin.
                        2. Convert Celsius to Fahrenheit.
                        3. Convert kilometers to miles. 
                        4. Convert miles to kilometers.
                        5. Convert centimeters to inches.
                        6. Convert inches to centimeters.
                        7. Convert feet to meters.
                        8. Convert meters to feet.
                        9. Convert kilometers/hour to miles/hour.
                       10. Convert miles/hour to kilometers/hour.
                    
                        0. Exit the program.
                                                         
                '''))
            
            if 0 <= option <= 10: 
                break
            else: 
                print(f'\n{option} is not a valid option.')

        except: 
            print('\n Only integers are allowed.')
            pass
        
# Calls the function, prints, and checks if the number to be converted is valid. 

    if option == 1:
        while True:
            try:
                value = entry = float(input(f'\n {option}. Please enter the number you want to convert from Celsius to Kelvin: '))
                print(f' {entry} degrees Celsius equals {celsius_to_kelvin(value)} Kelvin.')
                break
            except:
                print('Only numbers are allowed.')
            pass

    elif option == 2:
        while True:
            try:
                value = entry = float(input(f'\n {option}. Please enter the number you want to convert from Celsius to Fahrenheit: '))
                print(f' {entry} degrees Celsius equals {celsius_to_fahrenheit(value)} Fahrenheit.')
                break
            except:
                print('Only numbers are allowed.')
            pass

    elif option == 3:
        while True:
            try:
                value = entry = float(input(f'\n {option}. Please enter the number you want to convert from kilometers to miles: '))
                print(f' {entry} kilometers equals {kilometers_to_miles(value)} miles.')
                break
            except:
                print('Only numbers are allowed.')
            pass

    elif option == 4:
        while True:
            try:
                value = entry = float(input(f'\n {option}. Please enter the number you want to convert from miles to kilometers: '))
                print(f' {entry} miles equals {miles_to_kilometers(value)} kilometers.')
                break
            except:
                print('Only numbers are allowed.')
            pass

    elif option == 5:
        while True:
            try:
                value = entry = float(input(f'\n {option}. Please enter the number you want to convert from centimeters to inches: '))
                print(f' {entry} centimeters equals {centimeters_to_inches(value)} inches.')
                break
            except:
                print('Only numbers are allowed.')
                pass

    elif option == 6:
        while True:
            try:
                value = entry = float(input(f'\n {option}. Please enter the number you want to convert from inches to centimeters: '))
                print(f' {entry} inches equals {inches_to_centimeters(value)} centimeters.')
                break
            except:
                print('Only numbers are allowed.')
            pass

    elif option == 7:
        while True:
            try:
                value = entry = float(input(f'\n {option}. Please enter the number you want to convert from feet to meters: '))
                print(f' {entry} feet equals {feet_to_meters(value)} meters.')
                break

            except:
                print('Only numbers are allowed.')
            pass

    elif option == 8:
        while True:
            try:
                value = entry = float(input(f'\n {option}. Please enter the number you want to convert from meters to feet: '))
                print(f' {entry} meters equals {meters_to_feet(value)} feet.') 
                break

            except:
                print('Only numbers are allowed.')
            pass

    elif option == 9:
        while True:
            try:
                value = entry = float(input(f'\n {option}. Please enter the number you want to convert from kilometers/hour to miles/hour: '))
                print(f'{entry} kilometers/hour equals {kilometers_to_miles(value)} miles/hour.')
                break

            except:
                print('Only numbers are allowed.')
            pass
        
    elif option == 10:
        while True:
            try:
                value = entry = float(input(f'\n {option}. Please enter the number you want to convert from miles/hour to kilometers/hour: '))
                print(f' {entry} miles/hour equals {miles_to_kilometers(value)} kilometers/hour.')
                break

            except:
                print('Only numbers are allowed.')
            pass

    else:
        print('''

                    THANK YOU FOR USING THE PROGRAM. 
                        We hope to see you again.

                         ░░░░░░░░░░░░░░░░░░░░░░
                         ░░░▄█████▄░░▄█████▄░░░
                         ░░░▀██▄██▀░░▀██▄██▀░░░
                         ░░░░░░░░░░░░░░░░░░░░░░
                         ░░░▄░░░░░░░░░░░░░░▄░░░
                         ░░░░▀▄▄▄▄▄▄▄▄▄▄▄▄▀░░░░


        ''')
        break

    # Press to continue

    input("\nPress enter to continue...")

    # Terminal clear
    os.system('cls' if os.name == 'nt' else 'clear')
