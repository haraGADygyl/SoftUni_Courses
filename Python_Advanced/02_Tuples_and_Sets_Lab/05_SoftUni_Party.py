guests_count = int(input())

guests = set()
for i in range(guests_count):
    codes = input()
    guests.add(codes)

guests_came = input()
while not guests_came == 'END':
    guests.remove(guests_came)

    guests_came = input()

guests_not_came = len(guests)

regular_guests = []
vip_guests = []

guests = sorted(list(guests))

print(guests_not_came)
[print(x) for x in guests]