def lineal_sort(arr):
    for i in range(len(arr)):
        num = arr[0]
        for j in range(len(arr)-i):
            if arr[j] < num:
                num = arr[j]
        arr.remove(num)
        arr.append(num)
    print(arr)

list = [123,214,3,2,22,3,32,-2,0]

lineal_sort(list)
