# Challenge 1: Savings Goal
balance = 1000.00
goal = 1500.00
monthly_deposit = 100.00
months = 0

while balance < goal:
    balance += monthly_deposit
    balance += balance * 0.01
    months += 1

print("--- Savings Goal ---")
print(f"Months to reach goal: {months}")
print(f"Final balance: ${balance:.2f}")

# Challenge 2: Event Registration
registered_guests = ["Ava", "Ben", "Chloe", "Diego", "Fatima"]
checked_in = ["Ava", "Diego", "Fatima"]

print("\n--- Event Registration ---")
for guest in checked_in:
    if guest in registered_guests:
        print(f"{guest} checked in")

print("Absent guests:")
for guest in registered_guests:
    if guest not in checked_in:
        print(guest)

# Challenge 3: Weather Report
temperatures = [18, 21, 19, 23, 25, 20, 17]
total = 0
warm_days = 0

for temperature in temperatures:
    total += temperature
    if temperature >= 20:
        warm_days += 1

print("\n--- Weather Report ---")
print(f"Highest: {max(temperatures)}°C")
print(f"Lowest: {min(temperatures)}°C")
print(f"Average: {total / len(temperatures):.1f}°C")
print(f"Warm days: {warm_days}")

# Challenge 4: Restaurant Ordering
menu = {
    1: ("Burger", 12.50),
    2: ("Pizza", 15.00),
    3: ("Salad", 8.50),
    4: ("Pasta", 13.75),
}
order = {}

print("\n--- Restaurant Ordering ---")
for number, item in menu.items():
    print(f"{number}. {item[0]} - ${item[1]:.2f}")
print("0. Finish")

while True:
    choice = int(input("Choose an item: "))
    if choice == 0:
        break
    if choice in menu:
        quantity = int(input("Quantity: "))
        order[choice] = order.get(choice, 0) + quantity
    else:
        print("Invalid choice")

subtotal = 0
print("\n--- Receipt ---")
for choice, quantity in order.items():
    item, price = menu[choice]
    cost = price * quantity
    subtotal += cost
    print(f"{quantity} x {item}: ${cost:.2f}")

tax = subtotal * 0.05
print(f"Subtotal: ${subtotal:.2f}")
print(f"Tax: ${tax:.2f}")
print(f"Total: ${subtotal + tax:.2f}")
