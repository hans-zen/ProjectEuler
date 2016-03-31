def bignumber(x,y):
	power = x**y
	stringpower = str(power)
	suma = 0
	for number in stringpower:
		suma += int(number)

	print suma

bignumber(2,1000)