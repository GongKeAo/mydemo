var arr = [196, 741, 961, 856, 499, 523]
for (var j = arr.length - 1; j >= 0; j--) {
    for (var i = 0; i <= j; i++) {
        if (arr[i] > arr[i + 1]) {
            var a = arr[i + 1]
            arr[i + 1] = arr[i]
            arr[i] = a
        }
        console.log(arr)
    }
}