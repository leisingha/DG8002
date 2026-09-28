# Activity 3: Python Calculations
# Complete five practical calculation challenges using variables, arithmetic, and formatted output.

# Challenge 1: Currency Conversion
# Convert Canadian dollars to US dollars using the provided exchange rate.
cad_amount = 500.00
exchange_rate = 0.72
usd_amount = cad_amount * exchange_rate

# Challenge 2: Temperature Conversion
# Convert Celsius to Fahrenheit. Test with 20°C, which should equal 68°F.
celsius_temp = 20
fahrenheit_temp = (celsius_temp * 9 / 5) + 32

# Challenge 3: Tip Calculator
# Calculate the tip, total bill, and how much each person pays.
meal_cost = 85.50
tip_rate = 0.18
tip_amount = meal_cost * tip_rate
total_bill = meal_cost + tip_amount
num_people = 4
amount_per_person = total_bill / num_people

# Challenge 4: Investment Calculator
# Calculate the simple interest earned and total amount after the investment period.
principal = 1000.00
annual_interest_rate = 0.05
years = 3
interest_earned = principal * annual_interest_rate * years
total_investment_value = principal + interest_earned

# Challenge 5: Road Trip Calculator
# Estimate travel time, fuel usage, fuel cost, and cost per passenger.
distance_km = 600
average_speed_kmh = 80
fuel_efficiency_km_per_l = 10
fuel_price_per_l = 1.80
passenger_count = 4

travel_time_hours = distance_km / average_speed_kmh
fuel_used_liters = distance_km / fuel_efficiency_km_per_l
fuel_cost = fuel_used_liters * fuel_price_per_l
cost_per_passenger = fuel_cost / passenger_count
# 1. Currency Conversion
exchange_rate = 0.72
amount_cad = 250.00

amount_usd = amount_cad * exchange_rate

print("--- Currency Conversion ---")
print(f"${amount_cad:.2f} CAD = ${amount_usd:.2f} USD")

# 2. Temperature Conversion
celsius = 20

fahrenheit = celsius * 9 / 5 + 32

print("\n--- Temperature Conversion ---")
print(f"{celsius}°C = {fahrenheit:.1f}°F")

# 3. Tip Calculator
meal_cost = 86.50
tip_percent = 18
people = 4

tip = meal_cost * tip_percent / 100
total = meal_cost + tip
per_person = total / people

print("\n--- Tip Calculator ---")
print(f"Meal cost:  ${meal_cost:.2f}")
print(f"Tip ({tip_percent}%): ${tip:.2f}")
print(f"Total:      ${total:.2f}")
print(f"Each of {people} owes: ${per_person:.2f}")

# 4. Investment Calculator
principal = 5000.00
rate_percent = 4.5
years = 3

interest = principal * (rate_percent / 100) * years
final_amount = principal + interest

print("\n--- Investment Calculator ---")
print(f"Principal:       ${principal:.2f}")
print(f"Interest earned: ${interest:.2f}")
print(f"Final amount:    ${final_amount:.2f}")

# 5. Road Trip Calculator
distance_km = 540
average_speed = 90         # km/h
fuel_efficiency = 8.5      # litres per 100 km
fuel_price = 1.65          # dollars per litre
passengers = 3

travel_time = distance_km / average_speed
fuel_used = distance_km * fuel_efficiency / 100
fuel_cost = fuel_used * fuel_price
cost_per_passenger = fuel_cost / passengers

print("\n--- Road Trip Calculator ---")
print(f"Travel time:        {travel_time:.1f} hours")
print(f"Fuel used:          {fuel_used:.1f} L")
print(f"Fuel cost:          ${fuel_cost:.2f}")
print(f"Cost per passenger: ${cost_per_passenger:.2f}")
# Display all results with clear formatting.
print("Activity 3: Python Calculations")
print("=" * 35)
print(f"1. Currency Conversion: ${cad_amount:.2f} CAD = ${usd_amount:.2f} USD")
print(f"2. Temperature Conversion: {celsius_temp}°C = {fahrenheit_temp:.0f}°F")
print(f"3. Tip Calculator: Meal = ${meal_cost:.2f}, Tip = ${tip_amount:.2f}, Total = ${total_bill:.2f}")
print(f"   Split among {num_people} people: ${amount_per_person:.2f} each")
print(f"4. Investment Calculator: Principal = ${principal:.2f}, Interest = ${interest_earned:.2f}, Total = ${total_investment_value:.2f}")
print(f"5. Road Trip Calculator: Travel time = {travel_time_hours:.2f} hours")
print(f"   Fuel used = {fuel_used_liters:.2f} L, Fuel cost = ${fuel_cost:.2f}")
print(f"   Cost per passenger = ${cost_per_passenger:.2f}")
